"use client";

import { services } from "@/data/services";
import {
  Code2,
  Layout,
  Server,
  Briefcase,
  GitBranch,
  Lightbulb,
  Globe,
  Wrench,
} from "lucide-react";
import AnimatedSection from "@/components/shared/AnimatedSection";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";

const serviceIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  "Full Stack Web Development": Code2,
  "Frontend Development": Layout,
  "Backend Development": Server,
  "Business Web Applications": Briefcase,
  "API Development": GitBranch,
  "Technical Consulting": Lightbulb,
  "Website Development": Globe,
  "Code Maintenance": Wrench,
};

export default function Services() {
  const scrollToContact = () => {
    const el = document.getElementById("contact");
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="py-20 md:py-32 bg-surface/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            title="Services"
            subtitle="End-to-end solutions tailored to bring your digital vision to life."
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => {
            const Icon = serviceIcons[service.title] || Code2;
            return (
              <AnimatedSection key={service.id} delay={index * 0.05}>
                <div className="h-full flex flex-col p-6 md:p-8 rounded-xl border border-border bg-surface/40 hover:-translate-y-1 hover:border-accent/50 hover:shadow-xl hover:shadow-accent/5 transition-all duration-300">
                  <div className="p-3 rounded-lg bg-accent/10 w-fit mb-5">
                    <Icon className="h-6 w-6 text-accent" aria-hidden="true" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed mb-5 flex-grow">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.deliverables.slice(0, 4).map((deliverable) => (
                      <li
                        key={deliverable}
                        className="flex items-center gap-2 text-sm text-foreground/80"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0" aria-hidden="true" />
                        {deliverable}
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant="secondary"
                    className="mt-auto w-full"
                    onClick={scrollToContact}
                  >
                    {service.cta}
                  </Button>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
