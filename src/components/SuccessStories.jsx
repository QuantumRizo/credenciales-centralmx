import { useState, useEffect, useRef } from 'react'
import './SuccessStories.css'
import DualImageGallery from './DualImageGallery'

const caseStudies = [
  {
    id: 'simi',
    name: 'CentralSimi',
    themeClass: 'theme-simi',
    logo: '/centralsimi.webp',
    badge: 'Agencia Única Exclusiva',
    title: 'CentralSimi: Agencia Única & Ecosistema de Farmacias Similares',
    description: 'Ecosistema de medios dedicado a la gestión estratégica, compra e innovación publicitaria nacional de Farmacias Similares.',
    ctaText: 'Ver Caso Completo CentralSimi & Mundial 2026 →',
    ctaLink: '#centralsimi',
    services: [
      'Agencia Única & Compra Masiva de Medios (TV, Radio, OOH)',
      'Negociación de Patrocinios (FIFA 2026 Host City Monterrey)',
      'Estrategia Creativa & Activaciones de Marca',
      'Data Analytics & Monitoreo de Retorno de Inversión'
    ],
    visual: {
      number: '01',
      label: 'CASO EMBLEMÁTICO MUNDIAL 2026',
      title: 'Host City Supporter Monterrey 2026',
      description: 'Planeación 360°, negociación directa de alto impacto y gestión comercial estratégica ante la FIFA con presencia nacional.',
      image: '/simi-monterrey-landscape.png',
      secondaryImage: '/simi-monterrey-photo.jpg',
      isDualGallery: true
    }
  },
  {
    id: 'sika',
    name: 'Sika',
    themeClass: 'theme-sika',
    logo: '/partners/sika.png',
    badge: 'Patrocinio Oficial',
    title: 'Patrocinio Sika × Club América',
    description: 'Consultoría estratégica, coordinación y gestión operativa del patrocinio de SIKA con el Club América.',
    ctaText: 'Conoce la Estrategia Sika →',
    ctaLink: '#contact',
    services: [
      'Consultoría Estratégica & Valuación de Patrocinio Deportivo',
      'Negociación y Coordinación Operativa con Club América',
      'Presencia en Cancha, Vallas LED & Uniforme Oficial',
      'Hospitality VIP & Amplificación Digital en Redes'
    ],
    visual: {
      number: '02',
      label: 'SPONSORSHIP & BRAND AWARENESS',
      title: 'Patrocinio Oficial Club América',
      description: 'Negociación de patrocinio de alto rendimiento en la liga nacional, presencia de marca y amplificación digital.',
      image: '/sika-america.jpg',
      isSingleImage: true
    }
  },
  {
    id: 'waldos',
    name: "Waldo's",
    themeClass: 'theme-waldos',
    logo: '/partners/waldos.webp',
    badge: 'Aliado Estratégico 4+ Años',
    title: 'Estrategia Retail Media & Medios Waldo\'s',
    description: 'Gestión integral de campañas digitales always-on, formatos OFF y activaciones de tráfico a tiendas retail.',
    ctaText: 'Conoce la Estrategia Retail →',
    ctaLink: '#contact',
    services: [
      'Campañas Digitales Always-On (Meta, Google & TikTok Ads)',
      'Retail Media & Geolocalización de Alta Conversión',
      'Publicidad Exterior (OOH Masivo) en Puntos Clave',
      'Modelos de Atribución & Tráfico a Sucursales'
    ],
    visual: {
      number: '03',
      label: 'RETAIL MEDIA & PERFORMANCE',
      title: 'Campañas Always-On & Tráfico a Tiendas',
      description: 'Estrategias geolocalizadas de gran formato y optimización continua con atribución medible a sucursales.',
      image: '/partners/waldos.webp',
      isSingleImage: true
    }
  }
]

const SuccessStories = () => {
  const [activeIdx, setActiveIdx] = useState(0)
  const [isFading, setIsFading] = useState(false)
  const cardRefs = useRef([])
  const leftColumnRef = useRef(null)
  const activeIdxRef = useRef(0)

  const activeCase = caseStudies[activeIdx]

  // Smooth cross-fade transition helper for sticky right column
  const triggerCaseChange = (newIdx) => {
    if (newIdx === activeIdxRef.current) return
    activeIdxRef.current = newIdx
    setIsFading(true)
    setTimeout(() => {
      setActiveIdx(newIdx)
      setTimeout(() => {
        setIsFading(false)
      }, 40)
    }, 140)
  }

  // IntersectionObserver to auto-switch right panel content as user scrolls left cards
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.getAttribute('data-case-idx'))
            if (!isNaN(idx)) {
              triggerCaseChange(idx)
            }
          }
        })
      },
      { threshold: 0.45, rootMargin: '-15% 0px -15% 0px' }
    )

    cardRefs.current.forEach((el) => {
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section 
      id="cases" 
      className={`success-cases section ${activeCase.themeClass}`}
    >
      <div className="container">
        
        {/* Section Header */}
        <div className="cases-header text-center animate-fade-in-up">
          <span className="cases-eyebrow">SELECTED WORK</span>
          <h2 className="cases-title">CASOS DE ÉXITO</h2>
          <p className="cases-subtitle">
            Resultados reales construidos a través de estrategia, negociación y ejecución de alto impacto.
          </p>
        </div>

        {/* Two-Column Scroll-Driven Layout: Left (Images/Cases) | Right (Services/Info Sticky) */}
        <div className="cases-story-layout">
          
          {/* LEFT COLUMN — SCROLLABLE CASE STUDY IMAGE CARDS */}
          <div className="cases-story-scroll-left" ref={leftColumnRef}>
            {caseStudies.map((item, idx) => (
              <div 
                key={item.id} 
                data-case-idx={idx}
                className={`story-scene-item ${activeIdx === idx ? 'scene-active' : ''}`}
                ref={el => cardRefs.current[idx] = el}
              >
                
                {/* Mobile-Only Brand Header */}
                <div className="mobile-case-header">
                  <div className="sticky-brand-bar">
                    <div className="sticky-logo-card">
                      <img src={item.logo} alt={item.name} className="sticky-client-logo" />
                    </div>
                    <span className="sticky-badge">{item.badge}</span>
                  </div>
                  <h3 className="sticky-case-title">{item.title}</h3>
                </div>

                {/* Card Header Badges */}
                <div className="scene-header-line">
                  <span className="scene-num-badge">CASE 0{idx + 1}</span>
                  <span className="scene-capability-tag">{item.visual.label}</span>
                </div>

                {/* Visual Image / Gallery Container */}
                <div className="scene-visual-wrapper">
                  {item.visual.isDualGallery ? (
                    <DualImageGallery 
                      primaryImage={item.visual.image}
                      secondaryImage={item.visual.secondaryImage}
                      title={item.visual.title}
                    />
                  ) : item.id === 'sika' ? (
                    <div className="scene-single-image-card card-sika-america">
                      <img 
                        src={item.visual.image} 
                        alt={item.visual.title} 
                        className="scene-hero-image-sika" 
                        loading="lazy" 
                      />
                    </div>
                  ) : (
                    <div className="scene-single-image-card card-general">
                      <img 
                        src={item.visual.image} 
                        alt={item.visual.title} 
                        className="scene-hero-image-contained" 
                        loading="lazy" 
                      />
                    </div>
                  )}
                </div>

                {/* Card Text: Only Title & Narrative (No metrics) */}
                <div className="scene-body-content">
                  <h4 className="scene-title">{item.visual.title}</h4>
                  <p className="scene-desc">{item.visual.description}</p>
                </div>

                {/* Mobile-Only Services & CTA */}
                <div className="mobile-case-services">
                  <span className="services-lead-label">Servicios a la empresa:</span>
                  <ul className="sticky-services-list">
                    {item.services.map((srv, sIdx) => (
                      <li key={sIdx} className="sticky-service-chip">
                        <span className="chip-bullet">•</span>
                        <span>{srv}</span>
                      </li>
                    ))}
                  </ul>
                  {item.ctaLink && (
                    <div className="sticky-cta-wrapper">
                      <a href={item.ctaLink} className="btn btn-sticky-cta">
                        {item.ctaText}
                      </a>
                    </div>
                  )}
                </div>

              </div>
            ))}
          </div>

          {/* RIGHT COLUMN — STICKY (Services & Company Info, smoothly cross-fades on scroll) */}
          <div className={`cases-sticky-right ${isFading ? 'is-fading' : ''}`}>
            
            <div className="sticky-brand-bar">
              <div className="sticky-logo-card">
                <img src={activeCase.logo} alt={activeCase.name} className="sticky-client-logo" />
              </div>
              <span className="sticky-badge">{activeCase.badge}</span>
            </div>

            <h3 className="sticky-case-title">{activeCase.title}</h3>
            <p className="sticky-case-desc">{activeCase.description}</p>

            {/* Services provided to this company */}
            <div className="sticky-services-block">
              <span className="services-lead-label">Servicios a la empresa:</span>
              <ul className="sticky-services-list">
                {activeCase.services.map((srv, sIdx) => (
                  <li key={sIdx} className="sticky-service-chip">
                    <span className="chip-bullet">•</span>
                    <span>{srv}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Button */}
            {activeCase.ctaLink && (
              <div className="sticky-cta-wrapper">
                <a href={activeCase.ctaLink} className="btn btn-sticky-cta">
                  {activeCase.ctaText}
                </a>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  )
}

export default SuccessStories
