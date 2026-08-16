import type { DoodleProps } from "./types";

/** Asymmetric double spiral: a small tight curl flowing into a much larger loose one. */
export function Squiggle({ className = "", style }: DoodleProps) {
  return (
    <svg
      viewBox="0 0 42 34"
      className={`doodle ${className}`}
      style={style}
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M5 14 C 3 9, 7 4, 13 6 C 18 7.5, 17 13, 12 12 C 9 11.3, 9 8, 12 8 C 18 8, 26 6, 32 12 C 39 19, 37 29, 28 30 C 21 30.5, 18 23, 24 20 C 28 18, 33 21, 32 26"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}
