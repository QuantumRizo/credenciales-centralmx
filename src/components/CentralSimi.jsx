import { useEffect, useRef } from 'react'
import './CentralSimi.css'

const CentralSimi = () => {
  const elementsRef = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            obs.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    )

    elementsRef.current.forEach((el) => {
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const handleMouseMove = (e, cardEl) => {
    if (!cardEl || !cardEl.classList.contains('is-visible')) return
    const rect = cardEl.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    const tiltX = (y / (rect.height / 2)) * -6
    const tiltY = (x / (rect.width / 2)) * 6
    cardEl.style.transform = `perspective(1000px) rotateX(${tiltX.toFixed(2)}deg) rotateY(${tiltY.toFixed(2)}deg) translateY(-8px) scale(1.015)`
  }

  const handleMouseLeave = (cardEl) => {
    if (!cardEl) return
    cardEl.style.transform = ''
  }

  const corePillars = [
    { id: 1, title: 'Planeación estratégica' },
    { id: 2, title: 'Compra e implementación de medios' },
    { id: 3, title: 'Innovación en medios tradicionales' },
    { id: 4, title: 'Proyectos de alto impacto' },
    { id: 5, title: 'Reporting, Data Analytics & Automatización' }
  ]

  const jugadaMaestraSteps = [
    { step: '01', title: 'Identificación de oportunidad antes que nadie', desc: 'Detección temprana del potencial del Mundial 2026 y posicionamiento estratégico en la sede Monterrey.' },
    { step: '02', title: 'Estrategia y propuesta a la medida', desc: 'Diseño conceptual y comercial alineado a los objetivos de alcance e imagen del grupo.' },
    { step: '03', title: 'Negociación de presupuesto & assets', desc: 'Optimización de inversión logrando la maximización de activos incluidos en el convenio.' },
    { step: '04', title: 'Gestión legal & comercial ante FIFA', desc: 'Negociación directa y participación coordinada de las marcas clave del portafolio.' },
    { step: '05', title: 'Asesoría & activación de patrocinio', desc: 'Acompañamiento operativo continuo, activaciones BTL y promotoría de campo.' }
  ]

  return (
    <section id="centralsimi" className="centralsimi-page section">
      <div className="container">
        
        {/* Clean Executive CentralSimi Header */}
        <div className="cs-executive-header animate-fade-in-up">
          <div className="cs-brand-top">
            <img 
              src="/centralsimi.webp" 
              alt="Central Simi Logo" 
              className="cs-header-logo" 
            />
          </div>
          
          <p className="cs-header-lead">
            Ecosistema de medios dedicado a la gestión estratégica, compra e innovación publicitaria nacional de Farmacias Similares.
          </p>

          <div className="cs-stats-row">
            <div className="cs-stat-card stat-red">
              <div className="cs-stat-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C73B4A" strokeWidth="2"><path d="m3 11 18-5v12L3 14v-3z"/><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"/></svg>
              </div>
              <div className="cs-stat-value val-red">+15</div>
              <div className="cs-stat-label">Campañas anuales</div>
            </div>

            <div className="cs-stat-card stat-blue">
              <div className="cs-stat-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0B5EB7" strokeWidth="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              </div>
              <div className="cs-stat-value val-blue">+100</div>
              <div className="cs-stat-label">Socios comerciales</div>
            </div>

            <div className="cs-stat-card stat-red">
              <div className="cs-stat-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C73B4A" strokeWidth="2"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>
              </div>
              <div className="cs-stat-value val-red">100%</div>
              <div className="cs-stat-label">Cobertura Nacional</div>
            </div>
          </div>
        </div>

        {/* Core Scope & Pillars */}
        <div className="cs-scope-section">
          <div className="cs-section-header text-center animate-fade-in-up">
            <span className="cs-tag-label">PORTAFOLIO OFF & PROYECTOS ESPECIALES</span>
            <h2>Gestionamos el portafolio OFF de Farmacias Similares</h2>
            <p className="cs-scope-tags">OOH • TV • RADIO • PRENSA • DERRAME DIGITAL • PROYECTOS ESPECIALES</p>
          </div>

          <div className="cs-pillars-grid">
            {corePillars.map((pillar, idx) => (
              <div 
                className="cs-pillar-card scroll-animate-up" 
                key={pillar.id}
                ref={el => elementsRef.current[idx] = el}
                onMouseMove={(e) => handleMouseMove(e, elementsRef.current[idx])}
                onMouseLeave={() => handleMouseLeave(elementsRef.current[idx])}
              >
                <div className="cs-pillar-num">0{pillar.id}</div>
                <h3>{pillar.title}</h3>
              </div>
            ))}
          </div>

          <div className="cs-banner-footer text-center">
            <p>» Estrategias funcionales, eficientes y escalables que maximizan inversión y cobertura nacional «</p>
          </div>
        </div>

        {/* Featured Showcase: Host City Supporter Monterrey 2026 */}
        <div className="cs-showcase-card">
          <div className="cs-showcase-header">
            <div className="cs-showcase-badge">CASO EMBLEMÁTICO MUNDIAL 2026</div>
            <h2>Host City Supporter Monterrey</h2>
            <p className="cs-showcase-tagline">
              "La sede más pasional del Mundial: récord de asistencia, el mejor entretenimiento y un legado que trasciende al torneo."
            </p>
          </div>

          {/* Monterrey 2026 Visual Showcase Gallery */}
          <div className="cs-showcase-media-grid">
            <div className="cs-media-card cs-media-emblem">
              <img 
                src="/simi-monterrey-landscape.png" 
                alt="Host City Supporter Monterrey 2026 Farmacias Similares" 
                className="cs-media-landscape-img" 
              />
            </div>
            <div className="cs-media-card cs-media-photo">
              <img 
                src="/simi-monterrey-photo.jpg" 
                alt="Activación Monterrey 2026 Farmacias Similares" 
                className="cs-media-photo-img" 
              />
            </div>
          </div>

          {/* Impact Metrics */}
          <div className="cs-impact-grid">
            <div 
              className="cs-impact-card scroll-animate-up delay-100"
              ref={el => elementsRef.current[10] = el}
              onMouseMove={(e) => handleMouseMove(e, elementsRef.current[10])}
              onMouseLeave={() => handleMouseLeave(elementsRef.current[10])}
            >
              <div className="cs-impact-value val-red">-80%</div>
              <div className="cs-impact-label">Reducción de costo en la negociación</div>
            </div>

            <div 
              className="cs-impact-card scroll-animate-up delay-100"
              ref={el => elementsRef.current[11] = el}
              onMouseMove={(e) => handleMouseMove(e, elementsRef.current[11])}
              onMouseLeave={() => handleMouseLeave(elementsRef.current[11])}
            >
              <div className="cs-impact-value val-blue">2X</div>
              <div className="cs-impact-label">Assets obtenidos vs. acuerdo inicial</div>
            </div>

            <div 
              className="cs-impact-card scroll-animate-up delay-200"
              ref={el => elementsRef.current[12] = el}
              onMouseMove={(e) => handleMouseMove(e, elementsRef.current[12])}
              onMouseLeave={() => handleMouseLeave(elementsRef.current[12])}
            >
              <div className="cs-impact-value val-red">+160%</div>
              <div className="cs-impact-label">Cumplimiento del alcance original</div>
            </div>

            <div 
              className="cs-impact-card scroll-animate-up delay-200"
              ref={el => elementsRef.current[13] = el}
              onMouseMove={(e) => handleMouseMove(e, elementsRef.current[13])}
              onMouseLeave={() => handleMouseLeave(elementsRef.current[13])}
            >
              <div className="cs-impact-value val-blue">2.1X</div>
              <div className="cs-impact-label">Valor comercial obtenido vs. inversión</div>
            </div>
          </div>

          {/* La Jugada Maestra (5 Steps Timeline) */}
          <div className="cs-strategy-timeline">
            <h3 className="timeline-title">La Jugada Maestra</h3>
            <div className="timeline-steps">
              {jugadaMaestraSteps.map((s, idx) => (
                <div 
                  className="timeline-step-card scroll-animate-up" 
                  key={idx}
                  ref={el => elementsRef.current[5 + idx] = el}
                  onMouseMove={(e) => handleMouseMove(e, elementsRef.current[5 + idx])}
                  onMouseLeave={() => handleMouseLeave(elementsRef.current[5 + idx])}
                >
                  <div className="step-badge">{s.step}</div>
                  <div className="step-content">
                    <h4>{s.title}</h4>
                    <p>{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default CentralSimi
