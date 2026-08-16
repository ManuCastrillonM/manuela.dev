import type { DoodleProps } from "./types";

/** Two hand-drawn strokes, used beneath a heading or the tail of a word. */
export function DoubleUnderline({ className = "", style }: DoodleProps) {
  return (
    <svg
      viewBox="0 0 112 18"
      className={`doodle ${className}`}
      style={style}
      preserveAspectRatio="none"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M4 6C28 3.5 54 3.2 83 5.6C93 6.4 101 6.8 108 6.3"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
        fill="none"
      />
      <path
        d="M12 13C34 10.8 55 10.6 79 12.2C89 12.9 97 13 103 12.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
        fill="none"
      />
    </svg>
  );
}
