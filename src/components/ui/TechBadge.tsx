import { cn } from "@/lib/utils";

interface TechBadgeProps {
  name: string;
  className?: string;
}

export default function TechBadge({ name, className }: TechBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-1 text-[11px] font-mono font-medium rounded-lg border border-border/80 bg-surface/70 text-foreground/85 shadow-2xs backdrop-blur-xs transition-all duration-200 hover:scale-[1.03] hover:border-accent/60 hover:text-accent hover:bg-accent/5 cursor-default select-none",
        className
      )}
    >
      {name}
    </span>
  );
}
