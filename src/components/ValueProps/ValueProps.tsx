import './ValueProps.css'

const items = [
  {
    title: 'Atendimento Individualizado',
    desc: 'Protocolos criados exclusivamente para você.',
  },
  {
    title: 'Selo ANVISA & FDA',
    desc: 'Produtos certificados de alta pureza e segurança.',
  },
  {
    title: 'Resultados Naturais',
    desc: 'Sem exageros ou mudanças artificiais.',
  },
  {
    title: 'Ambiente Confortável',
    desc: 'Clínica estruturada para seu máximo bem-estar.',
  },
]

export default function ValueProps() {
  return (
    <section className="value-props-section">
      <div className="value-props-container">
        {items.map((item, index) => (
          <div key={index} className="value-prop-item">
            <span className="value-prop-icon">◆</span>
            <div>
              <h4 className="value-prop-title">{item.title}</h4>
              <p className="value-prop-desc">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}