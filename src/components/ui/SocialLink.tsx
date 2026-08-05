"use client";

import { cn } from "@/lib/utils";

interface SocialLinkProps {
  name: string;
  url: string;
  icon: React.ComponentType<{ className?: string }>;
  label?: string;
  className?: string;
}

export default function SocialLink({
  name,
  url,
  icon: Icon,
  label,
  className,
}: SocialLinkProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label || `${name} profile`}
      className={cn(
        "inline-flex items-center justify-center p-2.5 rounded-full border border-border text-muted transition-all duration-200 hover:scale-110 hover:border-accent hover:text-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        className
      )}
    >
      <Icon className="h-5 w-5" aria-hidden="true" />
      <span className="sr-only">{label || name}</span>
    </a>
  );
}
