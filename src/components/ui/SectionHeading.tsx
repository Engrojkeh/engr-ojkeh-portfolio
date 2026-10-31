import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  badge?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  badge,
  align = "left",
  className,
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <div
      className={cn(
        "max-w-3xl mb-12 md:mb-16",
        isCenter && "mx-auto text-center flex flex-col items-center",
        className
      )}
    >
      {badge && (
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-accent/20 bg-accent/5 text-[11px] font-semibold uppercase tracking-wider text-accent mb-3">
          <span>{badge}</span>
        </div>
      )}
      <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight leading-[1.15] mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-muted text-base sm:text-lg max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
      <div
        className={cn(
          "mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-accent via-purple-500 to-transparent",
          isCenter && "mx-auto"
        )}
        aria-hidden="true"
      />
    </div>
  );
}
