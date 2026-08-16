import type { DoodleProps } from "./types";

/** Small radiating starburst, used sparingly as a focal accent. */
export function Burst({ className = "", style }: DoodleProps) {
  const lines = Array.from({ length: 8 }, (_, i) => {
    const angle = (i * Math.PI) / 4;
    const inner = 6;
    const outer = i % 2 === 0 ? 15 : 11;
    const x1 = 16 + Math.cos(angle) * inner;
    const y1 = 16 + Math.sin(angle) * inner;
    const x2 = 16 + Math.cos(angle) * outer;
    const y2 = 16 + Math.sin(angle) * outer;
    return { x1, y1, x2, y2 };
  });

  return (
    <svg
      viewBox="0 0 32 32"
      className={`doodle ${className}`}
      style={style}
      aria-hidden="true"
      focusable="false"
    >
      {lines.map((line, i) => (
        <line
          key={i}
          x1={line.x1}
          y1={line.y1}
          x2={line.x2}
          y2={line.y2}
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
        />
      ))}
    </svg>
  );
}
