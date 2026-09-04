import { useEffect, useRef } from 'react'
import './Clients.css'

const Clients = () => {
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

  const partners = [
    { 
      name: "FARMACIAS SIMILARES", 
      services: ["MEDIA STRATEGY - OFF", "MEDIA BUYING - OFF", "REPORTING", "DATA ANALYTICS", "SPONSORSHIPS"], 
      size: "large", 
      reverse: false 
    },
    { 
      name: "SIKA", 
      services: ["MEDIA STRATEGY - 360", "MEDIA BUYING - 360", "REPORTING", "DATA ANALYTICS", "SPONSORSHIPS", "SOCIAL MEDIA", "PR", "CREATIVE DESIGN"], 
      size: "large", 
      reverse: true 
    },
    { 
      name: "SENOSIAIN", 
      services: ["MEDIA STRATEGY - 360", "MEDIA BUYING - 360", "REPORTING", "DATA ANALYTICS"], 
      size: "medium", 
      reverse: false 
    },
    { 
      name: "WALDO'S", 
      services: ["MEDIA STRATEGY - 360", "MEDIA BUYING - 360", "REPORTING", "DATA ANALYTICS"], 
      size: "medium", 
      reverse: false 
    },
    { 
      name: "SANSUI", 
      services: ["SOCIAL MEDIA", "DIGITAL MEDIA", "OFF MEDIA", "REPORTING"], 
      size: "large", 
      reverse: false 
    },
    { 
      name: "DONGFENG", 
      services: ["MEDIA STRATEGY - 360", "MEDIA BUYING - 360", "REPORTING", "DATA ANALYTICS", "SPONSORSHIPS"], 
      size: "medium", 
      reverse: false 
    },
    { 
      name: "EL HERALDO", 
      services: ["DATA ANALYTICS", "DIGITAL MEDIA", "OFF MEDIA", "REPORTING"], 
      size: "small", 
      reverse: true 
    },
    { 
      name: "D-UÑAS", 
      services: ["DIGITAL MEDIA", "COMMUNITY MANAGEMENT", "REPORTING"], 
      size: "small", 
      reverse: true 
    }
  ];

  return (
    <section id="clients" className="partners section bg-secondary">
      <div className="container">
        <div className="partners-card">
          <h2 className="partners-title scroll-animate-left" ref={el => elementsRef.current[0] = el}>
            OUR<br/>PARTNERS
          </h2>

          <div className="partners-grid">
            {partners.map((partner, index) => (
              <div 
                className={`partner-node scroll-animate-up delay-${(index % 3) * 100} ${partner.reverse ? 'reverse' : ''}`} 
                key={index}
                ref={el => elementsRef.current[index + 1] = el}
              >
                <div className={`partner-circle-wrapper ${partner.size}`}>
                  <div className="partner-circle-placeholder">
                    <span className="placeholder-text">{partner.name[0]}</span>
                  </div>
                </div>
                <div className="partner-info">
                  <h3>{partner.name}</h3>
                  <ul>
                    {partner.services.map((service, idx) => (
                      <li key={idx}>{service}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Clients
