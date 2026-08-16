import type { DoodleProps } from "../../Doodles/types";

/** 04_portrait_loop.svg — the ribbon loop trailing beside the portrait. */
export function PortraitLoop({ className = "", style }: DoodleProps) {
  return (
    <svg viewBox="0 0 150 185" className={`doodle ${className}`} style={style} aria-hidden="true" focusable="false">
      <path
        d="M18 166 C32 144 45 119 52 91 C58 66 58 39 47 26 C39 16 28 18 25 29 C21 43 31 56 47 59 C67 63 88 50 103 34 C115 22 124 14 134 10"
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
