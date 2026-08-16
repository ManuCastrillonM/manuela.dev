import type { DoodleProps } from "./types";

/** Small hand-drawn five-point star, stroke-based. */
export function Star({ className = "", style }: DoodleProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`doodle ${className}`}
      style={style}
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M12 2.6 L14.4 9.3 L21.4 9.6 L15.7 13.8 L17.8 20.6 L12 16.5 L6.2 20.6 L8.3 13.8 L2.6 9.6 L9.6 9.3 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}
