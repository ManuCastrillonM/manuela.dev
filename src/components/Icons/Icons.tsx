import type { CSSProperties } from "react";

export interface IconProps {
  className?: string;
  style?: CSSProperties;
}

const base = {
  viewBox: "0 0 24 24",
  fill: "none" as const,
  "aria-hidden": true as const,
  focusable: false as const,
};

export function GlobeIcon({ className, style }: IconProps) {
  return (
    <svg {...base} className={className} style={style}>
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M12 3.5c2.4 2.3 3.6 5.2 3.6 8.5s-1.2 6.2-3.6 8.5c-2.4-2.3-3.6-5.2-3.6-8.5s1.2-6.2 3.6-8.5ZM4 9.5h16M4 14.5h16"
        stroke="currentColor"
        strokeWidth="1.3"
      />
    </svg>
  );
}

export function MicIcon({ className, style }: IconProps) {
  return (
    <svg {...base} className={className} style={style}>
      <rect x="9" y="3" width="6" height="11" rx="3" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M5.5 11.5a6.5 6.5 0 0 0 13 0M12 18v3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function CapIcon({ className, style }: IconProps) {
  return (
    <svg {...base} className={className} style={style}>
      <path
        d="m12 4 9 4.5-9 4.5-9-4.5 9-4.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M7 11v4.2c0 1 2.2 2.3 5 2.3s5-1.3 5-2.3V11M21 8.5v5.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function AwardIcon({ className, style }: IconProps) {
  return (
    <svg {...base} className={className} style={style}>
      <circle cx="12" cy="9" r="5.5" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="m8.5 13.5-1.6 6.7 5.1-2.6 5.1 2.6-1.6-6.7"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function BuildingIcon({ className, style }: IconProps) {
  return (
    <svg {...base} className={className} style={style}>
      <rect x="5" y="3.5" width="10" height="17" rx="1" stroke="currentColor" strokeWidth="1.5" />
      <path d="M17 9.5h2.5v11H17M8.2 7.5h1.2M13.2 7.5h1.2M8.2 11h1.2M13.2 11h1.2M8.2 14.5h1.2M13.2 14.5h1.2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

export function WandIcon({ className, style }: IconProps) {
  return (
    <svg {...base} className={className} style={style}>
      <path d="M5 19 17 7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path
        d="M16 3.5 16.9 5.6 19 6.5 16.9 7.4 16 9.5 15.1 7.4 13 6.5 15.1 5.6 16 3.5ZM6.5 14 7 15.3 8.3 15.8 7 16.3 6.5 17.6 6 16.3 4.7 15.8 6 15.3 6.5 14Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function LeafIcon({ className, style }: IconProps) {
  return (
    <svg {...base} className={className} style={style}>
      <path
        d="M19 5c.6 6.5-2 13-11 14C7.4 12 10.5 6.5 19 5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M17 7 8 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function PlayIcon({ className, style }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false" className={className} style={style}>
      <path d="M8.5 5.5v13l11-6.5-11-6.5Z" />
    </svg>
  );
}

export function VideoFrameIcon({ className, style }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false" className={className} style={style}>
      <rect x="2.5" y="4.5" width="19" height="15" rx="3.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M10.3 9.1v5.8l4.9-2.9-4.9-2.9Z" fill="currentColor" />
    </svg>
  );
}

export function CodeIcon({ className, style }: IconProps) {
  return (
    <svg {...base} className={className} style={style}>
      <path d="m9 7-5 5 5 5M15 7l5 5-5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function UsersIcon({ className, style }: IconProps) {
  return (
    <svg {...base} className={className} style={style}>
      <circle cx="9" cy="8.5" r="3" stroke="currentColor" strokeWidth="1.5" />
      <path d="M3.5 19c0-3 2.5-5 5.5-5s5.5 2 5.5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M15.5 6a3 3 0 0 1 0 5.8M18.5 19c0-2.6-1.8-4.5-4-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function StarIcon({ className, style }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false" className={className} style={style}>
      <path d="M12 3.2 14.6 9l6.2.5-4.7 4 1.4 6-5.5-3.3-5.5 3.3 1.4-6-4.7-4L9.4 9 12 3.2Z" />
    </svg>
  );
}

export function GithubIcon({ className, style }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false" className={className} style={style}>
      <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.1.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.64-1.34-2.22-.25-4.56-1.11-4.56-4.96 0-1.1.39-1.99 1.03-2.7-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.03a9.4 9.4 0 0 1 5 0c1.9-1.3 2.75-1.03 2.75-1.03.55 1.38.2 2.4.1 2.65.64.71 1.03 1.6 1.03 2.7 0 3.86-2.35 4.7-4.58 4.95.36.31.68.92.68 1.85v2.75c0 .26.18.58.69.48A10 10 0 0 0 12 2Z" />
    </svg>
  );
}

export function LinkedinIcon({ className, style }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false" className={className} style={style}>
      <path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3.4a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM20.5 20h-3.37v-6.06c0-1.44-.03-3.3-2.01-3.3-2.01 0-2.32 1.57-2.32 3.2V20H9.44V8.5h3.24v1.57h.05c.45-.86 1.56-1.77 3.21-1.77 3.44 0 4.07 2.26 4.07 5.2V20Z" />
    </svg>
  );
}

export function YoutubeIcon({ className, style }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false" className={className} style={style}>
      <path d="M21.6 7.7a2.8 2.8 0 0 0-2-2C17.9 5.3 12 5.3 12 5.3s-5.9 0-7.6.4a2.8 2.8 0 0 0-2 2A29 29 0 0 0 2 12a29 29 0 0 0 .4 4.3 2.8 2.8 0 0 0 2 2c1.7.4 7.6.4 7.6.4s5.9 0 7.6-.4a2.8 2.8 0 0 0 2-2A29 29 0 0 0 22 12a29 29 0 0 0-.4-4.3ZM10 15.2V8.8L15.8 12 10 15.2Z" />
    </svg>
  );
}

export function InstagramIcon({ className, style }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false" className={className} style={style}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="17.1" cy="6.9" r="1" fill="currentColor" />
    </svg>
  );
}

export function XIcon({ className, style }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false" className={className} style={style}>
      <path d="m4 4 7.1 9.1L4.4 20h1.8l5.9-6.4 4.5 6.4H20l-7.4-9.6L19 4h-1.8l-5.5 5.9L7.5 4H4Z" />
    </svg>
  );
}

export function MailIcon({ className, style }: IconProps) {
  return (
    <svg {...base} className={className} style={style}>
      <rect x="3" y="5.5" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="m4 7 8 6 8-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function MenuIcon({ className, style }: IconProps) {
  return (
    <svg {...base} className={className} style={style}>
      <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function CloseIcon({ className, style }: IconProps) {
  return (
    <svg {...base} className={className} style={style}>
      <path d="m5 5 14 14M19 5 5 19" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function BadgeIcon({ className, style }: IconProps) {
  return (
    <svg {...base} className={className} style={style}>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8.5 12.3 10.8 14.5 15.5 9.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function PeopleIcon({ className, style }: IconProps) {
  return <UsersIcon className={className} style={style} />;
}
