import type { DoodleProps } from "../../Doodles/types";

export function ChessKnightIcon({ className = "", style }: DoodleProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`fun-fact-icon ${className}`}
      style={style}
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M7.5 20h9"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M9 20v-1.9c0-.85.42-1.64 1.12-2.12l1.16-.79c.68-.46 1.09-1.24 1.09-2.06V12c-1.3-.05-2.4-.98-2.68-2.24-.05-.24.09-.48.32-.55l.9-.28"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M12.4 12.15c1.55 0 2.8-1.24 2.8-2.77 0-1.24-.5-2.3-1.55-3.55l-2.15-2.4c-.35-.4-.98-.4-1.32 0-.3.35-.28.87.05 1.19l1.3 1.28c-1.75.18-3.13 1.35-3.6 2.95"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M15.2 9.4c1.1.62 1.8 1.8 1.8 3.12v2.05c0 .96-.44 1.87-1.2 2.46l-.55.44c-.5.4-.79 1-.79 1.64V20"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="12.75" cy="8.15" r="0.55" stroke="currentColor" strokeWidth="1.1" />
    </svg>
  );
}
