import type { DoodleProps } from "./types";

/** Four-point sparkle. */
export function Sparkle({ className = "", style }: DoodleProps) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={`doodle ${className}`}
      style={style}
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M16 2 C16.6 9.8 17.9 14.3 26 15.6 C17.9 16.8 16.5 21.4 16 30 C15.3 21.6 14 17 6 15.6 C14 14.1 15.4 10 16 2 Z"
        fill="currentColor"
      />
    </svg>
  );
}
