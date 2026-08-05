"use client";

const pulseKeyframes = `
@keyframes pulse-ring {
  0% {
    transform: scale(0.8);
    opacity: 0.8;
  }
  50% {
    transform: scale(1.2);
    opacity: 0.4;
  }
  100% {
    transform: scale(0.8);
    opacity: 0.8;
  }
}
`;

export default function AvailabilityIndicator() {
  return (
    <>
      <style>{pulseKeyframes}</style>
      <div className="inline-flex items-center gap-2">
        <span
          className="relative flex h-2.5 w-2.5"
          aria-hidden="true"
        >
          <span
            className="absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"
            style={{ animation: "pulse-ring 2s cubic-bezier(0.4, 0, 0.6, 1) infinite" }}
          />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
        </span>
        <span className="text-xs text-muted font-medium tracking-wide uppercase">
          Open to Opportunities
        </span>
      </div>
    </>
  );
}
