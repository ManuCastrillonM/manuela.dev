import type { DoodleProps } from "../../Doodles/types";

export function ViolinIcon({ className = "", style }: DoodleProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`fun-fact-icon ${className}`}
      style={style}
      aria-hidden="true"
      focusable="false"
    >
      <circle
        cx="9"
        cy="8.6"
        r="3"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />
      <circle
        cx="9"
        cy="15.5"
        r="3.8"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />
      <path
        d="M9 5.6V3.3"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <circle cx="9" cy="2.5" r="0.85" stroke="currentColor" strokeWidth="1.1" fill="none" />
      <path
        d="M7.8 6.2v13M10.2 6.2v13"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <path
        d="M13 20 21 4"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
}
