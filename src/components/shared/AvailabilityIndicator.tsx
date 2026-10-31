"use client";

export default function AvailabilityIndicator() {
  return (
    <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 backdrop-blur-md shadow-sm transition-all duration-300 hover:border-emerald-500/50 hover:bg-emerald-500/15">
      <span className="relative flex h-2.5 w-2.5" aria-hidden="true">
        <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
      </span>
      <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400 tracking-wide">
        Available for new opportunities
      </span>
    </div>
  );
}
