import { cn } from "@/lib/utils";

export function PortraitPlaceholder({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 240 300"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={cn("h-auto w-full", className)}
    >
      <rect x="0" y="0" width="240" height="300" fill="hsl(215 30% 96%)" />
      <g fill="none" stroke="currentColor" strokeWidth="1" opacity="0.55">
        <rect x="0.5" y="0.5" width="239" height="299" />
        <line x1="0" y1="220" x2="240" y2="220" />
      </g>
      <g fill="none" stroke="currentColor" strokeWidth="1.25">
        <circle cx="120" cy="118" r="34" />
        <path d="M58 220 C58 178, 90 158, 120 158 C150 158, 182 178, 182 220" />
      </g>
      <g fill="currentColor">
        <text
          x="120"
          y="248"
          textAnchor="middle"
          fontFamily="ui-serif, Georgia, serif"
          fontSize="18"
          fontStyle="italic"
        >
          Walsh West
        </text>
        <text
          x="120"
          y="272"
          textAnchor="middle"
          fontFamily="ui-sans-serif, system-ui, sans-serif"
          fontSize="9"
          letterSpacing="2"
          opacity="0.7"
        >
          BRANCH OFFICE
        </text>
      </g>
    </svg>
  );
}
