"use client";

import { experience } from "@/data/experience";
import TechBadge from "@/components/ui/TechBadge";
import AnimatedSection from "@/components/shared/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            title="Experience"
            subtitle="My professional journey and the impact I have made along the way."
          />
        </AnimatedSection>

        <div className="relative">
          <div className="hidden md:block absolute left-8 top-0 bottom-0 w-px bg-border" aria-hidden="true" />

          <div className="space-y-12 md:space-y-16">
            {experience.map((item, index) => (
              <AnimatedSection key={item.id} delay={index * 0.1} className="relative">
                <div className="md:grid md:grid-cols-[auto_1fr] md:gap-8">
                  <div className="hidden md:flex relative">
                    <span className="absolute left-8 -translate-x-1/2 h-4 w-4 rounded-full border-2 border-accent bg-background" aria-hidden="true" />
                  </div>
                  <div className="p-6 md:p-8 rounded-xl border border-border bg-surface/40 hover:border-accent/30 transition-colors">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-3">
                      <h3 className="font-display text-xl font-bold text-foreground">
                        {item.company}
                      </h3>
                      <span className="text-sm text-muted font-mono">{item.duration}</span>
                    </div>
                    <p className="text-accent font-medium mb-3">{item.role}</p>
                    <p className="text-foreground/80 text-sm leading-relaxed mb-4">
                      {item.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {item.technologies.map((tech) => (
                        <TechBadge key={tech} name={tech} />
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
