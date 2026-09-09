import { useId } from 'react'

// Reveal the full Central logo with strokes following the infinity mark.
export default function InfinityMark() {
  const id = useId()
  return <svg className="hero-infinity" viewBox="0 0 1781 1387" aria-hidden="true">
    <defs>
      <mask id={id} maskUnits="userSpaceOnUse" x="0" y="0" width="1781" height="1387">
        <g fill="white">
          <rect x="0" y="1080" width="1781" height="307" />
          <rect x="1575" y="70" width="206" height="150" />
        </g>
        <g fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round">
          <path className="infinity-stroke infinity-stroke-one" pathLength="1" strokeWidth="180" d="M 340 0 C 90 120 0 345 55 560 C 120 850 465 1040 970 665" />
          <path className="infinity-stroke infinity-stroke-two" pathLength="1" strokeWidth="210" d="M 270 470 C 265 230 420 65 570 195 C 825 400 1050 700 1270 865 C 1510 1090 1790 835 1760 490" />
          <path className="infinity-stroke infinity-stroke-three" pathLength="1" strokeWidth="210" d="M 1080 475 C 1390 230 1740 315 1550 800" />
        </g>
      </mask>
    </defs>
    <image href="/Logo_CN_2025_Negro.webp" width="1781" height="1387" mask={`url(#${id})`} />
  </svg>
}
