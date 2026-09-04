export default function SceneTrace() {
  return <svg className="scene-trace" viewBox="0 0 1000 600" fill="none" aria-hidden="true">
    <path pathLength="1" d="M 500 300 C 250 -10 30 40 60 290 C 90 570 350 550 500 300 C 720 30 955 80 945 320 C 930 580 690 565 500 300" />
    <path className="trace-echo" pathLength="1" d="M 500 300 C 250 -10 30 40 60 290 C 90 570 350 550 500 300 C 720 30 955 80 945 320 C 930 580 690 565 500 300" />
  </svg>
}
