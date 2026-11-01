/** Artwork SVG asli, tidak memerlukan screenshot atau layanan eksternal. */
export default function ProjectArtwork({ theme }) {
  if (theme === 'web') {
    return (
      <div className="art-surface art-web" aria-hidden="true">
        <div className="mock-browser">
          <div className="browser-top"><span /><span /><span /><i /></div>
          <div className="browser-main">
            <div className="browser-nav" />
            <div className="browser-title" /><div className="browser-title short" />
            <div className="browser-detail" />
            <div className="browser-panels"><b /><b /><b /></div>
          </div>
        </div>
        <div className="floating-token token-one">&lt;/&gt;</div>
        <div className="floating-token token-two">01 / UI</div>
      </div>
    )
  }
  if (theme === 'research') {
    return (
      <div className="art-surface art-research" aria-hidden="true">
        <div className="research-orbit orbit-outer" /><div className="research-orbit orbit-inner" />
        <div className="research-core"><div className="core-ring" /><span>R</span></div>
        <span className="research-dot d1" /><span className="research-dot d2" /><span className="research-dot d3" />
        <span className="research-caption">STATISTICAL / MODELS</span>
      </div>
    )
  }
  return (
    <div className="art-surface art-graph" aria-hidden="true">
      <div className="graph-frame">
        <div className="graph-topline"><span>ANALYTICS SYSTEM</span><b>● LIVE</b></div>
        <svg viewBox="0 0 500 275" preserveAspectRatio="none" className="graph-svg">
          <defs>
            <linearGradient id="line-area" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#176BFF" stopOpacity=".38"/><stop offset="1" stopColor="#176BFF" stopOpacity="0"/></linearGradient>
          </defs>
          {[42,94,146,198,250].map(y => <path key={y} d={`M0 ${y} H500`} stroke="#5279bd" strokeOpacity=".16" strokeWidth="1" />)}
          <path d="M0 235 C45 213 55 240 95 175 S155 202 190 144 S250 163 278 114 S335 143 368 76 S425 123 500 18 V275 H0 Z" fill="url(#line-area)" />
          <path d="M0 235 C45 213 55 240 95 175 S155 202 190 144 S250 163 278 114 S335 143 368 76 S425 123 500 18" fill="none" stroke="#4CC8FF" strokeWidth="4" strokeLinecap="round" />
          <circle cx="368" cy="76" r="7" fill="#75E5FF" stroke="#081834" strokeWidth="5" />
          <circle cx="500" cy="18" r="5" fill="#75E5FF" />
        </svg>
        <div className="graph-bottom"><span>DATA SET / 001</span><span>EST. 2026</span></div>
      </div>
      <div className="graph-mini-stat"><span>INSIGHT / 01</span><strong>+24.8<span>%</span></strong><small>VISUAL DEMO</small></div>
    </div>
  )
}
