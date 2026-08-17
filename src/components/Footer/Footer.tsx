import './Footer.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <h3 className="footer-logo">Dra. Camila Torres</h3>
            <p className="footer-tagline">
              Medicina Estética & Harmonização Facial Avançada.
            </p>
          </div>

          <div className="footer-links">
            <a href="#hero">Início</a>
            <a href="#procedimentos">Procedimentos</a>
            <a href="#resultados">Resultados</a>
            <a href="#sobre">Sobre</a>
            <a href="#faq">Dúvidas</a>
          </div>
        </div>

        <div className="footer-divider" />

        <div className="footer-bottom">
          <p className="footer-copy">
            © {currentYear} Dra. Camila Torres. Todos os direitos reservados.
          </p>

          <p className="footer-dev">
            Desenvolvido com excelência por{' '}
            <a
              href="https://github.com/marciorjmaia2"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-dev-link"
            >
              Márcio Maia
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}