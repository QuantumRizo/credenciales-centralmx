import './PartnersCarousel.css'

const partnerLogos = [
  { name: 'Farmacias Similares', src: '/partners/farmacias-similares.png', sizeClass: 'logo-simi' },
  { name: 'Sika', src: '/partners/sika.png', sizeClass: 'logo-sika' },
  { name: "Waldo's", src: '/partners/waldos.png' },
  { name: 'Dongfeng', src: '/partners/dongfeng.png' },
  { name: 'Sansui', src: '/partners/sansui.png', sizeClass: 'logo-xlarge' },
  { name: 'Senosiain', src: '/partners/senosiain logo.webp', sizeClass: 'logo-large-extra' },
  { name: 'Heraldo Media Group', src: '/partners/heraldo media group logo.webp', sizeClass: 'logo-xlarge' },
  { name: 'D Uñas', src: '/partners/d-unas.png' },
  { name: 'AAM', src: '/partners/aam.png' },
  { name: 'AVE', src: '/partners/ave.png' },
  { name: 'CIM', src: '/partners/cim.png' },
  { name: 'IAB México', src: '/partners/iab-mexico.png' },
  { name: 'Club América', src: '/partners/club-america.png' },
  { name: 'Televisa', src: '/partners/televisa.webp' },
  { name: 'TV Azteca', src: '/partners/tv-azteca.png' }
]

const PartnersCarousel = () => {
  // Duplicate array for seamless infinite marquee scroll
  const marqueeLogos = [...partnerLogos, ...partnerLogos]

  return (
    <section className="partners-section">
      <div className="container">
        <div className="partners-header text-center">
          <span className="partners-subtitle">TRUSTED BY INDUSTRY LEADERS</span>
          <h3 className="partners-title">MARCAS & SOCIOS ESTRATÉGICOS</h3>
        </div>
      </div>

      <div className="marquee-container">
        <div className="marquee-track">
          {marqueeLogos.map((partner, index) => (
            <div className="partner-logo-card" key={index}>
              <img 
                src={partner.src} 
                alt={partner.name} 
                className={`partner-logo-img ${partner.sizeClass || ''}`} 
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PartnersCarousel
