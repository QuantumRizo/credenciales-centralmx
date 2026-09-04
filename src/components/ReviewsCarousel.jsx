import './ReviewsCarousel.css'

const reviewsData = [
  {
    id: 1,
    partnerName: 'Farmacias Similares',
    partnerLogo: '/partners/farmacias-similares.png',
    author: 'Dirección de Medios & Mercadotecnia',
    company: 'Farmacias Similares',
    rating: 5,
    tag: 'Gobernanza OFF & Mundial 2026',
    quote: 'Central MX ha sido el aliado estratégico clave en la gobernanza y ejecución de nuestros medios OFF. Su capacidad de negociación ante la FIFA para el Mundial 2026 superó todas nuestras expectativas de ROI y presencia de marca.'
  },
  {
    id: 2,
    partnerName: 'Sika',
    partnerLogo: '/partners/sika.png',
    author: 'Gerencia de Marca & Patrocinios',
    company: 'Sika México',
    rating: 5,
    tag: 'Patrocinio Oficial × Club América',
    quote: 'La coordinación estratégica del patrocinio con el Club América y la amplificación 360° posicionó a Sika con un impacto de más de +11M de impresiones. Su visión de negocio y atención senior son incomparables.'
  },
  {
    id: 3,
    partnerName: "Waldo's",
    partnerLogo: '/partners/waldos.png',
    author: 'Dirección de Marketing Digital & Retail',
    company: "Waldo's México",
    rating: 5,
    tag: 'Retail Media & Performance',
    quote: 'El modelo de optimización continua y campañas geolocalizadas generó un incremento medible del +5% en Brand Purchase y tráfico directo a sucursales. Un equipo analítico y resolutivo de primer nivel.'
  },
  {
    id: 4,
    partnerName: 'Dongfeng',
    partnerLogo: '/partners/dongfeng.png',
    author: 'Head of Marketing & Communications',
    company: 'Dongfeng México',
    rating: 5,
    tag: 'Lanzamiento & Cobertura 360°',
    quote: 'La entrada y posicionamiento de nuestra marca en México requería una estrategia de medios agresiva y precisa. Central MX entendió nuestro mercado objetivo y optimizó cada peso invertido.'
  },
  {
    id: 5,
    partnerName: 'Laboratorios Senosiain',
    partnerLogo: '/partners/senosiain logo.webp',
    author: 'Dirección Comercial & Producto',
    company: 'Laboratorios Senosiain',
    rating: 5,
    tag: 'Estrategia Farmacéutica 360°',
    quote: 'Atención personalizada de nivel directivo y cero burocracia. Logran una planeación y ejecución impecable con un control de KPIs transparente en cada campaña médica y masiva.'
  },
  {
    id: 6,
    partnerName: 'Heraldo Media Group',
    partnerLogo: '/partners/heraldo media group logo.webp',
    author: 'Dirección de Alianzas Estratégicas',
    company: 'Heraldo Media Group',
    rating: 5,
    tag: 'Alianzas & Difusión Multiplataforma',
    quote: 'Una relación de valor mutuo y excelencia estratégica. Central MX destaca por su criterio de negocio senior, rigor analítico y rapidez de implementación en proyectos multiplataforma.'
  },
  {
    id: 7,
    partnerName: 'd.uñas',
    partnerLogo: '/partners/d-unas.png',
    author: 'Dirección de Franquicias & Expansión',
    company: 'd.uñas Beauty',
    rating: 5,
    tag: 'Captación Digital & Franquicias',
    quote: 'La estrategia digital y de captación para nuestra red de franquicias elevó nuestro engagement y conversión de manera sostenida. Son verdaderos socios de negocio comprometidos con el resultado.'
  },
  {
    id: 8,
    partnerName: 'Club América',
    partnerLogo: '/partners/club-america.png',
    author: 'Dirección Comercial & Patrocinios',
    company: 'Club América',
    rating: 5,
    tag: 'Coordinación de Patrocinios',
    quote: 'El profesionalismo y coordinación comercial en las activaciones de marca y activaciones en estadio garantizan ejecuciones de alto impacto para las marcas asociadas a la institución.'
  }
]

const ReviewsCarousel = () => {
  // Duplicate array for seamless infinite marquee scroll
  const marqueeReviews = [...reviewsData, ...reviewsData]

  return (
    <section id="reviews" className="reviews-section">
      <div className="container">
        {/* Header */}
        <div className="reviews-header text-center">
          <span className="reviews-eyebrow">TESTIMONIOS & FEEDBACK</span>
          <h2 className="reviews-title">LO QUE DICEN NUESTROS SOCIOS</h2>
          <p className="reviews-subtitle">
            La confianza de marcas líderes respaldada por resultados tangibles, gobernanza y visión de negocio.
          </p>
        </div>
      </div>

      {/* Infinite Marquee Ticker */}
      <div className="reviews-marquee-container">
        <div className="reviews-marquee-track">
          {marqueeReviews.map((review, index) => (
            <div className="review-card" key={index}>
              
              {/* Top Bar */}
              <div className="review-card-top">
                <div className="review-logo-box">
                  <img 
                    src={review.partnerLogo} 
                    alt={review.partnerName} 
                    className="review-logo-img" 
                    loading="lazy"
                  />
                </div>
                <div className="review-meta-right">
                  <span className="review-tag-badge">{review.tag}</span>
                  <div className="review-stars">
                    {'★'.repeat(review.rating)}
                  </div>
                </div>
              </div>

              {/* Quote */}
              <div className="review-quote-wrapper">
                <span className="quote-mark">“</span>
                <p className="review-quote-text">{review.quote}</p>
              </div>

              {/* Author Footer */}
              <div className="review-author-bar">
                <div className="author-avatar-badge">
                  <span>{review.partnerName.charAt(0)}</span>
                </div>
                <div className="author-info">
                  <h4 className="author-name">{review.author}</h4>
                  <span className="author-company">{review.company}</span>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ReviewsCarousel
