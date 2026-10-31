"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Target,
  BookOpen,
  Shield,
  Minus,
  Lightbulb,
  CheckCircle,
  Laptop,
  Quote,
  Sparkles,
  Layers,
} from "lucide-react";
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
  const [imgError, setImgError] = useState(false);

  return (
    <section id="about" className="py-20 md:py-32 relative overflow-hidden">
      {/* Subtle ambient light aura */}
      <div
        className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-accent/5 blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            badge="✨ About Me"
            title="Behind the Code & Engineering Mindset"
            subtitle="Get to know the person, craft, and architectural principles driving my work."
          />
        </AnimatedSection>

        {/* Narrative & Visual Workspace Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center mb-16 lg:mb-20">
          {/* Left Column: Story & Philosophy */}
          <div className="lg:col-span-7 space-y-6">
            <AnimatedSection delay={0.1}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent/20 bg-accent/5 text-xs font-semibold text-accent mb-3">
                <Sparkles className="h-3.5 w-3.5" />
                <span>The Engineering Journey</span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-foreground tracking-tight leading-snug">
                Bridging software engineering, systems design, and entrepreneurship.
              </h3>
            </AnimatedSection>

            <AnimatedSection delay={0.2} className="space-y-4">
              <p className="text-foreground/90 text-base leading-relaxed">
                {personal.summary}
              </p>
              <p className="text-muted text-base leading-relaxed">
                {personal.story}
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="relative p-6 rounded-2xl border border-accent/20 bg-accent/[0.04] backdrop-blur-md shadow-sm">
                <Quote className="h-7 w-7 text-accent/60 mb-2" aria-hidden="true" />
                <p className="text-foreground font-medium italic text-base sm:text-lg leading-relaxed">
                  &ldquo;{personal.philosophy}&rdquo;
                </p>
                <span className="block mt-3 text-xs font-bold text-accent uppercase tracking-widest font-mono">
                  — Core Engineering Tenet
                </span>
              </div>
            </AnimatedSection>
          </div>

          {/* Right Column: Visual Photo Card with Ambient Glow */}
          <div className="lg:col-span-5 flex justify-center">
            <AnimatedSection delay={0.25} className="relative w-full max-w-md lg:max-w-none">
              {/* Soft ambient glow halo */}
              <div
                className="absolute -inset-4 rounded-3xl opacity-50 blur-2xl -z-10"
                style={{
                  background:
                    "radial-gradient(circle, var(--accent) 0%, var(--hero-glow) 50%, transparent 75%)",
                }}
                aria-hidden="true"
              />

              {/* Elevated Workspace Image Frame */}
              <div className="group relative rounded-3xl border border-border/80 bg-surface/90 p-3.5 shadow-2xl backdrop-blur-xl overflow-hidden transition-all duration-300 hover:border-accent/50 hover:shadow-accent/15">
                <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-surface-muted border border-border/50">
                  {!imgError && personal.aboutImage ? (
                    <Image
                      src={personal.aboutImage}
                      alt="Engr. Ojkeh engineering workspace"
                      fill
                      sizes="(max-width: 768px) 100vw, 500px"
                      className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                      onError={() => setImgError(true)}
                    />
                  ) : (
                    <div className="h-full w-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-accent/15 via-surface to-surface-muted">
                      <Laptop className="h-12 w-12 text-accent mb-2" aria-hidden="true" />
                      <span className="font-display font-bold text-foreground text-base">Engineering Lab</span>
                      <span className="text-xs text-muted mt-1 font-mono">Systems, Code & Architecture</span>
                    </div>
                  )}

                  {/* Glass overlay gradient */}
                  <div
                    className="absolute inset-0 pointer-events-none bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60"
                    aria-hidden="true"
                  />
                </div>

                {/* Floating Micro-Badges */}
                <div className="absolute top-6 left-6 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-background/90 border border-border/80 shadow-md backdrop-blur-md text-xs font-semibold text-foreground">
                  <Laptop className="h-3 w-3 text-accent" />
                  <span>Workspace & Lab</span>
                </div>

                <div className="absolute bottom-6 right-6 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-background/90 border border-border/80 shadow-md backdrop-blur-md text-xs font-semibold text-foreground">
                  <Layers className="h-3 w-3 text-accent" />
                  <span>Full Stack & Hardware</span>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>

        {/* Bottom Section: Core Values and Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 pt-10 border-t border-border/60">
          {/* Core Values (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <AnimatedSection delay={0.35}>
              <div className="flex items-center justify-between mb-5">
                <h3 className="font-display text-xl font-bold text-foreground tracking-tight">
                  Core Engineering Values
                </h3>
                <span className="text-xs font-mono font-medium text-muted">Principles that guide my work</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5">
                {values.map((value) => (
                  <div
                    key={value.label}
                    className="group flex flex-col items-center text-center p-4.5 rounded-2xl border border-border/80 bg-surface/70 backdrop-blur-md hover:border-accent/50 hover:bg-surface hover:-translate-y-1 hover:shadow-md transition-all duration-300"
                  >
                    <div className="p-2.5 rounded-xl bg-accent/10 border border-accent/20 mb-3 group-hover:scale-110 group-hover:bg-accent/20 transition-all duration-300">
                      <value.icon className="h-5 w-5 text-accent" aria-hidden="true" />
                    </div>
                    <span className="text-xs font-semibold text-foreground leading-tight">
                      {value.label}
                    </span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>

          {/* Highlights (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <AnimatedSection delay={0.45}>
              <div className="flex items-center justify-between mb-5">
                <h3 className="font-display text-xl font-bold text-foreground tracking-tight">
                  Professional Highlights
                </h3>
                <span className="text-xs font-mono font-medium text-muted">Core Focus Areas</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2.5">
                {personal.highlights.map((highlight) => (
                  <div
                    key={highlight}
                    className="flex items-center gap-3 p-3.5 rounded-2xl border border-border/80 bg-surface/70 backdrop-blur-md hover:border-accent/40 hover:bg-surface hover:translate-x-0.5 transition-all duration-200"
                  >
                    <div className="p-1 rounded-full bg-accent/15 text-accent flex-shrink-0">
                      <CheckCircle className="h-4 w-4" aria-hidden="true" />
                    </div>
                    <span className="text-sm font-medium text-foreground/90">{highlight}</span>
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
