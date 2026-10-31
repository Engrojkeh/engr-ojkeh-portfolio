"use client";

import { experience } from "@/data/experience";
import TechBadge from "@/components/ui/TechBadge";
import AnimatedSection from "@/components/shared/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import { Briefcase } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            badge="🚀 Career Journey"
            title="Experience & Track Record"
            subtitle="My professional engineering path, roles held, and the scalable impact delivered across teams."
          />
        </AnimatedSection>

        <div className="relative">
          {/* Vertical Timeline Gradient Track */}
          <div
            className="hidden md:block absolute left-8 top-4 bottom-8 w-[2px] bg-gradient-to-b from-accent via-border to-border/30"
            aria-hidden="true"
          />

          <div className="space-y-10 md:space-y-12">
            {experience.map((item, index) => (
              <AnimatedSection key={item.id} delay={index * 0.1} className="relative">
                <div className="md:grid md:grid-cols-[auto_1fr] md:gap-8 items-start">
                  {/* Timeline Glowing Node */}
                  <div className="hidden md:flex relative pt-2">
                    <span className="absolute left-8 -translate-x-1/2 h-5 w-5 rounded-full border-2 border-accent bg-surface flex items-center justify-center shadow-md shadow-accent/25">
                      <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
                    </span>
                  </div>

                  {/* Experience Card */}
                  <div className="p-6 md:p-8 rounded-3xl border border-border/80 bg-surface/80 backdrop-blur-xl shadow-md hover:border-accent/50 hover:shadow-xl hover:shadow-accent/5 transition-all duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-xl bg-accent/10 border border-accent/20">
                          <Briefcase className="h-4 w-4 text-accent" aria-hidden="true" />
                        </div>
                        <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground">
                          {item.company}
                        </h3>
                      </div>
                      <span className="inline-flex items-center self-start sm:self-auto px-3 py-1 rounded-full text-xs font-mono font-medium text-accent border border-accent/20 bg-accent/5">
                        {item.duration}
                      </span>
                    </div>

                    <p className="text-accent font-semibold text-sm sm:text-base mb-3">
                      {item.role}
                    </p>

                    <p className="text-foreground/80 text-sm sm:text-base leading-relaxed mb-6">
                      {item.description}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-4 border-t border-border/60">
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
