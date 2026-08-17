import './About.css'
import fotoDraCamila from '../../assets/images/about/dra-camila.jpg'

const certs = [
  'Pós-Graduação em Medicina Estética — SBME',
  'Curso Internacional em Harmonização Facial — Harvard Medical School',
  'Certificação em Toxina Botulínica — Allergan Institute',
  'Fellowship em Bioestimuladores de Colágeno — Paris, França',
  'Membro da Sociedade Brasileira de Medicina Estética',
]

export default function About() {
  return (
    <section id="sobre" className="about-section">
      <div className="about-container">
        {/* Foto com moldura dourada */}
        <div className="about-photo-wrapper">
          <div className="about-photo-frame" />
          <div className="about-photo-container">
            <img
              src={fotoDraCamila} // <-- Variável importada aqui
              alt="Dra. Camila Torres em jaleco profissional"
              className="about-photo"
            />
          </div>
        </div>

        {/* Informações e Credenciais */}
        <div className="about-content">
          <span className="about-badge">Conheça a Especialista</span>
          <h2 className="about-title">Dra. Camila Torres</h2>

          <div className="about-tags">
            <span className="about-tag">CRM/RJ 123456</span>
            <span className="about-tag">Especialista Registrada</span>
          </div>

          <p className="about-text">
            Médica especializada em medicina estética e harmonização facial, com mais de 8 anos de experiência e formação em instituições de referência internacional. Sua abordagem é centrada na valorização dos traços naturais de cada paciente, buscando sempre resultados harmoniosos, sutis e seguros.
          </p>

          <ul className="about-certs-list">
            {certs.map((cert, index) => (
              <li key={index} className="about-cert-item">
                <div className="about-cert-bullet" />
                <span className="about-cert-text">{cert}</span>
              </li>
            ))}
          </ul>

          <blockquote className="about-quote">
            "A verdadeira beleza nasce do equilíbrio — minha missão é revelar a elegância que já existe em cada rosto."
          </blockquote>

          <div className="about-signature">Dra. Camila Torres</div>
        </div>
      </div>
    </section>
  )
}