"use client";

import { useState } from "react";
import Image from "next/image";
import { personal } from "@/data/personal";
import { socials } from "@/data/socials";
import { ChevronDown, Download, ArrowRight, Sparkles, MapPin, Code2, Award, Zap, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/shared/AnimatedSection";
import AvailabilityIndicator from "@/components/shared/AvailabilityIndicator";
import Button from "@/components/ui/Button";
import SocialLink from "@/components/ui/SocialLink";
import { brandIcons } from "@/components/ui/BrandIcons";

const stats = [
  { value: "4+", label: "Years Experience", subtext: "Software & Systems", icon: Award },
  { value: "15+", label: "Projects Delivered", subtext: "Full Stack & Cloud", icon: Zap },
  { value: "99.9%", label: "Uptime & Quality", subtext: "Clean Test-Driven Code", icon: ShieldCheck },
  { value: "10+", label: "Tech Stacks Mastered", subtext: "Next.js, Node, PostgreSQL", icon: Code2 },
];

export default function Hero() {
  const [imgError, setImgError] = useState(false);

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        {/* Gradient mesh — layered radial gradients for depth */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 80% 50% at 20% 30%, var(--hero-glow) 0%, transparent 60%),
              radial-gradient(ellipse 60% 40% at 80% 25%, var(--hero-glow) 0%, transparent 55%),
              radial-gradient(ellipse 50% 60% at 50% 85%, var(--hero-glow) 0%, transparent 50%),
              radial-gradient(ellipse 40% 30% at 90% 70%, var(--hero-glow) 0%, transparent 45%)
            `,
          }}
        />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.14]"
          style={{
            backgroundImage: `
              linear-gradient(var(--hero-grid-line) 1px, transparent 1px),
              linear-gradient(90deg, var(--hero-grid-line) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
        {/* Soft radial spotlight */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle 600px at 50% 40%, var(--hero-glow) 0%, transparent 70%)",
            opacity: 0.7,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text & Actions */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left gap-6">
            <AnimatedSection delay={0}>
              <AvailabilityIndicator />
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground tracking-tight leading-[1.08]">
                Building Scalable Systems &amp;{" "}
                <span className="gradient-text">Modern Web Products</span>.
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <p className="text-foreground/90 font-medium text-lg sm:text-xl max-w-2xl leading-relaxed">
                Hi, I&apos;m <span className="text-accent font-semibold">{personal.name}</span> — {personal.title}.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.25}>
              <p className="text-muted text-sm sm:text-base max-w-xl leading-relaxed">
                {personal.summary}
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.35}>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mt-2">
                <Button size="lg" onClick={scrollToProjects} className="group">
                  Explore My Projects
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button variant="secondary" size="lg" onClick={scrollToContact}>
                  Hire Me
                </Button>
                <a
                  href="/engr-ojkeh-cv.pdf"
                  download="Engr-Ojkeh-Resume.pdf"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-border bg-surface text-foreground hover:bg-surface-muted hover:border-accent/40 font-medium text-sm transition-all duration-200 shadow-sm"
                  aria-label="Download ATS Resume"
                >
                  <Download className="h-4 w-4 text-accent" />
                  Resume
                </a>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.45}>
              <div className="flex items-center gap-3 mt-1">
                <span className="text-xs font-semibold uppercase tracking-wider text-muted mr-1">Connect:</span>
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
          </div>

          {/* Right Column: Styled Portrait Photo Card & 3D Floating Status Badges */}
          <div className="lg:col-span-5 flex justify-center">
            <AnimatedSection delay={0.25} className="relative w-full max-w-sm sm:max-w-md lg:max-w-none flex justify-center">
              {/* Outer Glow Halo */}
              <div
                className="absolute -inset-6 rounded-[3rem] opacity-65 blur-3xl -z-10 animate-pulse duration-1000"
                style={{
                  background:
                    "radial-gradient(circle, var(--accent) 0%, var(--hero-glow) 50%, transparent 75%)",
                }}
                aria-hidden="true"
              />

              {/* Interactive Card Container with subtle float motion */}
              <motion.div
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative max-w-[340px] sm:max-w-[380px] w-full"
              >
                {/* Main Card Frame */}
                <div className="relative rounded-3xl border border-white/20 dark:border-white/10 bg-surface/80 p-3.5 shadow-2xl backdrop-blur-xl ring-1 ring-black/5 dark:ring-white/10 overflow-hidden">
                  {/* Photo Viewport */}
                  <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden bg-surface-muted border border-border/60">
                    {!imgError && personal.avatar ? (
                      <Image
                        src={personal.avatar}
                        alt={`${personal.name} portrait`}
                        fill
                        priority
                        sizes="(max-width: 768px) 100vw, 380px"
                        className="object-cover object-center transition-transform duration-700 hover:scale-105"
                        onError={() => setImgError(true)}
                      />
                    ) : (
                      <div className="h-full w-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-accent/20 via-surface to-surface-muted">
                        <div className="h-20 w-20 rounded-2xl bg-accent/20 border border-accent/40 flex items-center justify-center text-accent text-3xl font-bold font-display mb-3 shadow-lg">
                          EO
                        </div>
                        <span className="font-display font-bold text-foreground text-lg">{personal.name}</span>
                        <span className="text-xs text-muted mt-1">{personal.title}</span>
                      </div>
                    )}

                    {/* Subtle bottom vignette */}
                    <div
                      className="absolute inset-0 pointer-events-none bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60"
                      aria-hidden="true"
                    />
                  </div>
                </div>

                {/* Floating Micro-Badge: Top Right */}
                <motion.div
                  initial={{ opacity: 0, y: -12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="absolute -top-3 -right-3 sm:-right-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface/90 border border-border/80 shadow-xl backdrop-blur-xl text-xs font-semibold text-foreground hover:scale-105 transition-transform"
                >
                  <Sparkles className="h-3.5 w-3.5 text-accent" />
                  <span>Full Stack &amp; Systems</span>
                </motion.div>

                {/* Floating Micro-Badge: Bottom Left */}
                <motion.div
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  className="absolute -bottom-3 -left-3 sm:-left-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface/90 border border-border/80 shadow-xl backdrop-blur-xl text-xs font-semibold text-foreground hover:scale-105 transition-transform"
                >
                  <Code2 className="h-3.5 w-3.5 text-accent" />
                  <span>Next.js • Node • Cloud</span>
                </motion.div>

                {/* Floating Micro-Badge: Bottom Right */}
                <motion.div
                  initial={{ opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7, duration: 0.6 }}
                  className="absolute bottom-8 -right-3 sm:-right-5 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface/90 border border-border/80 shadow-xl backdrop-blur-xl text-xs font-medium text-foreground hover:scale-105 transition-transform"
                >
                  <MapPin className="h-3.5 w-3.5 text-accent" />
                  <span>{personal.location}</span>
                </motion.div>
              </motion.div>
            </AnimatedSection>
          </div>
        </div>

        {/* Engineering Impact Counter Strip */}
        <AnimatedSection delay={0.5} className="mt-16 sm:mt-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 p-6 sm:p-8 rounded-3xl border border-border/80 bg-surface/60 backdrop-blur-xl shadow-2xl shadow-accent/5">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className={`flex items-start gap-4 ${
                    idx !== stats.length - 1 ? "lg:border-r lg:border-border/60 lg:pr-6" : ""
                  }`}
                >
                  <div className="h-10 w-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent flex-shrink-0 mt-0.5">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-display text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                      {stat.value}
                    </div>
                    <div className="text-xs sm:text-sm font-semibold text-foreground/90 mt-0.5">
                      {stat.label}
                    </div>
                    <div className="text-[11px] text-muted">
                      {stat.subtext}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </AnimatedSection>
      </div>

      <div
        className="hidden md:block absolute bottom-3 left-1/2 -translate-x-1/2 text-muted"
        aria-hidden="true"
      >
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        >
          <ChevronDown className="h-5 w-5" />
        </motion.div>
      </div>
    </section>
  );
}
