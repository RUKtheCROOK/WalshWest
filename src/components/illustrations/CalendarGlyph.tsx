import { cn } from "@/lib/utils";

export function CalendarGlyph({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={cn("h-4 w-4", className)}
    >
      <g fill="none" stroke="currentColor" strokeWidth="1.25">
        <rect x="3" y="5" width="18" height="16" />
        <line x1="3" y1="10" x2="21" y2="10" />
        <line x1="8" y1="3" x2="8" y2="7" />
        <line x1="16" y1="3" x2="16" y2="7" />
      </g>
    </svg>
  );
}
