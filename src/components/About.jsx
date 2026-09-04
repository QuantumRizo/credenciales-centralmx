import { useEffect, useRef } from 'react'
import './About.css'

const About = () => {
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
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    )

    elementsRef.current.forEach((el) => {
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const leadershipTeam = [
    {
      name: 'Fanny García',
      role: 'CEO',
      area: 'Leadership & Business Strategy',
      isCeo: true
    },
    {
      name: 'Patricia Martínez',
      alias: 'Paty',
      role: 'Head of Innovative Media Solutions',
      area: 'Innovative Media'
    },
    {
      name: 'Juan Pablo Millán',
      alias: 'JP',
      role: 'Head of Strategy & Operations',
      area: 'Commercial'
    },
    {
      name: 'Carolina Anaya',
      alias: 'Caro',
      role: 'Head of Digital & Creative Media',
      area: 'Digital & Creative'
    }
  ]

  return (
    <section id="about" className="about section">
      <div className="container">
        
        {/* Core Team Card */}
        <div 
          className="about-card about-layout scroll-animate-up"
          ref={el => elementsRef.current[0] = el}
        >
          
          {/* Left Column: Text & Stats */}
          <div className="about-left">
            <h2 className="about-title">
              LEADERSHIP<br/>TEAM
            </h2>
            <p className="about-description">
              Un equipo directivo senior con décadas de experiencia liderando la estrategia de medios, analítica y visión creativa para marcas líderes.
            </p>
            <div className="about-stats">
              <div className="stat-item">
                <div className="stat-icon">
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                </div>
                <div>
                  <h4>+35 años</h4>
                  <p>Experiencia acumulada en Medios</p>
                </div>
              </div>
              <div className="stat-item">
                <div className="stat-icon">
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18.178 8c5.096 0 5.096 8 0 8-5.095 0-7.133-8-12.739-8-4.585 0-4.584 8 0 8 5.606 0 7.644-8 12.74-8z"></path></svg>
                </div>
                <div>
                  <h4>+8 años</h4>
                  <p>Construyendo soluciones boutique</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Leadership Heads */}
          <div className="leadership-grid">
            {leadershipTeam.map((leader, index) => (
              <div 
                className={`leader-card ${leader.isCeo ? 'ceo-card' : ''} scroll-animate-up delay-${(index + 1) * 100}`} 
                key={index}
                ref={el => elementsRef.current[1 + index] = el}
              >
                <div className="leader-photo-wrapper">
                  <div className="member-photo-placeholder"></div>
                </div>
                <div className="leader-info">
                  <span className="leader-area-tag">{leader.area}</span>
                  <h3>{leader.name}</h3>
                  <p className="leader-role">{leader.role}</p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  )
}

export default About
