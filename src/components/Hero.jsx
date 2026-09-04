import './Hero.css'

const Hero = () => {
  return (
    <section id="hero" className="hero section">
      
      {/* SVG Animated Cables Layer (Desktop) */}
      <svg className="hero-cables-overlay hero-cables-desktop" viewBox="0 0 1000 600" preserveAspectRatio="none">
        <defs>
          <linearGradient id="grad-cyan" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#274C77" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#00E5FF" stopOpacity="0.8" />
          </linearGradient>
          <linearGradient id="grad-yellow" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#274C77" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#FFB800" stopOpacity="0.8" />
          </linearGradient>
          <linearGradient id="grad-green" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#274C77" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#00E676" stopOpacity="0.8" />
          </linearGradient>
          <linearGradient id="grad-red" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#274C77" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#FF3D00" stopOpacity="0.8" />
          </linearGradient>
          <linearGradient id="grad-blue" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#274C77" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#2979FF" stopOpacity="0.8" />
          </linearGradient>
          <linearGradient id="grad-purple" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#274C77" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#D500F9" stopOpacity="0.8" />
          </linearGradient>
          <linearGradient id="grad-coral" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#274C77" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#E85C41" stopOpacity="0.8" />
          </linearGradient>
        </defs>

        {/* Cable paths */}
        <path d="M 280 250 C 340 180, 390 140, 460 132" className="cable-base" />
        <path d="M 280 250 C 340 180, 390 140, 460 132" className="cable-flow flow-yellow" />

        <path d="M 270 300 C 290 320, 310 330, 340 336" className="cable-base" />
        <path d="M 270 300 C 290 320, 310 330, 340 336" className="cable-flow flow-cyan" />

        <path d="M 250 320 C 265 370, 280 410, 300 444" className="cable-base" />
        <path d="M 250 320 C 265 370, 280 410, 300 444" className="cable-flow flow-green" />

        <path d="M 290 220 C 440 110, 580 80, 750 90" className="cable-base" />
        <path d="M 290 220 C 440 110, 580 80, 750 90" className="cable-flow flow-red" />

        <path d="M 280 340 C 330 410, 380 450, 450 492" className="cable-base" />
        <path d="M 280 340 C 330 410, 380 450, 450 492" className="cable-flow flow-blue" />

        <path d="M 280 250 C 330 220, 380 200, 430 204" className="cable-base" />
        <path d="M 280 250 C 330 220, 380 200, 430 204" className="cable-flow flow-purple" />

        <path d="M 290 230 C 380 200, 470 210, 560 240" className="cable-base" />
        <path d="M 290 230 C 380 200, 470 210, 560 240" className="cable-flow flow-coral" />
      </svg>

      {/* SVG Animated Cables Layer (Mobile Custom Layout) */}
      <svg className="hero-cables-overlay hero-cables-mobile" viewBox="0 0 1000 1000" preserveAspectRatio="none">
        {/* Top Arc (TV to Centered RADIO) */}
        <path d="M 140 130 C 260 70, 380 65, 500 65" className="cable-base" />
        <path d="M 140 130 C 260 70, 380 65, 500 65" className="cable-flow flow-yellow" />

        {/* Top Arc (Centered RADIO to PR) */}
        <path d="M 500 65 C 680 65, 820 120, 925 260" className="cable-base" />
        <path d="M 500 65 C 680 65, 820 120, 925 260" className="cable-flow flow-purple" />

        {/* Top-Left Drop (TV to DIGITAL) */}
        <path d="M 140 130 C 130 190, 190 240, 270 280" className="cable-base" />
        <path d="M 140 130 C 130 190, 190 240, 270 280" className="cable-flow flow-coral" />

        {/* Mid-Top Bridge (DIGITAL to PR) */}
        <path d="M 270 280 C 450 180, 750 180, 925 260" className="cable-base" />
        <path d="M 270 280 C 450 180, 750 180, 925 260" className="cable-flow flow-cyan" />

        {/* Bottom Arc (RETAIL to ANALYTICS) */}
        <path d="M 220 820 C 450 770, 700 790, 900 860" className="cable-base" />
        <path d="M 220 820 C 450 770, 700 790, 900 860" className="cable-flow flow-red" />

        {/* Bottom Curve (RETAIL to OOH) */}
        <path d="M 220 820 C 270 880, 340 910, 415 920" className="cable-base" />
        <path d="M 220 820 C 270 880, 340 910, 415 920" className="cable-flow flow-green" />

        {/* Bottom Curve (OOH to ANALYTICS) */}
        <path d="M 415 920 C 580 940, 780 920, 900 860" className="cable-base" />
        <path d="M 415 920 C 580 940, 780 920, 900 860" className="cable-flow flow-blue" />
      </svg>

      {/* Hero Content Layer */}
      <div className="container hero-container">
        <div className="hero-content animate-fade-in-up">
          <span className="hero-top-badge">MEDIA ECOSYSTEM</span>
          <h1 className="hero-title">
            CENTRAL MX<span className="hero-red-dot">.</span>
          </h1>
          <p className="hero-subtitle">
            Somos la <strong>agencia boutique</strong> para marcas que necesitan <strong>atención senior</strong>, <strong>criterio de negocio</strong>, <strong>capacidad de ejecución</strong>, <strong>gobernanza y negociación de alto valor</strong>, sin la burocracia de una red global.
          </p>
          <div className="hero-actions">
            <a href="#services" className="btn btn-hero-primary">
              Descubre nuestras soluciones <span className="btn-arrow">→</span>
            </a>
          </div>
        </div>
      </div>

      {/* Nodes HTML Overlay */}
      <div className="hero-nodes-layer">
        <div className="hero-node-item node-tv" style={{ top: '22%', left: '46%' }}>
          <span className="node-label">TV</span>
          <span className="node-dot dot-yellow"></span>
        </div>

        <div className="hero-node-item node-digital" style={{ top: '56%', left: '34%' }}>
          <span className="node-label">DIGITAL</span>
          <span className="node-dot dot-cyan"></span>
        </div>

        <div className="hero-node-item node-retail" style={{ top: '74%', left: '30%' }}>
          <span className="node-label">RETAIL</span>
          <span className="node-dot dot-green"></span>
        </div>

        <div className="hero-node-item node-ooh" style={{ top: '15%', left: '75%' }}>
          <span className="node-dot dot-red"></span>
          <span className="node-label">OOH</span>
        </div>

        <div className="hero-node-item node-analytics" style={{ top: '82%', left: '45%' }}>
          <span className="node-dot dot-blue"></span>
          <span className="node-label">ANALYTICS</span>
        </div>

        <div className="hero-node-item node-radio" style={{ top: '32%', left: '42%' }}>
          <span className="node-label">RADIO</span>
          <span className="node-dot dot-purple"></span>
        </div>

        <div className="hero-node-item node-pr" style={{ top: '40%', left: '56%' }}>
          <span className="node-dot dot-coral"></span>
          <span className="node-label">PR & INFLUENCERS</span>
        </div>
      </div>

    </section>
  )
}

export default Hero
