import { useState } from 'react'
import './Faq.css'

const faqs = [
  {
    q: 'O procedimento de harmonização facial dói?',
    a: 'A maioria dos procedimentos é realizada com anestesia tópica ou bloqueio local, tornando a experiência bastante confortável. Pode haver leve sensação momentânea, mas o protocolo de anestesia é extremamente cuidadoso para garantir o seu bem-estar.',
  },
  {
    q: 'Quanto tempo duram os resultados?',
    a: 'O ácido hialurônico dura de 12 a 18 meses, a toxina botulínica de 4 a 6 meses e os bioestimuladores de colágeno até 2 a 3 anos, variando conforme o metabolismo individual e os cuidados diários.',
  },
  {
    q: 'Qual é o tempo de recuperação?',
    a: 'A recuperação é muito tranquila. Pode ocorrer leve inchaço passageiro por alguns dias, mas a maioria dos pacientes retoma a rotina no mesmo dia com orientações simples de cuidados.',
  },
  {
    q: 'Como funciona a primeira consulta de avaliação?',
    a: 'A consulta inicial dura cerca de 60 minutos. A Dra. Camila faz uma análise facial detalhada, compreende suas expectativas e entrega um plano 100% individualizado, sem compromisso de realização imediata.',
  },
]

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className={`faq-chevron ${open ? 'open' : ''}`}
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  )
}

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="duvidas" className="faq-section">
      <div className="faq-container">
        <div className="faq-header">
          <span className="faq-badge">Dúvidas Frequentes</span>
          <h2 className="faq-title">Perguntas & Respostas</h2>
        </div>

        <div className="faq-list">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div key={index} className={`faq-item ${isOpen ? 'open' : ''}`}>
                <button
                  type="button"
                  className="faq-button"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="faq-question">{faq.q}</span>
                  <span className="faq-icon">
                    <ChevronIcon open={isOpen} />
                  </span>
                </button>

                <div
                  className="faq-content"
                  style={{ maxHeight: isOpen ? '300px' : '0px' }}
                >
                  <p className="faq-answer">{faq.a}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}