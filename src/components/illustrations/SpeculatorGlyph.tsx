import { cn } from "@/lib/utils";

export function SpeculatorGlyph({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={cn("h-12 w-12", className)}
    >
      <g fill="none" stroke="currentColor" strokeWidth="1.25">
        <line x1="32" y1="6" x2="32" y2="58" />
        <line x1="6" y1="20" x2="58" y2="20" />
        <line x1="14" y1="20" x2="14" y2="34" />
        <line x1="50" y1="20" x2="50" y2="34" />
        <path d="M8 34 Q14 44 20 34" />
        <path d="M44 34 Q50 44 56 34" />
        <line x1="14" y1="6" x2="14" y2="20" />
        <line x1="50" y1="6" x2="50" y2="20" />
        <line x1="20" y1="58" x2="44" y2="58" />
        <line x1="32" y1="58" x2="32" y2="56" />
      </g>
      <circle cx="14" cy="6" r="1.5" fill="currentColor" />
      <circle cx="50" cy="6" r="1.5" fill="currentColor" />
    </svg>
  );
}
