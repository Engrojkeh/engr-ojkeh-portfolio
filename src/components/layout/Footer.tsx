"use client";

import { useState } from "react";
import { ArrowUp } from "lucide-react";
import { socials } from "@/data/socials";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import SocialLink from "@/components/ui/SocialLink";
import { brandIcons } from "@/components/ui/BrandIcons";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter signup:", email);
    setEmail("");
  };

  return (
    <footer className="border-t border-border bg-surface-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          <div className="md:col-span-2">
            <h3 className="font-display text-2xl font-bold text-foreground mb-4">Engr. Ojkeh</h3>
            <p className="text-muted text-sm leading-relaxed max-w-md mb-6">
              Building reliable, scalable, and user-centered digital products. Let&apos;s collaborate
              and turn your ideas into reality.
            </p>
            <div className="flex items-center gap-3">
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

          <div>
            <h4 className="font-display font-bold text-foreground mb-4">Quick Links</h4>
            <nav className="flex flex-col gap-2.5" aria-label="Footer quick links">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.name}
                  onClick={() => {
                    const el = document.getElementById(link.href.replace("#", ""));
                    el?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-sm text-muted hover:text-accent transition-colors text-left"
                >
                  {link.name}
                </button>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="font-display font-bold text-foreground mb-4">Stay Updated</h4>
            <p className="text-sm text-muted mb-4">
              Get notified about new projects and insights.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col gap-2">
              <label htmlFor="footer-email" className="sr-only">Email address</label>
              <input
                id="footer-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                required
                className="px-4 py-2.5 rounded-lg bg-background border border-border text-foreground text-sm placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
              />
              <button
                type="submit"
                className="px-4 py-2.5 rounded-lg bg-accent text-white text-sm font-medium hover:bg-accent/90 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted">
            &copy; {new Date().getFullYear()} Engr. Ojkeh. All rights reserved.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className={cn(
              "inline-flex items-center gap-2 text-sm text-muted hover:text-accent transition-colors",
              "p-2 rounded-full border border-border hover:border-accent"
            )}
            aria-label="Back to top"
          >
            <ArrowUp className="h-4 w-4" aria-hidden="true" />
            Back to top
          </button>
        </div>
      </div>
    </footer>
  );
}
