import type { DoodleProps } from "../../Doodles/types";

export function CactusIcon({ className = "", style }: DoodleProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`fun-fact-icon ${className}`}
      style={style}
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M6 16h12l-1.5 4h-9L6 16Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
        strokeLinecap="round"
        fill="none"
      />
      <rect
        x="7.3"
        y="11"
        width="2.6"
        height="5.4"
        rx="1.3"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />
      <rect
        x="10.7"
        y="5.6"
        width="2.6"
        height="10.8"
        rx="1.3"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />
      <rect
        x="14.1"
        y="9.2"
        width="2.6"
        height="7.2"
        rx="1.3"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />
    </svg>
  );
}
