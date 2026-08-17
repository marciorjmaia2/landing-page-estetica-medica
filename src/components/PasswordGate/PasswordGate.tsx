import { useState, type FormEvent } from 'react'
import './PasswordGate.css'

interface PasswordGateProps {
  onUnlock: () => void
}

// Defina aqui a senha que você passará para os clientes/recrutadores
const SENHA_ACESSO = 'marciomaia'

export default function PasswordGate({ onUnlock }: PasswordGateProps) {
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (password === SENHA_ACESSO) {
      sessionStorage.setItem('portfolio_auth', 'true')
      onUnlock()
    } else {
      setError(true)
      setPassword('')
    }
  }

  return (
    <div className="gate-overlay">
      <div className="gate-card">
        <div className="gate-badge">Acesso Restrito · Portfólio</div>
        <h2 className="gate-title">Área de Demonstração</h2>
        <p className="gate-subtitle">
          Projeto exclusivo. Digite a senha fornecida para visualizar a landing page.
        </p>

        <form onSubmit={handleSubmit} className="gate-form">
          <input
            type="password"
            placeholder="Digite a senha de acesso"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value)
              if (error) setError(false)
            }}
            className={`gate-input ${error ? 'gate-input-error' : ''}`}
            autoFocus
          />

          {error && <span className="gate-error-msg">Senha incorreta. Verifique e tente novamente.</span>}

          <button type="submit" className="gate-button">
            Acessar Projeto
          </button>
        </form>
      </div>
    </div>
  )
}