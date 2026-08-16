import type { DoodleProps } from "./types";

/** Elongated hand-drawn ribbon: a small loop at the top trailing into a long diagonal tail. */
export function Loop({ className = "", style }: DoodleProps) {
  return (
    <svg
      viewBox="0 0 26 64"
      className={`doodle ${className}`}
      style={style}
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M13 6 C 6 6, 3 13, 7 18 C 11 23, 18 20, 15 14 C 13 10, 9 11, 10 15 C 12 22, 13 30, 12 40 C 11 48, 9 55, 4 62"
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
