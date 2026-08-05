"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ui/ProjectCard";
import AnimatedSection from "@/components/shared/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";

type Filter = "All" | "Frontend" | "Backend" | "Full Stack";

const filters: Filter[] = ["All", "Frontend", "Backend", "Full Stack"];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<Filter>("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects.filter((p) => p.featured)
      : projects.filter((p) => p.featured && p.category.includes(activeFilter));

  return (
    <section id="projects" className="py-20 md:py-32 bg-surface/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            title="Featured Projects"
            subtitle="A selection of work that showcases my technical skills and problem-solving approach."
          />
        </AnimatedSection>

        <AnimatedSection delay={0.1} className="mb-10">
          <div className="flex flex-wrap items-center gap-2" role="tablist" aria-label="Project filters">
            {filters.map((filter) => (
              <button
                key={filter}
                role="tab"
                aria-selected={activeFilter === filter}
                onClick={() => setActiveFilter(filter)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200",
                  activeFilter === filter
                    ? "bg-accent text-white shadow-lg shadow-accent/20"
                    : "border border-border text-muted hover:text-foreground hover:border-accent/50"
                )}
              >
                {filter}
              </button>
            ))}
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredProjects.map((project, index) => (
            <AnimatedSection key={project.id} delay={index * 0.05}>
              <ProjectCard project={project} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
