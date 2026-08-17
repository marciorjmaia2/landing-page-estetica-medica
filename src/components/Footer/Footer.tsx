import './Footer.css'

const WHATSAPP_URL = 'https://wa.me/5511999999999?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta%20com%20a%20Dra.%20Camila%20Torres.'

function WhatsAppIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Brand */}
          <div>
            <div className="footer-brand-title">Dra. Camila Torres</div>
            <div className="footer-brand-sub">Estética & Harmonização</div>
            <p className="footer-brand-desc">Medicina estética avançada com foco em resultados naturais, seguros e personalizados.</p>
          </div>

          {/* Contact */}
          <div>
            <span className="footer-col-title">Contato</span>
            <div className="footer-text">
              <div className="footer-label">ENDEREÇO</div>
              Av. Atlântica, 1234 — Sala 501<br />
              Copacabana, Rio de Janeiro — RJ
            </div>
            <div className="footer-text">
              <div className="footer-label">HORÁRIO</div>
              Seg–Sex: 9h às 18h<br />
              Sáb: 9h às 13h
            </div>
          </div>

          {/* Social */}
          <div>
            <span className="footer-col-title">Redes Sociais</span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <a href="#" className="footer-link">⊕ @dracamilatorres</a>
              <a href={WHATSAPP_URL} className="footer-link">
                <WhatsAppIcon size={14} /> (21) 99999-9999
              </a>
            </div>
          </div>

          {/* Maps */}
          <div>
            <span className="footer-col-title">Localização</span>
            <div className="footer-maps-placeholder">Google Maps</div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copyright">
            © 2025 Dra. Camila Torres. Todos os direitos reservados.
          </div>
          <div className="footer-disclaimer">
            <em>Aviso: Resultados individuais podem variar. As imagens exibidas são ilustrativas. Procedimentos realizados por profissional habilitado. CRM/RJ 123456.</em>
          </div>
        </div>
      </div>
    </footer>
  )
}