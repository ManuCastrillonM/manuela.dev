import headshot from "../../assets/headshot.jpg";
import { about } from "../../data/about";
import "./AboutPortrait.css";

/**
 * The full About portrait composition (irregular mask, purple decoration,
 * yellow doodles, green sparkle) as one SVG, per the supplied design file.
 * Colors are mapped to theme tokens instead of the file's literal hex values.
 */
export function AboutPortrait() {
  return (
    <svg
      className="about-portrait-svg"
      viewBox="0 0 520 580"
      role="img"
      aria-label={about.portraitAlt}
    >
      <defs>
        <clipPath id="aboutPortraitMask" clipPathUnits="userSpaceOnUse">
          <path
            d="M76 128 C81 91 106 61 153 45 C202 28 274 25 341 35 C398 44 444 67 469 106
               C489 137 490 178 487 221 C485 263 489 307 490 353 C491 400 490 446 468 483
               C444 523 394 549 319 553 C255 557 191 552 137 535 C94 522 63 493 49 449
               C37 412 39 372 40 330 C40 288 37 247 42 208 C46 175 56 147 76 128 Z"
          />
        </clipPath>
      </defs>

      <path
        className="about-portrait-purple"
        d="M301 38 C334 24 376 20 415 29 C452 38 483 60 495 93 C505 121 501 154 483 180
           C467 202 441 215 409 219 C372 224 341 214 319 194 C297 174 286 145 286 115
           C286 83 292 54 301 38 Z"
      />

      <path
        className="about-portrait-placeholder"
        d="M76 128 C81 91 106 61 153 45 C202 28 274 25 341 35 C398 44 444 67 469 106
           C489 137 490 178 487 221 C485 263 489 307 490 353 C491 400 490 446 468 483
           C444 523 394 549 319 553 C255 557 191 552 137 535 C94 522 63 493 49 449
           C37 412 39 372 40 330 C40 288 37 247 42 208 C46 175 56 147 76 128 Z"
      />

      <g clipPath="url(#aboutPortraitMask)">
        <image
          href={headshot}
          x="-55"
          y="32"
          width="650"
          height="530"
          preserveAspectRatio="xMidYMax slice"
          className="about-portrait-image"
        />
      </g>

      <path
        className="about-portrait-doodle"
        fill="none"
        d="M70 150 C80 128 95 111 111 106 C124 102 135 108 141 117 C146 127 144 139 136 145
           C127 152 117 147 114 137 C110 123 118 106 133 94 C148 82 164 78 176 81"
      />

      <path
        className="about-portrait-doodle"
        fill="none"
        d="M373 198 C381 184 392 175 403 173 C412 171 421 176 425 184 C429 191 427 199 420 202
           C413 206 406 201 404 193 C401 182 409 170 423 162 C437 154 455 156 473 166
           C489 175 502 188 512 202"
      />

      <g className="about-portrait-sparkle" transform="translate(44 452)">
        <path
          className="about-portrait-sparkle-fill"
          d="M20 0C22.1 9.6 29.4 16.9 39 19C29.4 21.1 22.1 28.4 20 38C17.9 28.4 10.6 21.1 1 19C10.6 16.9 17.9 9.6 20 0Z"
        />
        <path className="about-portrait-sparkle-line" d="M20 -10V2" />
        <path className="about-portrait-sparkle-line" d="M20 36V48" />
        <path className="about-portrait-sparkle-line" d="M-10 19H2" />
        <path className="about-portrait-sparkle-line" d="M38 19H50" />
        <path className="about-portrait-sparkle-line" d="M4 3L11 10" />
        <path className="about-portrait-sparkle-line" d="M29 28L36 35" />
        <path className="about-portrait-sparkle-line" d="M36 3L29 10" />
        <path className="about-portrait-sparkle-line" d="M11 28L4 35" />
      </g>
    </svg>
  );
}
