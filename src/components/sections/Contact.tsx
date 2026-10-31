"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
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
    <section id="contact" className="py-20 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            badge="📬 Get In Touch"
            title="Let's Build Something Exceptional"
            subtitle="Have an engineering project in mind, need technical advisory, or want to explore full-time collaboration? Reach out below."
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Direct Channels & Details */}
          <AnimatedSection delay={0.1} className="space-y-8">
            <div className="p-8 rounded-3xl border border-border/80 bg-surface/80 backdrop-blur-xl shadow-lg space-y-6">
              <p className="text-foreground/90 text-base leading-relaxed">
                I am actively taking on select engineering projects, technical advisory,
                and high-impact development engagements. Let&apos;s build scalable, reliable software together.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-center gap-4 p-4 rounded-2xl border border-border/70 bg-surface-muted/60 backdrop-blur-xs">
                  <div className="p-3 rounded-xl bg-accent/10 border border-accent/20">
                    <Mail className="h-5 w-5 text-accent" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs font-mono uppercase tracking-wider text-muted">Direct Email</p>
                    <a
                      href={`mailto:${personal.email}`}
                      className="text-foreground font-semibold hover:text-accent transition-colors"
                    >
                      {personal.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-2xl border border-border/70 bg-surface-muted/60 backdrop-blur-xs">
                  <div className="p-3 rounded-xl bg-accent/10 border border-accent/20">
                    <MapPin className="h-5 w-5 text-accent" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs font-mono uppercase tracking-wider text-muted">Location</p>
                    <p className="text-foreground font-semibold">{personal.location}</p>
                  </div>
                </div>
              </div>

              <div>
                <p className="text-xs font-mono uppercase tracking-wider text-muted mb-3">
                  Connect & Socials
                </p>
                <div className="flex items-center gap-2.5">
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

          {/* Form */}
          <AnimatedSection delay={0.2}>
            <div className="p-8 md:p-10 rounded-3xl border border-border/80 bg-surface/80 backdrop-blur-xl shadow-xl">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-foreground mb-2">
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    {...register("name", { required: "Name is required" })}
                    aria-describedby={errors.name ? "name-error" : undefined}
                    className={cn(
                      "w-full px-4 py-3 rounded-xl bg-surface border text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-all text-sm",
                      errors.name ? "border-red-500" : "border-border/80"
                    )}
                    placeholder="Enter your name"
                  />
                  {errors.name && (
                    <p id="name-error" className="mt-1.5 text-xs text-red-400" role="alert">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-foreground mb-2">
                    Email Address
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
                    aria-describedby={errors.email ? "email-error" : undefined}
                    className={cn(
                      "w-full px-4 py-3 rounded-xl bg-surface border text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-all text-sm",
                      errors.email ? "border-red-500" : "border-border/80"
                    )}
                    placeholder="you@company.com"
                  />
                  {errors.email && (
                    <p id="email-error" className="mt-1.5 text-xs text-red-400" role="alert">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs font-semibold uppercase tracking-wider text-foreground mb-2">
                    Subject / Project
                  </label>
                  <input
                    id="subject"
                    type="text"
                    {...register("subject", { required: "Subject is required" })}
                    aria-describedby={errors.subject ? "subject-error" : undefined}
                    className={cn(
                      "w-full px-4 py-3 rounded-xl bg-surface border text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-all text-sm",
                      errors.subject ? "border-red-500" : "border-border/80"
                    )}
                    placeholder="What would you like to discuss?"
                  />
                  {errors.subject && (
                    <p id="subject-error" className="mt-1.5 text-xs text-red-400" role="alert">
                      {errors.subject.message}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-foreground mb-2">
                    Message Details
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    {...register("message", { required: "Message is required", minLength: { value: 10, message: "Message must be at least 10 characters" } })}
                    aria-describedby={errors.message ? "message-error" : undefined}
                    className={cn(
                      "w-full px-4 py-3 rounded-xl bg-surface border text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-all text-sm resize-none",
                      errors.message ? "border-red-500" : "border-border/80"
                    )}
                    placeholder="Tell me about your product, timeline, and requirements..."
                  />
                  {errors.message && (
                    <p id="message-error" className="mt-1.5 text-xs text-red-400" role="alert">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full shadow-lg shadow-accent/25 hover:shadow-accent/40"
                  disabled={status === "loading"}
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" aria-hidden="true" />
                      <span>Send Message</span>
                    </>
                  )}
                </Button>

                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-500"
                    role="alert"
                  >
                    <CheckCircle className="h-5 w-5" aria-hidden="true" />
                    <span className="text-sm font-semibold">Message delivered! I will reply shortly.</span>
                  </motion.div>
                )}

                {status === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400"
                    role="alert"
                  >
                    <AlertCircle className="h-5 w-5" aria-hidden="true" />
                    <span className="text-sm font-medium">{errorMessage}</span>
                  </motion.div>
                )}
              </form>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
