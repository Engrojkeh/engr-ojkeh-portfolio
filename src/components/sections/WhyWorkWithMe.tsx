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
      "I keep stakeholders informed with regular updates, clear documentation, and transparent progress tracking.",
  },
  {
    icon: Eye,
    title: "Attention to Detail",
    description:
      "From pixel-perfect UI precision to robust error boundaries and typing, every detail is engineered intentionally.",
  },
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Writing maintainable, modular, and self-documenting code that scales smoothly as business needs expand.",
  },
  {
    icon: Layers,
    title: "Scalable Solutions",
    description:
      "Architecting systems that reliably handle growing user demand and load without sacrificing latency.",
  },
  {
    icon: BookOpen,
    title: "Continuous Learning",
    description:
      "Continuously integrating modern best practices, frameworks, and tooling to deliver state-of-the-art solutions.",
  },
  {
    icon: Truck,
    title: "Reliable Delivery",
    description:
      "Consistently hitting milestones, honoring commitments, and delivering production-grade software on schedule.",
  },
  {
    icon: Puzzle,
    title: "Pragmatic Problem Solving",
    description:
      "Deconstructing complex engineering challenges into simple, robust, and cost-effective implementations.",
  },
  {
    icon: Users,
    title: "Cross-Functional Collaboration",
    description:
      "Partnering seamlessly with designers, founders, and product managers to align tech with business vision.",
  },
];

export default function WhyWorkWithMe() {
  return (
    <section id="why-me" className="py-20 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            title="Why Work With Me"
            subtitle="The professional principles, work ethic, and technical rigor I bring to every engagement."
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {differentiators.map((item, index) => (
            <AnimatedSection
              key={item.title}
              delay={index * 0.05}
              className="group p-6 rounded-3xl border border-border/80 bg-surface/80 backdrop-blur-xl hover:border-accent/50 hover:shadow-xl hover:shadow-accent/5 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="p-3 rounded-2xl bg-accent/10 border border-accent/20 w-fit mb-4 group-hover:scale-110 group-hover:bg-accent/20 transition-all duration-300">
                <item.icon className="h-5 w-5 text-accent" aria-hidden="true" />
              </div>
              <h3 className="font-display text-lg font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
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
