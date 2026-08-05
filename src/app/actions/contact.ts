"use server";

import { z } from "zod";
import { headers } from "next/headers";
import { Resend } from "resend";

/**
 * Zod schema for the contact form payload.
 * Validates and normalizes every field before it reaches the email provider.
 * All strings are trimmed and length-capped to prevent abuse.
 */
const contactSchema = z.object({
  name: z.string().trim().min(2, "Name is too short").max(100, "Name is too long"),
  email: z.string().trim().toLowerCase().email("Invalid email address").max(254),
  subject: z.string().trim().min(2, "Subject is required").max(200, "Subject is too long"),
  message: z
    .string()
    .trim()
    .min(10, "Message must be at least 10 characters")
    .max(5000, "Message is too long"),
});

/** The validated contact form payload. */
type ContactInput = z.infer<typeof contactSchema>;

/** The result returned to the client after submitting the form. */
export type ContactActionResult =
  | { success: true; message: string }
  | { success: false; error: string };

// ---------------------------------------------------------------------------
// Rate limiting
// ---------------------------------------------------------------------------
// In-memory, best-effort rate limiting: each client IP can submit a limited
// number of messages per sliding window. State is stored per serverless
// instance, so this is a defense-in-depth measure rather than a hard guarantee.
// For strict production limits, replace with a durable store (e.g. Redis/Upstash).
const RATE_LIMIT_MAX = 3;
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000; // 1 hour
const rateLimitBuckets = new Map<string, { count: number; resetAt: number }>();

/** Returns true when the given IP has exceeded the submission limit. */
function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const bucket = rateLimitBuckets.get(ip);

  if (!bucket || bucket.resetAt <= now) {
    rateLimitBuckets.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  bucket.count += 1;
  return bucket.count > RATE_LIMIT_MAX;
}

/** Best-effort extraction of the client IP from the request headers. */
async function getClientIp(): Promise<string> {
  try {
    const headerStore = await headers();
    return headerStore.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  } catch {
    return "unknown";
  }
}

/**
 * Server action that validates a contact submission and sends it via Resend.
 *
 * Runs entirely on the server, so the Resend API key never reaches the client.
 * Env vars are read at request time and the action fails gracefully (without
 * throwing) when they are missing or when the email provider returns an error.
 */
export async function contactAction(data: ContactInput): Promise<ContactActionResult> {
  // 1. Validate the incoming payload.
  const result = contactSchema.safeParse(data);
  if (!result.success) {
    return {
      success: false,
      error: result.error.issues[0]?.message ?? "Validation failed",
    };
  }

  // 2. Enforce a simple rate limit per client IP.
  const ip = await getClientIp();
  if (isRateLimited(ip)) {
    return {
      success: false,
      error: "Too many messages. Please try again later.",
    };
  }

  // 3. Resolve required configuration.
  const apiKey = process.env.RESEND_API_KEY;
  const recipient = process.env.CONTACT_RECIPIENT_EMAIL;
  const fromEmail = process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev";

  if (!apiKey || !recipient) {
    // Never expose configuration details to the client.
    console.error("[contact] Missing RESEND_API_KEY or CONTACT_RECIPIENT_EMAIL.");
    return {
      success: false,
      error: "Email service is not configured. Please try again later.",
    };
  }

  // 4. Send the email.
  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: fromEmail,
      to: [recipient],
      replyTo: result.data.email,
      subject: `Portfolio Contact: ${result.data.subject}`,
      text: `Name: ${result.data.name}\nEmail: ${result.data.email}\n\n${result.data.message}`,
    });

    if (error) {
      console.error("[contact] Resend returned an error:", error.name, error.message);
      return {
        success: false,
        error: "Failed to send your message. Please try again later.",
      };
    }

    return { success: true, message: "Message sent successfully!" };
  } catch (err) {
    console.error("[contact] Unexpected error while sending email:", err);
    return {
      success: false,
      error: "Something went wrong. Please try again later.",
    };
  }
}
