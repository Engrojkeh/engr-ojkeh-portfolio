"use client";

import { projects } from "@/data/projects";
import ProjectCard from "@/components/ui/ProjectCard";
import AnimatedSection from "@/components/shared/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Projects() {
  return (
    <section id="projects" className="py-20 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            title="Featured Projects"
            subtitle="Architected and deployed applications built for performance, reliability, and modern user experiences."
          />
        </AnimatedSection>

        {/* Projects Grid: 8 detailed engineering projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <AnimatedSection key={project.id} delay={index * 0.05}>
              <ProjectCard project={project} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
