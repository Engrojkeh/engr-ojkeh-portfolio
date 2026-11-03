"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Code2,
  Cpu,
  Layers,
  ShieldCheck,
  GraduationCap,
  Sparkles,
  Laptop,
  Quote,
  CheckCircle,
} from "lucide-react";
import { personal } from "@/data/personal";
import AnimatedSection from "@/components/shared/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";

const valueIcons = [
  Code2,
  Cpu,
  Layers,
  ShieldCheck,
  Sparkles,
  GraduationCap,
];

export default function About() {
  const [imgError, setImgError] = useState(false);

  return (
    <section id="about" className="py-16 sm:py-20 md:py-32 relative overflow-hidden">
      {/* Subtle ambient light aura */}
      <div
        className="absolute top-1/4 right-0 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-accent/5 blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            title="About Me"
            subtitle="Software engineer, systems specialist, and technology founder building modern digital products and resilient technical infrastructure."
          />
        </AnimatedSection>

        {/* Narrative & Visual Workspace Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-14 items-center mb-12 sm:mb-16 lg:mb-20">
          {/* Left Column: Story & Philosophy */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6">
            <AnimatedSection delay={0.1}>
              <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-foreground tracking-tight leading-snug">
                Bridging software engineering, hardware diagnostics, and real-world digital solutions.
              </h3>
            </AnimatedSection>

            <AnimatedSection delay={0.2} className="space-y-4 text-sm sm:text-base leading-relaxed">
              <p className="text-foreground/90 font-medium">
                {personal.summary}
              </p>
              <p className="text-muted">
                {personal.story}
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="relative p-5 sm:p-6 rounded-2xl border border-accent/20 bg-accent/[0.04] backdrop-blur-md shadow-xs">
                <Quote className="h-6 w-6 sm:h-7 sm:w-7 text-accent/60 mb-2" aria-hidden="true" />
                <p className="text-foreground font-medium italic text-sm sm:text-base md:text-lg leading-relaxed">
                  &ldquo;{personal.philosophy}&rdquo;
                </p>
                <span className="block mt-3 text-[11px] sm:text-xs font-bold text-accent uppercase tracking-widest font-mono">
                  — Jeremiah Kehinde Orekoya (Engr. Ojkeh)
                </span>
              </div>
            </AnimatedSection>
          </div>

          {/* Right Column: Visual Photo Card with Ambient Glow */}
          <div className="lg:col-span-5 flex justify-center w-full">
            <AnimatedSection delay={0.25} className="relative w-full max-w-sm sm:max-w-md lg:max-w-none">
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
              <div className="group relative rounded-3xl border border-border/80 bg-surface/90 p-3 sm:p-4 shadow-2xl backdrop-blur-xl overflow-hidden transition-all duration-300 hover:border-accent/50 hover:shadow-accent/15">
                <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-surface-muted border border-border/50">
                  {!imgError && personal.aboutImage ? (
                    <Image
                      src={personal.aboutImage}
                      alt="Jeremiah Kehinde Orekoya engineering workspace"
                      fill
                      sizes="(max-width: 768px) 100vw, 500px"
                      className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                      onError={() => setImgError(true)}
                    />
                  ) : (
                    <div className="h-full w-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-accent/15 via-surface to-surface-muted">
                      <Laptop className="h-10 w-10 sm:h-12 sm:w-12 text-accent mb-2" aria-hidden="true" />
                      <span className="font-display font-bold text-foreground text-sm sm:text-base">Engineering Lab</span>
                      <span className="text-xs text-muted mt-1 font-mono">Full Stack &amp; Hardware Systems</span>
                    </div>
                  )}

                  {/* Glass overlay gradient */}
                  <div
                    className="absolute inset-0 pointer-events-none bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60"
                    aria-hidden="true"
                  />
                </div>

                {/* Floating Micro-Badges - Hidden or scaled on very small devices */}
                <div className="hidden sm:inline-flex absolute top-6 left-6 items-center gap-1.5 px-3 py-1 rounded-full bg-background/90 border border-border/80 shadow-md backdrop-blur-md text-xs font-semibold text-foreground">
                  <Laptop className="h-3 w-3 text-accent" />
                  <span>Ojkeh Technology Lab</span>
                </div>

                <div className="hidden sm:inline-flex absolute bottom-6 right-6 items-center gap-1.5 px-3 py-1 rounded-full bg-background/90 border border-border/80 shadow-md backdrop-blur-md text-xs font-semibold text-foreground">
                  <Layers className="h-3 w-3 text-accent" />
                  <span>Software &amp; Systems</span>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>

        {/* Bottom Section: Core Values and Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 pt-8 sm:pt-10 border-t border-border/60">
          {/* Core Values (7 cols) */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6">
            <AnimatedSection delay={0.35}>
              <h3 className="font-display text-lg sm:text-xl font-bold text-foreground tracking-tight mb-4 sm:mb-5">
                Core Engineering Values
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-3.5">
                {personal.values.map((valLabel, idx) => {
                  const Icon = valueIcons[idx] || Sparkles;
                  return (
                    <div
                      key={valLabel}
                      className="group flex flex-col items-center text-center p-3.5 sm:p-4 rounded-2xl border border-border/80 bg-surface/70 backdrop-blur-md hover:border-accent/50 hover:bg-surface hover:-translate-y-1 hover:shadow-md transition-all duration-300"
                    >
                      <div className="p-2 sm:p-2.5 rounded-xl bg-accent/10 border border-accent/20 mb-2 sm:mb-3 group-hover:scale-110 group-hover:bg-accent/20 transition-all duration-300">
                        <Icon className="h-4 w-4 sm:h-5 sm:w-5 text-accent" aria-hidden="true" />
                      </div>
                      <span className="text-xs sm:text-xs font-semibold text-foreground leading-snug">
                        {valLabel}
                      </span>
                    </div>
                  );
                })}
              </div>
            </AnimatedSection>
          </div>

          {/* Highlights (5 cols) */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-6">
            <AnimatedSection delay={0.45}>
              <h3 className="font-display text-lg sm:text-xl font-bold text-foreground tracking-tight mb-4 sm:mb-5">
                Professional Highlights
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2 sm:gap-2.5">
                {personal.highlights.map((highlight) => (
                  <div
                    key={highlight}
                    className="flex items-start sm:items-center gap-3 p-3 sm:p-3.5 rounded-2xl border border-border/80 bg-surface/70 backdrop-blur-md hover:border-accent/40 hover:bg-surface hover:translate-x-0.5 transition-all duration-200"
                  >
                    <div className="p-1 rounded-full bg-accent/15 text-accent flex-shrink-0 mt-0.5 sm:mt-0">
                      <CheckCircle className="h-4 w-4" aria-hidden="true" />
                    </div>
                    <span className="text-xs sm:text-sm font-medium text-foreground/90 leading-snug">{highlight}</span>
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
