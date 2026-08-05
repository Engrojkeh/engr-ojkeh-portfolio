"use client";

import {
  MessageSquare,
  Eye,
  Code2,
  Layers,
  BookOpen,
  Truck,
  Puzzle,
  Users,
} from "lucide-react";
import AnimatedSection from "@/components/shared/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";

const differentiators = [
  {
    icon: MessageSquare,
    title: "Clear Communication",
    description:
      "I keep stakeholders informed with regular updates and transparent progress tracking.",
  },
  {
    icon: Eye,
    title: "Attention to Detail",
    description:
      "From pixel-perfect designs to robust error handling, I care about every detail.",
  },
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Writing maintainable, well-documented code that scales with your business needs.",
  },
  {
    icon: Layers,
    title: "Scalable Solutions",
    description:
      "Architecting systems that grow with your user base without sacrificing performance.",
  },
  {
    icon: BookOpen,
    title: "Continuous Learning",
    description:
      "Staying current with modern technologies and best practices to deliver cutting-edge solutions.",
  },
  {
    icon: Truck,
    title: "Reliable Delivery",
    description:
      "Consistently meeting deadlines and delivering projects that exceed expectations.",
  },
  {
    icon: Puzzle,
    title: "Problem Solving",
    description:
      "Breaking down complex challenges into simple, elegant, and effective solutions.",
  },
  {
    icon: Users,
    title: "Professional Collaboration",
    description:
      "Working seamlessly with cross-functional teams to achieve shared goals.",
  },
];

export default function WhyWorkWithMe() {
  return (
    <section id="why-me" className="py-20 md:py-32 bg-surface/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            title="Why Work With Me"
            subtitle="What sets me apart and why clients choose to collaborate with me."
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {differentiators.map((item, index) => (
            <AnimatedSection
              key={item.title}
              delay={index * 0.05}
              className="p-6 rounded-xl border border-border bg-surface/40 hover:border-accent/50 transition-all duration-300"
            >
              <div className="p-2.5 rounded-lg bg-accent/10 w-fit mb-4">
                <item.icon className="h-5 w-5 text-accent" aria-hidden="true" />
              </div>
              <h3 className="font-display text-lg font-bold text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-muted text-sm leading-relaxed">{item.description}</p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
