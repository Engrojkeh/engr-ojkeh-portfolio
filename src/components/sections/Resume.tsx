"use client";

import { FileText, Download } from "lucide-react";
import AnimatedSection from "@/components/shared/AnimatedSection";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Resume() {
  return (
    <section id="resume" className="py-20 md:py-32 bg-surface-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            title="Resume"
            subtitle="A detailed overview of my professional experience and qualifications."
          />
        </AnimatedSection>

        <AnimatedSection delay={0.1} className="max-w-2xl">
          <div className="p-8 md:p-10 rounded-xl border border-border bg-surface text-center">
            <div className="inline-flex items-center justify-center p-4 rounded-full bg-accent/10 mb-6">
              <FileText className="h-10 w-10 text-accent" aria-hidden="true" />
            </div>
            <h3 className="font-display text-2xl font-bold text-foreground mb-3">
              Download My Resume
            </h3>
            <p className="text-muted text-sm leading-relaxed mb-8 max-w-md mx-auto">
              Get a comprehensive view of my professional background, technical skills,
              project highlights, and career achievements.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="/resume.pdf" download>
                <Button size="lg" className="w-full sm:w-auto">
                  <Download className="h-4 w-4" aria-hidden="true" />
                  Download Resume
                </Button>
              </a>
            </div>
            <p className="text-xs text-muted mt-6">
              Last Updated: {new Date().getFullYear()}
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
