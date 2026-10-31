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
  ArrowRight,
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
    <section id="services" className="py-20 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            title="Services & Solutions"
            subtitle="End-to-end technical capabilities tailored to build, scale, and maintain high-performing digital products."
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => {
            const Icon = serviceIcons[service.title] || Code2;
            return (
              <AnimatedSection key={service.id} delay={index * 0.05}>
                <div className="group h-full flex flex-col p-6 md:p-8 rounded-3xl border border-border/80 bg-surface/80 backdrop-blur-xl hover:-translate-y-1.5 hover:border-accent/50 hover:shadow-2xl hover:shadow-accent/10 transition-all duration-300">
                  <div className="p-3.5 rounded-2xl bg-accent/10 border border-accent/20 w-fit mb-5 group-hover:scale-110 group-hover:bg-accent/20 transition-all duration-300">
                    <Icon className="h-6 w-6 text-accent" aria-hidden="true" />
                  </div>

                  <h3 className="font-display text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-muted text-sm leading-relaxed mb-6 flex-grow">
                    {service.description}
                  </p>

                  <div className="space-y-2.5 mb-8 pt-4 border-t border-border/50">
                    {service.deliverables.slice(0, 4).map((deliverable) => (
                      <div
                        key={deliverable}
                        className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-foreground/80"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0" aria-hidden="true" />
                        <span>{deliverable}</span>
                      </div>
                    ))}
                  </div>

                  <Button
                    variant="secondary"
                    className="mt-auto w-full group/btn justify-between"
                    onClick={scrollToContact}
                  >
                    <span>{service.cta}</span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover/btn:translate-x-1" aria-hidden="true" />
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
