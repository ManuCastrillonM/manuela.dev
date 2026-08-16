import type { DoodleProps } from "../../Doodles/types";

/**
 * 08_tiny_star_cluster.svg — two sparkles of different sizes plus a tiny dot.
 * Colors are self-contained (muted cream + accent yellow) rather than currentColor-driven,
 * since the cluster mixes two tones at once.
 */
export function TinyStarCluster({ className = "", style }: DoodleProps) {
  return (
    <svg viewBox="0 0 56 44" className={`doodle ${className}`} style={style} aria-hidden="true" focusable="false">
      <path
        d="M12 4C12.55 7.3 15.15 9.9 18.45 10.45C15.15 11 12.55 13.6 12 16.9C11.45 13.6 8.85 11 5.55 10.45C8.85 9.9 11.45 7.3 12 4Z"
        fill="var(--text-secondary)"
        opacity="0.7"
      />
      <path
        d="M40 18C40.65 21.9 43.75 25 47.65 25.65C43.75 26.3 40.65 29.4 40 33.3C39.35 29.4 36.25 26.3 32.35 25.65C36.25 25 39.35 21.9 40 18Z"
        fill="var(--accent-yellow)"
      />
      <circle cx="25.5" cy="6.5" r="1.5" fill="var(--text-secondary)" opacity="0.7" />
    </svg>
  );
}
