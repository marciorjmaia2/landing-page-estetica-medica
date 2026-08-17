import "./Procedures.css";
import imgHarmonizacao from "../../assets/images/procedures/harmonizacao-facial.jpg";
import imgBotox from "../../assets/images/procedures/toxina-botulinica.jpg";
import imgBioestimuladores from "../../assets/images/procedures/bioestimuladores.jpg";
import imgFiosPdo from "../../assets/images/procedures/fios-pdo.jpg";

const WHATSAPP_URL =
  "https://wa.me/5511999999999?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta%20com%20a%20Dra.%20Camila%20Torres.";

const procedures = [
  {
    title: "Harmonização & Preenchimento",
    sub: "Ácido Hialurônico",
    desc: "Restauração de volume, contornos bem definidos e harmonia sutil para sua face.",
    img: imgHarmonizacao,
    tag: "Mais Procurado",
  },
  {
    title: "Toxina Botulínica",
    sub: "Botox Preventivo e Reparador",
    desc: "Suavização precisa de linhas de expressão preservando sua naturalidade facial.",
    img: imgBotox,
    tag: null,
  },
  {
    title: "Bioestimuladores de Colágeno",
    sub: "Sculptra & Radiesse",
    desc: "Firmeza profunda, melhora na qualidade da pele e rejuvenescimento gradual.",
    img: imgBioestimuladores,
    tag: null,
  },
  {
    title: "Fios de PDO & Sustentação",
    sub: "Lifting Não Cirúrgico",
    desc: "Efeito lifting imediato com estímulo contínuo de sustentação e colágeno.",
    img: imgFiosPdo,
    tag: null,
  },
];

export default function Procedures() {
  return (
    <section id="procedimentos" className="procedures-section">
      <div className="procedures-container">
        <div className="procedures-header">
          <span className="procedures-badge">Nossos Serviços</span>
          <h2 className="procedures-title">Procedimentos Exclusivos</h2>
          <p className="procedures-subtitle">
            Protocolos modernos para rejuvenescimento e contorno facial com
            técnicas de última geração.
          </p>
        </div>

        <div className="procedures-grid">
          {procedures.map((p, index) => (
            <div key={index} className="procedure-card">
              <div className="procedure-image-box">
                <img src={p.img} alt={p.title} className="procedure-image" />
                {p.tag && <span className="procedure-tag">{p.tag}</span>}
              </div>
              <div className="procedure-body">
                <div className="procedure-sub">{p.sub}</div>
                <h3 className="procedure-name">{p.title}</h3>
                <p className="procedure-desc">{p.desc}</p>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="procedure-link"
                >
                  Saber Mais →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
