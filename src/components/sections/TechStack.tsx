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
    <section id="techstack" className="py-20 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            badge="⚡ Technical Arsenal"
            title="Tools, Frameworks & Infrastructure"
            subtitle="The modern languages, distributed frameworks, and cloud tooling powering my production applications."
          />
        </AnimatedSection>

        {/* Categories Tab Selector */}
        <AnimatedSection delay={0.1} className="mb-8">
          <div
            className="inline-flex flex-wrap p-1.5 rounded-2xl bg-surface/80 border border-border/80 backdrop-blur-md shadow-xs gap-1.5"
            role="tablist"
            aria-label="Tech stack categories"
          >
            {techStack.map((category) => {
              const isActive = activeTab === category.name;
              return (
                <button
                  key={category.name}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveTab(category.name)}
                  className={cn(
                    "px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer",
                    isActive
                      ? "bg-accent text-white shadow-md shadow-accent/25"
                      : "text-muted hover:text-foreground hover:bg-surface-muted"
                  )}
                >
                  {category.name}
                </button>
              );
            })}
          </div>
        </AnimatedSection>

        {/* Tech Badges Container */}
        <AnimatedSection delay={0.2}>
          <div
            key={activeCategory.name}
            className="p-8 md:p-10 rounded-3xl border border-border/80 bg-surface/80 backdrop-blur-xl shadow-lg min-h-[180px] flex items-center"
          >
            <div className="flex flex-wrap gap-2.5">
              {activeCategory.items.map((item) => (
                <TechBadge
                  key={item}
                  name={item}
                  className="px-3.5 py-1.5 text-xs sm:text-sm rounded-xl font-medium"
                />
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
