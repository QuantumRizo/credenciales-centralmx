import './Footer.css'

const Footer = () => {
  return (
    <footer id="contact" className="footer bg-primary">
      <div className="container">
        <div className="footer-content">
          <div className="footer-info">
            <img src="/Logo_CN_2025_Negro.webp" alt="Central MX" className="footer-logo" />
          </div>
          <div className="footer-contact">
            <h3>Contacto</h3>
            <p><strong>Dirección:</strong> Lope de Vega 132-Piso 2, Chapultepec Morales, Polanco V Secc, Miguel Hidalgo, 11550 Ciudad de México, CDMX, Mexico</p>
            <p><strong>Teléfono:</strong> <a href="tel:5552030107">55 5203 0107</a></p>
            <p><strong>Email:</strong> <a href="mailto:hola@centraldenegociosmx.com">hola@centraldenegociosmx.com</a></p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Central MX. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
