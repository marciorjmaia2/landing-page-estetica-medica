import { useState } from 'react'
import './BeforeAfter.css'

// 1. Importação das imagens locais
import caso1Antes from '../../assets/images/before-after/caso-1-antes.jpg'
import caso1Depois from '../../assets/images/before-after/caso-1-depois.jpg'
import caso2Antes from '../../assets/images/before-after/caso-2-antes.jpg'
import caso2Depois from '../../assets/images/before-after/caso-2-depois.jpg'
import caso3Antes from '../../assets/images/before-after/caso-3-antes.jpg'
import caso3Depois from '../../assets/images/before-after/caso-3-depois.jpg'

// 2. Uso das variáveis importadas na lista
const testimonials = [
  {
    before: caso1Antes,
    after: caso1Depois,
    name: 'Ana Paula M.',
    quote: 'Resultado absolutamente natural. Minha autoestima transformou completamente.',
    tag: 'Preenchimento Labial · 2 semanas após',
  },
  {
    before: caso2Antes,
    after: caso2Depois,
    name: 'Fernanda C.',
    quote: 'A Dra. Camila teve sensibilidade única para equilibrar minhas feições com elegância.',
    tag: 'Harmonização Facial · 1 mês após',
  },
  {
    before: caso3Antes,
    after: caso3Depois,
    name: 'Juliana R.',
    quote: 'Clínica impecável, atendimento exclusivo e resultado acima de qualquer expectativa.',
    tag: 'Botox & Bioestimulador · 6 semanas após',
  },
]

export default function BeforeAfter() {
  const [sliderValues, setSliderValues] = useState<number[]>([50, 50, 50])

  const updateSlider = (index: number, val: number) => {
    setSliderValues(prev => prev.map((v, i) => (i === index ? val : v)))
  }

  return (
    <section id="resultados" className="before-after-section">
      <div className="before-after-container">
        <div className="before-after-header">
          <span className="before-after-badge">Galeria de Resultados</span>
          <h2 className="before-after-title">Transformações Reais</h2>
        </div>

        <div className="before-after-grid">
          {testimonials.map((t, index) => (
            <div key={index} className="before-after-card">
              <div className="slider-container">
                {/* Imagem Depois */}
                <img src={t.after} alt="Depois" className="slider-image-after" />

                {/* Imagem Antes Recortada */}
                <div
                  className="slider-image-before-wrapper"
                  style={{ clipPath: `inset(0 ${100 - sliderValues[index]}% 0 0)` }}
                >
                  <img src={t.before} alt="Antes" className="slider-image-before" />
                </div>

                {/* Linha Divisória e Alça */}
                <div
                  className="slider-divider-line"
                  style={{ left: `${sliderValues[index]}%` }}
                />
                <div
                  className="slider-handle-button"
                  style={{ left: `${sliderValues[index]}%` }}
                >
                  ⟷
                </div>

                <span className="slider-label-before">ANTES</span>
                <span className="slider-label-after">DEPOIS</span>

                <input
                  type="range"
                  min={0}
                  max={100}
                  value={sliderValues[index]}
                  onChange={(e) => updateSlider(index, Number(e.target.value))}
                  className="slider-range-input"
                />
              </div>

              <div className="before-after-info">
                <div className="before-after-tag">{t.tag}</div>
                <p className="before-after-quote">"{t.quote}"</p>
                <div className="before-after-name">— {t.name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}