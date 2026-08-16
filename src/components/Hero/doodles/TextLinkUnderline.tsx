import type { DoodleProps } from "../../Doodles/types";

/** 07_text_link_underline.svg — single stroke beneath "Explore my work". */
export function TextLinkUnderline({ className = "", style }: DoodleProps) {
  return (
    <svg
      viewBox="0 0 124 13"
      className={`doodle ${className}`}
      style={style}
      preserveAspectRatio="none"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M3 8.5C24 6.2 46 5.3 67 6.1C86 6.8 103 8.8 121 7.4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
        fill="none"
      />
    </svg>
  );
}
