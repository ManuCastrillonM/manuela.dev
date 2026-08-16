import type { DoodleProps } from "../../Doodles/types";

/** 02_sparkle_four_point.svg / 03_micro_sparkle.svg — same shape, reused at different sizes. */
export function HeroSparkle({ className = "", style }: DoodleProps) {
  return (
    <svg viewBox="0 0 24 24" className={`doodle ${className}`} style={style} aria-hidden="true" focusable="false">
      <path
        d="M12 2.5C12.8 7.1 16.6 10.8 21.2 11.6C16.6 12.4 12.8 16.1 12 20.7C11.2 16.1 7.4 12.4 2.8 11.6C7.4 10.8 11.2 7.1 12 2.5Z"
        fill="currentColor"
      />
    </svg>
  );
}
