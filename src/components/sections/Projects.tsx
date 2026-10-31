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
      : projects.filter((p) => {
          if (!p.featured) return false;
          const query = activeFilter.toLowerCase();
          const matchesCategoryOrRole =
            p.category.toLowerCase().includes(query) ||
            p.role.toLowerCase().includes(query);
          if (matchesCategoryOrRole) return true;

          if (activeFilter === "Backend") {
            return p.technologies.some((t) =>
              ["Node.js", "Express", "PostgreSQL", "MongoDB", "Prisma", "Redis"].includes(t)
            );
          }
          if (activeFilter === "Frontend") {
            return p.technologies.some((t) =>
              ["React", "Next.js", "Tailwind CSS", "Recharts"].includes(t)
            );
          }
          return false;
        });

  return (
    <section id="projects" className="py-20 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            badge="💼 Selected Work"
            title="Featured Projects & Systems"
            subtitle="Architected and deployed applications built for performance, reliability, and modern user experiences."
          />
        </AnimatedSection>

        {/* Filter Navigation Tabs */}
        <AnimatedSection delay={0.1} className="mb-10">
          <div
            className="inline-flex p-1.5 rounded-2xl bg-surface/80 border border-border/80 backdrop-blur-md shadow-xs gap-1.5"
            role="tablist"
            aria-label="Project filters"
          >
            {filters.map((filter) => {
              const isActive = activeFilter === filter;
              return (
                <button
                  key={filter}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveFilter(filter)}
                  className={cn(
                    "px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer",
                    isActive
                      ? "bg-accent text-white shadow-md shadow-accent/25"
                      : "text-muted hover:text-foreground hover:bg-surface-muted"
                  )}
                >
                  {filter}
                </button>
              );
            })}
          </div>
        </AnimatedSection>

        {/* Projects Grid */}
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
