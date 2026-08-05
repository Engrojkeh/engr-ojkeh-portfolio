"use client";

import { personal } from "@/data/personal";
import { socials } from "@/data/socials";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/shared/AnimatedSection";
import AvailabilityIndicator from "@/components/shared/AvailabilityIndicator";
import Button from "@/components/ui/Button";
import SocialLink from "@/components/ui/SocialLink";
import { brandIcons } from "@/components/ui/BrandIcons";

export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        {/* Gradient mesh — layered radial gradients for depth */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 80% 50% at 20% 40%, var(--hero-glow) 0%, transparent 60%),
              radial-gradient(ellipse 60% 40% at 75% 25%, var(--hero-glow) 0%, transparent 55%),
              radial-gradient(ellipse 50% 60% at 50% 85%, var(--hero-glow) 0%, transparent 50%),
              radial-gradient(ellipse 40% 30% at 90% 70%, var(--hero-glow) 0%, transparent 45%)
            `,
          }}
        />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage: `
              linear-gradient(var(--hero-grid-line) 1px, transparent 1px),
              linear-gradient(90deg, var(--hero-grid-line) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
        {/* Soft radial spotlight behind the headline */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle 400px at 50% 45%, var(--hero-glow) 0%, transparent 70%)",
            opacity: 0.6,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 text-center">
        <div className="flex flex-col items-center gap-6">
          <AnimatedSection delay={0}>
            <AvailabilityIndicator />
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-foreground tracking-tight leading-[1.1]">
              Hi, I&apos;m <span className="gradient-text">{personal.name}</span>.
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <p className="text-muted text-base md:text-lg max-w-2xl leading-relaxed">
              {personal.title}
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <p className="text-muted/80 text-sm md:text-base max-w-xl leading-relaxed">
              {personal.summary}
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
              <Button size="lg" onClick={scrollToProjects}>
                View My Projects
              </Button>
              <Button variant="secondary" size="lg" onClick={scrollToContact}>
                Hire Me
              </Button>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.5}>
            <div className="flex items-center gap-4 mt-4">
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
      </div>

      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted"
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
          <ChevronDown className="h-6 w-6" />
        </motion.div>
      </div>
    </section>
  );
}
