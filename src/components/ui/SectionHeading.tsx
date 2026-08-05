import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export default function SectionHeading({ title, subtitle, className }: SectionHeadingProps) {
  return (
    <div className={cn("max-w-3xl mb-12 md:mb-16", className)}>
      <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight mb-4 relative">
        {title}
        <span
          className="absolute -bottom-2 left-0 h-1 w-16 md:w-20 rounded-full"
          style={{ background: "linear-gradient(90deg, var(--accent), var(--accent-muted))" }}
        />
      </h2>
      {subtitle && (
        <p className="text-muted text-base md:text-lg max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
