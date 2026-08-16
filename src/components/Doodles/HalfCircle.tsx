import type { DoodleProps } from "./types";

/** Cropped half-circle arc, used as a soft background accent. */
export function HalfCircle({ className = "", style }: DoodleProps) {
  return (
    <svg
      viewBox="0 0 100 50"
      className={`doodle ${className}`}
      style={style}
      aria-hidden="true"
      focusable="false"
    >
      <path d="M2 50 A 48 48 0 0 1 98 50 Z" fill="currentColor" />
    </svg>
  );
}
