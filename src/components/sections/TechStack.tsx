"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { techStack } from "@/data/techStack";
import TechBadge from "@/components/ui/TechBadge";
import AnimatedSection from "@/components/shared/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";

export default function TechStack() {
  const [activeTab, setActiveTab] = useState(techStack[0]?.name || "");

  const activeCategory = techStack.find((cat) => cat.name === activeTab) || techStack[0];

  return (
    <section id="techstack" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            title="Tech Stack"
            subtitle="The tools and technologies I use to build high-quality software."
          />
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="flex flex-wrap gap-2 mb-8" role="tablist" aria-label="Tech stack categories">
            {techStack.map((category) => (
              <button
                key={category.name}
                role="tab"
                aria-selected={activeTab === category.name}
                onClick={() => setActiveTab(category.name)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200",
                  activeTab === category.name
                    ? "bg-accent text-white shadow-lg shadow-accent/20"
                    : "border border-border text-muted hover:text-foreground hover:border-accent/50"
                )}
              >
                {category.name}
              </button>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div key={activeCategory.name} className="p-6 md:p-8 rounded-xl border border-border bg-surface/40 min-h-[200px]">
            <div className="flex flex-wrap gap-3">
              {activeCategory.items.map((item) => (
                <TechBadge key={item} name={item} />
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
