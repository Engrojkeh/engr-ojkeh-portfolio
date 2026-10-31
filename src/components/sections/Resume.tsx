"use client";

import { FileText, Download, ExternalLink, CheckCircle } from "lucide-react";
import AnimatedSection from "@/components/shared/AnimatedSection";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";

const resumeHighlights = [
  "4+ Years Full Stack & Systems Engineering",
  "Proven track record in high-uptime web apps",
  "Proficient in Next.js, Node.js, TypeScript & Cloud",
  "Comprehensive technical leadership & delivery",
];

export default function Resume() {
  return (
    <section id="resume" className="py-20 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            badge="📄 Verified Credentials"
            title="Curriculum Vitae & Experience"
            subtitle="A detailed breakdown of my professional background, technical stack, and track record."
          />
        </AnimatedSection>

        <AnimatedSection delay={0.1} className="max-w-3xl">
          <div className="relative p-8 md:p-12 rounded-3xl border border-border/80 bg-surface/80 backdrop-blur-xl shadow-xl overflow-hidden">
            {/* Ambient background glow */}
            <div
              className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-accent/10 blur-3xl pointer-events-none"
              aria-hidden="true"
            />

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-8">
              <div className="inline-flex items-center justify-center p-4.5 rounded-2xl bg-accent/10 border border-accent/20 text-accent shadow-inner">
                <FileText className="h-10 w-10 text-accent" aria-hidden="true" />
              </div>
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-semibold mb-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Latest Edition • 2025/2026</span>
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-foreground">
                  Engr. Ojkeh — Senior Software Engineer
                </h3>
              </div>
            </div>

            <p className="text-muted text-sm sm:text-base leading-relaxed mb-6">
              Review my complete career history, technical proficiencies, architectural methodologies,
              and project deliverables in detail.
            </p>

            {/* Resume Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 pt-4 border-t border-border/60">
              {resumeHighlights.map((item) => (
                <div key={item} className="flex items-center gap-2.5 text-xs sm:text-sm text-foreground/85">
                  <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" aria-hidden="true" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a href="/engr-ojkeh-cv.pdf" download="Engr-Ojkeh-Resume.pdf" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto shadow-lg shadow-accent/25 hover:shadow-accent/40">
                  <Download className="h-4 w-4" aria-hidden="true" />
                  <span>Download Resume (PDF)</span>
                </Button>
              </a>
              <a
                href="/engr-ojkeh-cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl border border-border bg-surface text-sm font-semibold text-foreground hover:bg-surface-muted hover:text-accent hover:border-accent/40 transition-all duration-200"
              >
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
                <span>View in Browser</span>
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
