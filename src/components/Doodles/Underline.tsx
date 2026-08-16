import type { DoodleProps } from "./types";

/** Imperfect hand-drawn underline, meant to sit beneath a word or heading. */
export function Underline({ className = "", style }: DoodleProps) {
  return (
    <svg
      viewBox="0 0 160 14"
      className={`doodle ${className}`}
      style={style}
      preserveAspectRatio="none"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M2 8.5 C 32 3.5, 68 11.5, 98 6 C 118 2.5, 138 9, 158 5"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}
