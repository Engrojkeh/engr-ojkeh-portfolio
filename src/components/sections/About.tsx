"use client";

import { Target, BookOpen, Shield, Minus, Lightbulb, CheckCircle } from "lucide-react";
import { personal } from "@/data/personal";
import AnimatedSection from "@/components/shared/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";

const values = [
  { icon: Target, label: "Engineering Excellence" },
  { icon: BookOpen, label: "Continuous Learning" },
  { icon: Shield, label: "Integrity" },
  { icon: Minus, label: "Simplicity" },
  { icon: Lightbulb, label: "Innovation" },
  { icon: CheckCircle, label: "Reliability" },
];

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            title="About Me"
            subtitle="Get to know the person behind the code."
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <AnimatedSection className="space-y-6" delay={0.1}>
            <p className="text-foreground/90 leading-relaxed">{personal.summary}</p>
            <p className="text-foreground/80 leading-relaxed">{personal.story}</p>
            <div className="border-l-2 border-accent pl-6 py-2 bg-accent/5 rounded-r-lg">
              <p className="text-foreground italic text-sm leading-relaxed">
                &ldquo;{personal.philosophy}&rdquo;
              </p>
            </div>
          </AnimatedSection>

          <div className="space-y-10">
            <AnimatedSection delay={0.2}>
              <h3 className="font-display text-xl font-bold text-foreground mb-6">Core Values</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {values.map((value) => (
                  <div
                    key={value.label}
                    className="flex flex-col items-center text-center p-4 rounded-xl border border-border bg-surface hover:border-accent/50 transition-colors"
                  >
                    <value.icon className="h-8 w-8 text-accent mb-3" aria-hidden="true" />
                    <span className="text-xs font-medium text-foreground leading-tight">
                      {value.label}
                    </span>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <h3 className="font-display text-xl font-bold text-foreground mb-6">Highlights</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {personal.highlights.map((highlight) => (
                  <div
                    key={highlight}
                    className="flex items-center gap-3 p-3 rounded-lg border border-border bg-surface"
                  >
                    <span className="h-2 w-2 rounded-full bg-accent flex-shrink-0" aria-hidden="true" />
                    <span className="text-sm text-foreground/90">{highlight}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
