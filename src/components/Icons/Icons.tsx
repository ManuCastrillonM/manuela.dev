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

export function DisneyIcon({ className, style }: IconProps) {
  return (
    <svg
      viewBox="0 0 864.70099 710.06201"
      fill="none"
      aria-hidden
      focusable={false}
      className={className}
      style={style}
    >
      <path
        d="m 674.47112,659.26947 c -107.55463,33.35894 -209.03275,17.91496 -264.3292,3.08878 -1.51913,22.85703 -3.94974,32.43223 -7.59567,36.13885 -4.25357,4.94204 -39.49746,25.32809 -58.94237,-3.70662 -8.50716,-13.89949 -12.76073,-38.91869 -15.19135,-61.77572 C 203.84361,575.56325 146.11651,490.93045 144.29356,487.84165 c -3.03825,-3.08878 -31.29414,-33.05005 -3.03825,-70.11553 26.43291,-33.35891 113.93499,-67.02671 192.32228,-80.3085 3.03825,-67.95335 10.33011,-120.46279 19.74873,-143.62869 11.2416,-27.7991 25.52145,-3.08881 38.28218,15.44393 10.33008,13.89956 16.71044,73.5132 17.31811,121.08056 51.04288,-2.47104 82.03321,1.23548 138.84879,12.35515 74.74138,12.97292 124.56895,51.89165 120.61921,95.75245 -3.64593,43.24306 -42.53575,61.15802 -57.7271,62.39354 -15.19131,1.23552 -39.49746,-10.19301 -39.49746,-10.19301 -17.01429,-8.03085 -1.51913,-15.44392 18.2296,-24.09255 21.87553,-10.81076 17.0143,-21.62151 17.0143,-21.62151 -7.89949,-24.71033 -104.8202,-41.0809 -201.13326,-41.0809 0,54.05382 2.12679,143.62869 3.64592,195.82925 67.44954,12.97288 117.88475,10.19298 117.88475,10.19298 0,0 246.09964,-7.10421 253.08764,-166.7946 C 787.4947,283.05493 533.79939,129.85096 346.94595,81.665863 160.39637,31.936373 54.66468,67.148563 45.54988,71.781753 c -10.02626,4.94205 -0.91146,6.79533 -0.91146,6.79533 0,0 10.02626,1.54439 28.25586,7.72199 18.22961,6.17755 3.64593,15.443917 3.64593,15.443917 -31.90179,11.11966 -67.4495303,4.6332 -74.4375303,-10.193007 -6.98801,-14.51728 4.55738,-27.79908 18.2296003,-47.25846 12.76072,-20.07712 27.3444,-19.45938 27.3444,-19.45938 230.90828,-81.852918 512.85944,64.86457 512.85944,64.86457 C 824.2577,224.98568 869.224,384.05834 864.3628,445.83413 860.1092,506.68328 837.0184,609.53995 674.47112,659.57834 M 167.08055,438.42102 c -26.12909,12.35515 -7.89949,32.1234 -7.89949,32.1234 49.21993,53.43608 109.37761,87.10387 167.10467,108.10765 6.68422,-92.66369 6.07655,-125.71374 6.07655,-172.35444 -89.32503,6.17755 -140.97558,21.00377 -165.28173,32.12339"
        fill="currentColor"
      />
    </svg>
  );
}

export function UberIcon({ className, style }: IconProps) {
  return (
    <svg
      viewBox="0 0 926.906 321.777"
      fill="none"
      aria-hidden
      focusable={false}
      className={className}
      style={style}
    >
      <path
        d="M53.328,229.809c3.917,10.395,9.34,19.283,16.27,26.664c6.93,7.382,15.14,13.031,24.63,16.948
	c9.491,3.917,19.81,5.875,30.958,5.875c10.847,0,21.015-2.034,30.506-6.102s17.776-9.792,24.856-17.173
	c7.08-7.382,12.579-16.194,16.496-26.438c3.917-10.244,5.875-21.692,5.875-34.347V0h47.453v316.354h-47.001v-29.376
	c-10.545,11.147-22.974,19.734-37.285,25.761c-14.312,6.025-29.752,9.038-46.323,9.038c-16.873,0-32.615-2.938-47.228-8.813
	c-14.612-5.875-27.267-14.235-37.962-25.082S15.441,264.006,9.265,248.79C3.088,233.575,0,216.628,0,197.947V0h47.453v195.236
	C47.453,207.891,49.411,219.414,53.328,229.809z"
        fill="currentColor"
      />
      <path
        d="M332.168,0v115.243c10.545-10.545,22.748-18.905,36.607-25.082s28.924-9.265,45.193-9.265
	c16.873,0,32.689,3.163,47.453,9.49c14.763,6.327,27.567,14.914,38.414,25.761s19.434,23.651,25.761,38.414
	c6.327,14.764,9.49,30.431,9.49,47.002c0,16.57-3.163,32.162-9.49,46.774c-6.327,14.613-14.914,27.343-25.761,38.188
	c-10.847,10.847-23.651,19.434-38.414,25.761c-14.764,6.327-30.581,9.49-47.453,9.49c-16.27,0-31.409-3.088-45.419-9.265
	c-14.01-6.176-26.288-14.537-36.833-25.082v28.924h-45.193V0H332.168z M337.365,232.746c4.067,9.642,9.717,18.078,16.948,25.309
	c7.231,7.231,15.667,12.956,25.308,17.174c9.642,4.218,20.036,6.327,31.184,6.327c10.847,0,21.09-2.109,30.731-6.327
	s18.001-9.942,25.083-17.174c7.08-7.23,12.729-15.667,16.947-25.309c4.218-9.641,6.327-20.035,6.327-31.183
	c0-11.148-2.109-21.618-6.327-31.41s-9.867-18.303-16.947-25.534c-7.081-7.23-15.441-12.88-25.083-16.947
	s-19.885-6.102-30.731-6.102c-10.846,0-21.09,2.034-30.731,6.102s-18.077,9.717-25.309,16.947
	c-7.23,7.231-12.955,15.742-17.173,25.534c-4.218,9.792-6.327,20.262-6.327,31.41C331.264,212.711,333.298,223.105,337.365,232.746
	z"
        fill="currentColor"
      />
      <path
        d="M560.842,155.014c6.025-14.462,14.312-27.191,24.856-38.188s23.049-19.659,37.511-25.986
	s30.129-9.49,47.001-9.49c16.571,0,31.937,3.013,46.098,9.038c14.16,6.026,26.362,14.387,36.606,25.083
	c10.244,10.695,18.229,23.35,23.952,37.962c5.725,14.613,8.587,30.506,8.587,47.68v14.914H597.901
	c1.507,9.34,4.52,18.002,9.039,25.985c4.52,7.984,10.168,14.914,16.947,20.789c6.779,5.876,14.462,10.471,23.049,13.784
	c8.587,3.314,17.7,4.972,27.342,4.972c27.418,0,49.563-11.299,66.435-33.896l32.991,24.404
	c-11.449,15.366-25.609,27.418-42.481,36.155c-16.873,8.737-35.854,13.106-56.944,13.106c-17.174,0-33.217-3.014-48.131-9.039
	s-27.869-14.462-38.866-25.309s-19.659-23.576-25.986-38.188s-9.491-30.506-9.491-47.679
	C551.803,184.842,554.817,169.476,560.842,155.014z M624.339,137.162c-12.805,10.696-21.316,24.932-25.534,42.708h140.552
	c-3.917-17.776-12.278-32.012-25.083-42.708c-12.805-10.695-27.794-16.043-44.967-16.043
	C652.133,121.119,637.144,126.467,624.339,137.162z"
        fill="currentColor"
      />
      <path
        d="M870.866,142.359c-9.641,10.545-14.462,24.856-14.462,42.934v131.062h-45.646V85.868h45.193v28.472
	c5.725-9.34,13.182-16.722,22.371-22.145c9.189-5.424,20.111-8.136,32.766-8.136h15.817v42.482h-18.981
	C892.86,126.542,880.507,131.814,870.866,142.359z"
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
