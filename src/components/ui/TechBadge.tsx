import { cn } from "@/lib/utils";

interface TechBadgeProps {
  name: string;
  className?: string;
}

export default function TechBadge({ name, className }: TechBadgeProps) {
  return (
    <span
      className={cn(
        "inline-block px-3 py-1 text-xs font-medium rounded-full border border-border bg-surface text-muted transition-all duration-200 hover:scale-105 hover:border-accent hover:text-foreground cursor-default",
        className
      )}
    >
      {name}
    </span>
  );
}
