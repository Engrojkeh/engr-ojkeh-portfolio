"use client";

import { coreTechnologies } from "@/data/techStack";
import AnimatedSection from "@/components/shared/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";

export default function TechStack() {
  return (
    <section id="techstack" className="py-20 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            title="Tech Stack"
            subtitle="The core languages, frameworks, and cloud infrastructure I use to engineer scalable, high-performance web products."
          />
        </AnimatedSection>

        {/* Unified, high-signal tech stack grid (no bulky tabs) */}
        <AnimatedSection delay={0.1}>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3.5">
            {coreTechnologies.map((tech) => (
              <div
                key={tech.name}
                className="group flex flex-col justify-between p-4 rounded-2xl border border-border/80 bg-surface/70 backdrop-blur-md hover:border-accent/50 hover:bg-surface hover:-translate-y-1 hover:shadow-lg hover:shadow-accent/5 transition-all duration-200"
              >
                <span className="text-[10px] font-mono font-medium text-muted uppercase tracking-wider mb-2">
                  {tech.category}
                </span>
                <span className="font-display text-sm sm:text-base font-bold text-foreground group-hover:text-accent transition-colors">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
