import { useEffect, useRef } from 'react'
import './ValueProposition.css'

const ValueProposition = () => {
  const elementsRef = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
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

  const benefits = [
    {
      title: "Especialización Multi-categoría",
      desc: "Experiencia probada en más de 10 verticales comerciales distintas.",
      icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>
    },
    {
      title: "Enfoque Client-Centric",
      desc: "Procesos internos diseñados bajo esquemas de alta flexibilidad, agilidad operativa y un robusto ecosistema de socios.",
      icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
    },
    {
      title: "Estrategias a la Medida",
      desc: "Soluciones diseñadas al 100% de acuerdo a los objetivos e inversiones específicas de cada negocio.",
      icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
    },
    {
      title: "Equipo Híbrido",
      desc: "Combinación balanceada de alta veteranía ejecutiva en la industria con pensamiento joven y ágil de vanguardia.",
      icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"/><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"/></svg>
    },
    {
      title: "Tecnología Propia",
      desc: "Infraestructura orientada a optimizar el ROI, automatizar reportes y refinar modelos predictivos basados en Business Intelligence.",
      icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="12" x="3" y="4" rx="2" ry="2"/><line x1="2" x2="22" y1="20" y2="20"/></svg>
    }
  ]

  return (
    <section className="value-prop section bg-secondary">
      <div className="container vp-layout">
        
        {/* Left Column: Sticky Title & CTA */}
        <div className="vp-left">
          <h2 className="vp-title scroll-animate-left" ref={el => elementsRef.current[0] = el}>
            WHY<br/>CENTRAL
          </h2>
          <p className="vp-description scroll-animate-left delay-100" ref={el => elementsRef.current[1] = el}>
            Aceleramos tu negocio con infraestructura propia, enfoque ágil y un ecosistema de distribución robusto.
          </p>
          
          <div className="vp-cta-card scroll-animate-up delay-200" ref={el => elementsRef.current[2] = el}>
            <h3>¿Listo para transformar tu estrategia?</h3>
            <p>Conecta con nuestros especialistas y diseñemos una solución a la medida de tu marca.</p>
            <a href="#contact" className="btn btn-accent">Contactar a un experto</a>
          </div>
        </div>

        {/* Right Column: Benefits List */}
        <div className="vp-right">
          <div className="vp-list">
            {benefits.map((benefit, index) => (
              <div 
                className="vp-modern-item scroll-animate-up" 
                style={{ transitionDelay: `${(index % 3) * 100}ms` }}
                key={index}
                ref={el => elementsRef.current[index + 3] = el}
              >
                <div className="vp-modern-icon">
                  {benefit.icon}
                </div>
                <div className="vp-modern-content">
                  <h3>{benefit.title}</h3>
                  <p>{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default ValueProposition
