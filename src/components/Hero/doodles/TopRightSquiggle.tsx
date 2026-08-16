import type { DoodleProps } from "../../Doodles/types";

/** 05_top_right_squiggle.svg — the loose squiggle above the portrait's right edge. */
export function TopRightSquiggle({ className = "", style }: DoodleProps) {
  return (
    <svg viewBox="0 0 118 56" className={`doodle ${className}`} style={style} aria-hidden="true" focusable="false">
      <path
        d="M4 35 C16 18 30 12 41 16 C50 19 49 30 40 33 C31 36 25 26 32 19 C41 10 56 12 68 20 C77 26 86 31 96 28 C104 26 109 20 114 13"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
        fill="none"
      />
    </svg>
  );
}
