// Reveal the original artwork with strokes following its individual curves.
export default function InfinityMark() {
  return <svg className="hero-infinity" viewBox="0 0 1781 1030" aria-hidden="true">
    <defs>
      <mask id="central-draw" maskUnits="userSpaceOnUse" x="0" y="0" width="1781" height="1030">
        <g fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round">
          <path className="infinity-stroke infinity-stroke-one" pathLength="1" strokeWidth="180" d="M 340 0 C 90 120 0 345 55 560 C 120 850 465 1040 970 665" />
          <path className="infinity-stroke infinity-stroke-two" pathLength="1" strokeWidth="210" d="M 270 470 C 265 230 420 65 570 195 C 825 400 1050 700 1270 865 C 1510 1090 1790 835 1760 490" />
          <path className="infinity-stroke infinity-stroke-three" pathLength="1" strokeWidth="210" d="M 1080 475 C 1390 230 1740 315 1550 800" />
        </g>
      </mask>
    </defs>
    <image href="/Logo_CN_2025_Negro.webp" width="1781" height="1387" mask="url(#central-draw)" />
  </svg>
}
