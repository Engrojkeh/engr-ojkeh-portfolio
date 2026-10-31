"use client";

import { useState } from "react";
import Image from "next/image";
import { Project } from "@/types";
import TechBadge from "@/components/ui/TechBadge";
import { ImageIcon, ArrowUpRight } from "lucide-react";
import { brandIcons } from "@/components/ui/BrandIcons";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  className?: string;
}

export default function ProjectCard({ project, className }: ProjectCardProps) {
  const [imgError, setImgError] = useState(false);
  const hasImage = project.image && !imgError;
  const GitHubIcon = brandIcons.GitHub;

  // Derive a slug from the project name for the address bar
  const slug = project.name.toLowerCase().replace(/[^a-z0-9]/g, "");

  return (
    <article
      className={cn(
        "group relative flex flex-col rounded-3xl border border-border/80 bg-surface/90 overflow-hidden shadow-lg backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-accent/50 hover:shadow-2xl hover:shadow-accent/10",
        className
      )}
    >
      {/* macOS-style Window Frame Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-surface-muted/90 border-b border-border/70 backdrop-blur-md">
        <div className="flex items-center gap-1.5" aria-hidden="true">
          <span className="h-3 w-3 rounded-full bg-[#ff5f56] border border-[#e0443e]/40 shadow-xs" />
          <span className="h-3 w-3 rounded-full bg-[#ffbd2e] border border-[#dea123]/40 shadow-xs" />
          <span className="h-3 w-3 rounded-full bg-[#27c93f] border border-[#1aab29]/40 shadow-xs" />
        </div>

        {/* Center realistic browser URL bar */}
        <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-surface/80 border border-border/70 text-[11px] font-mono text-muted tracking-tight truncate max-w-[200px]">
          <span className="text-[10px] text-accent">🔒</span>
          <span className="truncate">engrojkeh.dev/{slug}</span>
        </div>

        <div className="w-10" aria-hidden="true" />
      </div>

      {/* Image / Mockup Viewport */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-surface-muted">
        {hasImage ? (
          <Image
            src={project.image}
            alt={`${project.name} interface preview`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
            onError={() => setImgError(true)}
          />
        ) : (
          <div
            className="flex h-full w-full items-center justify-center bg-gradient-to-br from-accent/10 via-surface to-surface-muted"
          >
            <div className="flex flex-col items-center gap-2 text-muted">
              <div className="p-3 rounded-2xl bg-accent/10 border border-accent/20">
                <ImageIcon className="h-6 w-6 text-accent" aria-hidden="true" />
              </div>
              <span className="text-xs font-mono font-medium text-foreground/80">{project.name}</span>
            </div>
          </div>
        )}

        {/* Glass sheen overlay */}
        <div
          className="absolute inset-0 pointer-events-none bg-gradient-to-t from-surface/90 via-surface/20 to-transparent opacity-80"
          aria-hidden="true"
        />
      </div>

      {/* Card Content & Details */}
      <div className="flex flex-col flex-1 p-6">
        <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground group-hover:text-accent transition-colors mb-2.5">
          {project.name}
        </h3>

        <p className="text-muted text-sm leading-relaxed mb-5 line-clamp-3">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.technologies.slice(0, 6).map((tech) => (
            <TechBadge key={tech} name={tech} />
          ))}
        </div>

        {/* Action Buttons */}
        <div className="mt-auto flex items-center justify-between gap-3 pt-4 border-t border-border/60">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl border border-border bg-surface text-xs font-semibold text-foreground hover:bg-surface-muted hover:text-accent hover:border-accent/40 transition-all duration-200 shadow-xs"
            aria-label={`${project.name} GitHub repository`}
          >
            {GitHubIcon && <GitHubIcon className="h-3.5 w-3.5" />}
            <span>Source Code</span>
          </a>
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-accent text-white text-xs font-semibold hover:bg-accent-hover shadow-md shadow-accent/20 transition-all duration-200 hover:-translate-y-0.5"
              aria-label={`${project.name} live demo`}
            >
              <span>Live Preview</span>
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
