const OUTLINE_PATH =
  "M181 18 C226 16 267 28 294 55 C316 77 326 108 324 142 C322 175 330 205 326 239 C322 274 313 309 292 342 C274 371 247 396 214 410 C184 423 149 424 119 414 C91 405 68 386 53 362 C38 338 32 308 35 278 C38 249 31 220 34 191 C37 158 46 126 63 97 C80 69 105 45 135 31 C149 24 165 20 181 18 Z";

const CLIP_PATH =
  "M0.5028 0.0409 C0.6278 0.0364 0.7417 0.0636 0.8167 0.125 C0.8778 0.175 0.9056 0.2455 0.9 0.3227 C0.8944 0.3977 0.9167 0.4659 0.9056 0.5432 C0.8944 0.6227 0.8694 0.7023 0.8111 0.7773 C0.7611 0.8432 0.6861 0.9 0.5944 0.9318 C0.5111 0.9614 0.4139 0.9636 0.3306 0.9409 C0.2528 0.9205 0.1889 0.8773 0.1472 0.8227 C0.1056 0.7682 0.0889 0.7 0.0972 0.6318 C0.1056 0.5659 0.0861 0.5 0.0944 0.4341 C0.1028 0.3591 0.1278 0.2864 0.175 0.2205 C0.2222 0.1568 0.2917 0.1023 0.375 0.0705 C0.4139 0.0545 0.4583 0.0455 0.5028 0.0409 Z";

/**
 * The organic portrait mask supplied in portrait-organic-frame.svg, reproduced as a
 * reusable clipPath (for the image) plus a matching stroked outline overlay.
 */
export function PortraitFrame() {
  return (
    <>
      <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true" focusable="false">
        <defs>
          <clipPath id="portrait-organic-frame" clipPathUnits="objectBoundingBox">
            <path d={CLIP_PATH} />
          </clipPath>
        </defs>
      </svg>
      <svg
        className="hero-portrait-outline"
        viewBox="0 0 360 440"
        preserveAspectRatio="none"
        aria-hidden="true"
        focusable="false"
      >
        <path
          d={OUTLINE_PATH}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </>
  );
}
