import { cn } from "@/lib/utils";

export function HedgerGlyph({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={cn("h-12 w-12", className)}
    >
      <g fill="none" stroke="currentColor" strokeWidth="1.25">
        <rect x="10" y="22" width="12" height="34" />
        <rect x="24" y="14" width="12" height="42" />
        <rect x="38" y="22" width="12" height="34" />
        <line x1="10" y1="30" x2="22" y2="30" />
        <line x1="10" y1="42" x2="22" y2="42" />
        <line x1="24" y1="22" x2="36" y2="22" />
        <line x1="24" y1="32" x2="36" y2="32" />
        <line x1="24" y1="42" x2="36" y2="42" />
        <line x1="38" y1="30" x2="50" y2="30" />
        <line x1="38" y1="42" x2="50" y2="42" />
        <path d="M16 22 L16 14 L30 14" />
        <path d="M30 14 L30 8 L44 8" />
        <line x1="6" y1="56" x2="58" y2="56" />
      </g>
      <circle cx="44" cy="8" r="1.5" fill="currentColor" />
      <circle cx="30" cy="14" r="1.5" fill="currentColor" />
    </svg>
  );
}
