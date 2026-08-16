import type { DoodleProps } from "../../Doodles/types";

/** 01_starburst_title.svg — eight-point cross burst beside the hero name. */
export function StarburstTitle({ className = "", style }: DoodleProps) {
  const lineProps = {
    stroke: "currentColor",
    strokeWidth: "1.6",
    strokeLinecap: "round" as const,
    vectorEffect: "non-scaling-stroke" as const,
  };

  return (
    <svg viewBox="0 0 34 34" className={`doodle ${className}`} style={style} aria-hidden="true" focusable="false">
      <path d="M17 3V11" {...lineProps} />
      <path d="M17 23V31" {...lineProps} />
      <path d="M3 17H11" {...lineProps} />
      <path d="M23 17H31" {...lineProps} />
      <path d="M7.1 7.1L12.7 12.7" {...lineProps} />
      <path d="M21.3 21.3L26.9 26.9" {...lineProps} />
      <path d="M26.9 7.1L21.3 12.7" {...lineProps} />
      <path d="M12.7 21.3L7.1 26.9" {...lineProps} />
    </svg>
  );
}
