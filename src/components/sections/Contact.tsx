"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Mail, MapPin, Send, Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { personal } from "@/data/personal";
import { socials } from "@/data/socials";
import AnimatedSection from "@/components/shared/AnimatedSection";
import Button from "@/components/ui/Button";
import SocialLink from "@/components/ui/SocialLink";
import SectionHeading from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";
import { contactAction } from "@/app/actions/contact";
import { brandIcons } from "@/components/ui/BrandIcons";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setStatus("loading");
    setErrorMessage("");

    try {
      const result = await contactAction(data);
      if (result.success) {
        setStatus("success");
        reset();
      } else {
        setStatus("error");
        setErrorMessage(result.error || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-20 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            title="Contact Me"
            subtitle="Have an engineering project in mind, need technical advisory, or want to explore full-time collaboration? Reach out below."
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start">
          {/* Direct Channels & Details */}
          <AnimatedSection delay={0.1} className="space-y-6 sm:space-y-8 w-full">
            <div className="p-5 sm:p-8 rounded-3xl border border-border/80 bg-surface/80 backdrop-blur-xl shadow-lg space-y-5 sm:space-y-6">
              <p className="text-foreground/90 text-sm sm:text-base leading-relaxed">
                I am actively taking on select engineering projects, technical advisory,
                and high-impact development engagements. Let&apos;s build scalable, reliable software together.
              </p>

              <div className="space-y-3.5 sm:space-y-4 pt-2">
                <div className="flex items-center gap-3 sm:gap-4 p-3.5 sm:p-4 rounded-2xl border border-border/70 bg-surface-muted/60 backdrop-blur-xs">
                  <div className="p-2.5 sm:p-3 rounded-xl bg-accent/10 border border-accent/20 flex-shrink-0">
                    <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-accent" aria-hidden="true" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] sm:text-xs font-mono uppercase tracking-wider text-muted">Direct Email</p>
                    <a
                      href={`mailto:${personal.email}`}
                      className="text-foreground text-xs sm:text-base font-semibold hover:text-accent transition-colors break-all"
                    >
                      {personal.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 sm:gap-4 p-3.5 sm:p-4 rounded-2xl border border-border/70 bg-surface-muted/60 backdrop-blur-xs">
                  <div className="p-2.5 sm:p-3 rounded-xl bg-accent/10 border border-accent/20 flex-shrink-0">
                    <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-accent" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-[10px] sm:text-xs font-mono uppercase tracking-wider text-muted">Location</p>
                    <p className="text-foreground text-xs sm:text-base font-semibold">{personal.location}</p>
                  </div>
                </div>
              </div>

              <div>
                <p className="text-xs font-mono uppercase tracking-wider text-muted mb-3">Connect Online</p>
                <div className="flex flex-wrap gap-2.5">
                  {socials.map((social) => (
                    <SocialLink
                      key={social.name}
                      name={social.name}
                      url={social.url}
                      icon={brandIcons[social.icon]}
                      label={social.label}
                    />
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Contact Form */}
          <AnimatedSection delay={0.2} className="w-full">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="p-5 sm:p-8 rounded-3xl border border-border/80 bg-surface/80 backdrop-blur-xl shadow-lg space-y-4 sm:space-y-5"
              noValidate
            >
              {status === "success" && (
                <div className="flex items-start gap-3 p-4 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-sm">
                  <CheckCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold">Message sent successfully!</p>
                    <p className="text-xs mt-0.5 opacity-90">Thank you for reaching out. I will respond to your email promptly.</p>
                  </div>
                </div>
              )}

              {status === "error" && (
                <div className="flex items-start gap-3 p-4 rounded-2xl border border-red-500/30 bg-red-500/10 text-red-600 dark:text-red-400 text-sm">
                  <AlertCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold">Unable to send message</p>
                    <p className="text-xs mt-0.5 opacity-90">{errorMessage}</p>
                  </div>
                </div>
              )}

              <div>
                <label htmlFor="name" className="block text-xs font-semibold text-foreground mb-1.5">
                  Your Name <span className="text-accent">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  {...register("name", { required: "Name is required" })}
                  className={cn(
                    "w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl border bg-surface text-foreground text-sm placeholder:text-muted/60 transition-colors focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent",
                    errors.name ? "border-red-500" : "border-border"
                  )}
                  placeholder="John Doe"
                />
                {errors.name && (
                  <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-semibold text-foreground mb-1.5">
                  Email Address <span className="text-accent">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                  className={cn(
                    "w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl border bg-surface text-foreground text-sm placeholder:text-muted/60 transition-colors focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent",
                    errors.email ? "border-red-500" : "border-border"
                  )}
                  placeholder="john@example.com"
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs font-semibold text-foreground mb-1.5">
                  Subject <span className="text-accent">*</span>
                </label>
                <input
                  id="subject"
                  type="text"
                  {...register("subject", { required: "Subject is required" })}
                  className={cn(
                    "w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl border bg-surface text-foreground text-sm placeholder:text-muted/60 transition-colors focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent",
                    errors.subject ? "border-red-500" : "border-border"
                  )}
                  placeholder="Project Inquiry / Job Opportunity"
                />
                {errors.subject && (
                  <p className="mt-1 text-xs text-red-500">{errors.subject.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-semibold text-foreground mb-1.5">
                  Message <span className="text-accent">*</span>
                </label>
                <textarea
                  id="message"
                  rows={4}
                  {...register("message", {
                    required: "Message is required",
                    minLength: { value: 10, message: "Message must be at least 10 characters" },
                  })}
                  className={cn(
                    "w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl border bg-surface text-foreground text-sm placeholder:text-muted/60 transition-colors focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent resize-none",
                    errors.message ? "border-red-500" : "border-border"
                  )}
                  placeholder="Tell me about your project, timeline, and goals..."
                />
                {errors.message && (
                  <p className="mt-1 text-xs text-red-500">{errors.message.message}</p>
                )}
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={status === "loading"}
                className="w-full shadow-lg shadow-accent/25 hover:shadow-accent/40"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin mr-2" />
                    Sending Message...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
