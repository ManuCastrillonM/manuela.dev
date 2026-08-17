import type { DoodleProps } from "../../Doodles/types";

export function GameControllerIcon({ className = "", style }: DoodleProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`fun-fact-icon ${className}`}
      style={style}
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M6.5 8.7h11A3.5 3.5 0 0 1 21 12.2v2.1a3 3 0 0 1-3 3c-.87 0-1.7-.38-2.26-1.04l-1.1-1.31H9.36l-1.1 1.31A3 3 0 0 1 6 17.3a3 3 0 0 1-3-3v-2.1a3.5 3.5 0 0 1 3.5-3.5Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M7.2 11.3v3.1M5.65 12.85h3.1"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="15.4" cy="11.5" r="0.9" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="17.3" cy="13.2" r="0.9" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}
