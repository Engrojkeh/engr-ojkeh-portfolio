"use client";

import { useState } from "react";
import { Project } from "@/types";
import TechBadge from "@/components/ui/TechBadge";
import { ExternalLink, ImageIcon } from "lucide-react";
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
  const [imgError, setImgError] = useState(false);
  const hasImage = project.image && !imgError;

  return (
    <article
      className={cn(
        "group relative flex flex-col rounded-xl border border-border bg-surface/50 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-xl hover:shadow-accent/5",
        className
      )}
    >
      {/* Image area — renders the screenshot when present, gradient placeholder otherwise */}
      <div className="relative h-44 w-full overflow-hidden">
        {hasImage ? (
          <img
            src={project.image}
            alt={`${project.name} screenshot`}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            onError={() => setImgError(true)}
          />
        ) : (
          <div
            className="flex h-full w-full items-center justify-center"
            style={{
              background:
                "linear-gradient(135deg, var(--accent) 0%, var(--accent-muted) 60%, var(--background) 100%)",
              opacity: 0.12,
            }}
          >
            <div className="flex flex-col items-center gap-2 text-muted/60">
              <ImageIcon className="h-8 w-8" aria-hidden="true" />
              <span className="text-xs font-medium">{project.name}</span>
            </div>
          </div>
        )}
        {/* Status badge — overlaid on the image area */}
        <span
          className={cn(
            "absolute top-3 right-3 px-2.5 py-0.5 text-xs font-medium rounded-full border backdrop-blur-sm",
            statusColors[project.status] || "text-muted border-border"
          )}
        >
          {project.status}
        </span>
      </div>

      <div className="flex flex-col flex-1 p-5 md:p-6">
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
      </div>
    </article>
  );
}
