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
    <section id="contact" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            title="Contact Me"
            subtitle="Have a project in mind or just want to say hello? I would love to hear from you."
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <AnimatedSection delay={0.1} className="space-y-8">
            <div>
              <p className="text-foreground/90 leading-relaxed mb-6">
                I am currently available for freelance work and full-time opportunities.
                If you have a project that needs some creative injection, or if you want
                to discuss potential collaboration, feel free to reach out.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-surface border border-border">
                  <Mail className="h-5 w-5 text-accent" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm text-muted">Email</p>
                  <a href={`mailto:${personal.email}`} className="text-foreground hover:text-accent transition-colors">
                    {personal.email}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-surface border border-border">
                  <MapPin className="h-5 w-5 text-accent" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm text-muted">Location</p>
                  <p className="text-foreground">{personal.location}</p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-2">
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
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  {...register("name", { required: "Name is required" })}
                  aria-describedby={errors.name ? "name-error" : undefined}
                  className={cn(
                    "w-full px-4 py-3 rounded-lg bg-surface border text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all",
                    errors.name ? "border-red-500" : "border-border"
                  )}
                  placeholder="Your name"
                />
                {errors.name && (
                  <p id="name-error" className="mt-1.5 text-sm text-red-400" role="alert">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email
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
                    "w-full px-4 py-3 rounded-lg bg-surface border text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all",
                    errors.email ? "border-red-500" : "border-border"
                  )}
                  placeholder="you@example.com"
                />
                {errors.email && (
                  <p id="email-error" className="mt-1.5 text-sm text-red-400" role="alert">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  {...register("subject", { required: "Subject is required" })}
                  aria-describedby={errors.subject ? "subject-error" : undefined}
                  className={cn(
                    "w-full px-4 py-3 rounded-lg bg-surface border text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all",
                    errors.subject ? "border-red-500" : "border-border"
                  )}
                  placeholder="How can I help you?"
                />
                {errors.subject && (
                  <p id="subject-error" className="mt-1.5 text-sm text-red-400" role="alert">
                    {errors.subject.message}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  {...register("message", { required: "Message is required", minLength: { value: 10, message: "Message must be at least 10 characters" } })}
                  aria-describedby={errors.message ? "message-error" : undefined}
                  className={cn(
                    "w-full px-4 py-3 rounded-lg bg-surface border text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all resize-none",
                    errors.message ? "border-red-500" : "border-border"
                  )}
                  placeholder="Tell me about your project..."
                />
                {errors.message && (
                  <p id="message-error" className="mt-1.5 text-sm text-red-400" role="alert">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <Button type="submit" size="lg" className="w-full" disabled={status === "loading"}>
                {status === "loading" ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" aria-hidden="true" />
                    Send Message
                  </>
                )}
              </Button>

              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 p-4 rounded-lg bg-green-500/10 border border-green-500/30 text-green-400"
                  role="alert"
                >
                  <CheckCircle className="h-5 w-5" aria-hidden="true" />
                  <span className="text-sm font-medium">Message sent successfully!</span>
                </motion.div>
              )}

              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 p-4 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400"
                  role="alert"
                >
                  <AlertCircle className="h-5 w-5" aria-hidden="true" />
                  <span className="text-sm font-medium">{errorMessage}</span>
                </motion.div>
              )}
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
