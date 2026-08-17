import './Hero.css'
import heroImage from '../../assets/images/hero/hero-dra-camila.jpg' // <-- Importação da imagem local

const WHATSAPP_URL = 'https://wa.me/5511999999999?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta%20com%20a%20Dra.%20Camila%20Torres.'

function StarIcon() {
  return (
    <svg width={16} height={16} viewBox="0 0 24 24" fill="#D4AF37">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
    </svg>
  )
}

export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      {/* Coluna de Conteúdo */}
      <div className="hero-content">
        <div className="hero-gold-line" />
        <span className="hero-badge">
          ★ Especialista em Rejuvenescimento Natural
        </span>
        <h1 className="hero-title">
          Realce a sua <br />
          <em>beleza natural</em> <br />
          com harmonia e elegância
        </h1>
        <p className="hero-description">
          Procedimentos personalizados de harmonização facial e estética avançada que valorizam seus traços com total segurança e sutileza.
        </p>

        <div className="hero-cta-group">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hero-btn-primary"
          >
            Agendar Avaliação Personalizada
          </a>
          <a href="#resultados" className="hero-link-results">
            <span /> Ver Resultados
          </a>
        </div>

        <div className="hero-trust-bar">
          <div className="hero-stars">
            {[...Array(5)].map((_, i) => (
              <StarIcon key={i} />
            ))}
          </div>
          <span className="hero-trust-text">
            <strong>4.9</strong> · Mais de 1.500 pacientes satisfeitas
          </span>
        </div>
      </div>

      {/* Coluna da Imagem */}
      <div className="hero-image-wrapper">
        <img
          src={heroImage}
          alt="Dra Camila Torres Estética"
          className="hero-image"
        />
        <div className="hero-image-gradient" />
        
        <div className="hero-credential-card">
          <div className="hero-card-tag">Certificação Internacional</div>
          <div className="hero-card-title">Harvard Medical School Training</div>
          <div className="hero-stars" style={{ marginTop: '8px' }}>
            {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
          </div>
        </div>
      </div>
    </section>
  )
}