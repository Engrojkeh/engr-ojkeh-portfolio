"use client";

import { Project } from "@/types";
import TechBadge from "@/components/ui/TechBadge";
import { ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

const statusColors: Record<string, string> = {
  Completed: "text-green-400 border-green-400/30 bg-green-400/10",
  "In Progress": "text-blue-400 border-blue-400/30 bg-blue-400/10",
  Maintenance: "text-yellow-400 border-yellow-400/30 bg-yellow-400/10",
  Archived: "text-red-400 border-red-400/30 bg-red-400/10",
  Planned: "text-purple-400 border-purple-400/30 bg-purple-400/10",
};

interface ProjectCardProps {
  project: Project;
  className?: string;
}

export default function ProjectCard({ project, className }: ProjectCardProps) {
  return (
    <article
      className={cn(
        "group relative flex flex-col rounded-xl border border-border bg-surface/50 p-5 md:p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-xl hover:shadow-accent/5",
        className
      )}
    >
      <div className="flex items-start justify-between mb-4">
        <div
          className="flex h-12 w-12 items-center justify-center rounded-lg text-lg font-bold text-foreground/80"
          style={{
            background: "linear-gradient(135deg, var(--accent) 0%, var(--accent-muted) 100%)",
            opacity: 0.15,
          }}
          aria-hidden="true"
        >
          {project.name.charAt(0)}
        </div>
        <span
          className={cn(
            "px-2.5 py-0.5 text-xs font-medium rounded-full border",
            statusColors[project.status] || "text-muted border-border"
          )}
        >
          {project.status}
        </span>
      </div>

      <h3 className="font-display text-xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
        {project.name}
      </h3>
      <p className="text-muted text-sm leading-relaxed mb-4 line-clamp-3">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-5">
        {project.technologies.slice(0, 6).map((tech) => (
          <TechBadge key={tech} name={tech} />
        ))}
      </div>

      <div className="mt-auto flex items-center gap-3">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-foreground transition-colors"
          aria-label={`${project.name} GitHub repository`}
        >
          <ExternalLink className="h-4 w-4" aria-hidden="true" />
          Code
        </a>
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-foreground transition-colors"
            aria-label={`${project.name} live demo`}
          >
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
            Demo
          </a>
        )}
      </div>
    </article>
  );
}
