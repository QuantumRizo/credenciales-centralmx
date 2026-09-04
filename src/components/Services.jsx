import './Services.css'

const servicesData = [
  {
    id: '01',
    title: 'Estrategia de Medios & Planeación de Negocio',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>
      </svg>
    )
  },
  {
    id: '02',
    title: 'Compra de Medios & Negociación de Alto Valor',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m3 11 18-5v12L3 14v-3z"/>
        <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"/>
      </svg>
    )
  },
  {
    id: '03',
    title: 'Data Analytics & Inteligencia de Negocios',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v18h18"/>
        <path d="m19 9-5 5-4-4-3 3"/>
      </svg>
    )
  },
  {
    id: '04',
    title: 'Estrategia Creativa & Activos de Marca',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9"/>
        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
      </svg>
    )
  },
  {
    id: '05',
    title: 'Ecosistema de Redes Sociales & Engagement',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    )
  },
  {
    id: '06',
    title: 'Relaciones Públicas, Patrocinios & Experiencias',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    )
  }
]

const Services = () => {
  return (
    <section id="services" className="services section">
      <div className="container">
        
        {/* Section Header */}
        <div className="services-header text-center">
          <span className="services-area-badge">CAPACIDADES & SOLUCIONES DE NEGOCIO</span>
          <h2 className="services-main-title">QUÉ HACEMOS</h2>
          <p className="services-header-subtitle">
            Estructura de consultoría, medios y ejecución analítica de alto valor diseñada para acelerar la rentabilidad real de tu negocio.
          </p>
        </div>

        {/* Unified Modern Grid Layout */}
        <div className="services-grid">
          {servicesData.map((service) => (
            <div 
              key={service.id}
              className="service-card"
            >
              <div className="service-card-top">
                <span className="service-number">{service.id}</span>
                <div className="service-corner-icon" aria-hidden="true">
                  {service.icon}
                </div>
              </div>
              <h3 className="service-title">{service.title}</h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Services
