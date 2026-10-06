import { useEffect, useMemo, useState } from 'react'
import { DEV_CARDS, GROUPS } from './devData'

type Stage = 'intro' | 'archive' | 'criterion' | 'reveal' | 'gap' | 'prediction' | 'summary'

type Placement = Record<string, string>

const STORAGE_KEY = 'materia-mundi:h6:vertical-slice:v0.1'

type SavedState = {
  stage: Stage
  placements: Placement
  criterion: string
  criterionNote: string
  revealed: boolean
  gapNote: string
  prediction: string
}

const initialState: SavedState = {
  stage: 'intro',
  placements: Object.fromEntries(DEV_CARDS.map(card => [card.id, 'Sin clasificar'])),
  criterion: '',
  criterionNote: '',
  revealed: false,
  gapNote: '',
  prediction: '',
}

function loadState(): SavedState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? { ...initialState, ...JSON.parse(raw) } : initialState
  } catch {
    return initialState
  }
}

export default function App() {
  const [state, setState] = useState<SavedState>(loadState)
  const [announcement, setAnnouncement] = useState('')

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
  }, [state])

  const grouped = useMemo(() => {
    return GROUPS.map(group => ({
      group,
      cards: DEV_CARDS.filter(card => state.placements[card.id] === group),
    }))
  }, [state.placements])

  const moveCard = (cardId: string, group: string) => {
    const card = DEV_CARDS.find(item => item.id === cardId)
    setState(s => ({ ...s, placements: { ...s.placements, [cardId]: group } }))
    setAnnouncement(`${card?.name ?? 'Tarjeta'} movida a ${group}.`)
  }

  const reset = () => {
    if (confirm('Comenzar de nuevo eliminará esta sesión DEV guardada en este navegador.')) {
      localStorage.removeItem(STORAGE_KEY)
      setState(initialState)
      setAnnouncement('Sesión reiniciada.')
    }
  }

  const progress: Record<Stage, number> = {
    intro: 0, archive: 1, criterion: 2, reveal: 3, gap: 4, prediction: 5, summary: 6,
  }

  return (
    <main className="shell">
      <p className="dev-banner">DEV DATA · NO PARA AULA</p>
      <header className="topbar">
        <div>
          <p className="eyebrow">CIFI 3065 Virtual · Materia Mundi</p>
          <h1>H6 · Ordenar el archivo</h1>
        </div>
        <div className="progress" aria-label={`Progreso ${progress[state.stage]} de 6`}>
          {progress[state.stage]}/6
        </div>
      </header>

      <div className="sr-only" aria-live="polite">{announcement}</div>

      {state.stage === 'intro' && (
        <section className="panel hero">
          <p className="eyebrow">Vertical slice técnico</p>
          <h2>Detectives de la periodicidad</h2>
          <p>
            Has recibido un archivo químico incompleto. Organízalo de manera que conserve
            relaciones útiles y te permita sospechar qué podría faltar.
          </p>
          <ul>
            <li>Puedes cambiar de criterio.</li>
            <li>Puedes dejar tarjetas sin clasificar.</li>
            <li>No se evalúa rapidez ni existe una única organización inicial.</li>
          </ul>
          <button onClick={() => setState(s => ({ ...s, stage: 'archive' }))}>
            Comenzar investigación
          </button>
        </section>
      )}

      {state.stage === 'archive' && (
        <section className="panel">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Etapa 1</p>
              <h2>Archivo inicial</h2>
            </div>
            <button className="secondary" onClick={reset}>Reiniciar</button>
          </div>
          <p>Clasifica las tarjetas. El selector “Mover a…” es la operación accesible principal del MVP.</p>
          <div className="workspace">
            {grouped.map(({ group, cards }) => (
              <section className="group" key={group}>
                <h3>{group}</h3>
                {cards.length === 0 && <p className="empty">Sin tarjetas.</p>}
                <div className="cards">
                  {cards.map(card => (
                    <article className="card" key={card.id}>
                      <div className="symbol">{card.symbol}</div>
                      <h4>{card.name}</h4>
                      <p>Masa aprox.: {card.mass}</p>
                      <p>{card.clue1}</p>
                      {state.revealed && <p className="reveal">{card.clue2}</p>}
                      <label>
                        Mover a…
                        <select
                          value={state.placements[card.id]}
                          onChange={e => moveCard(card.id, e.target.value)}
                        >
                          {GROUPS.map(option => <option key={option}>{option}</option>)}
                        </select>
                      </label>
                    </article>
                  ))}
                </div>
              </section>
            ))}
          </div>
          <button onClick={() => setState(s => ({ ...s, stage: 'criterion' }))}>
            Declarar mi criterio
          </button>
        </section>
      )}

      {state.stage === 'criterion' && (
        <section className="panel narrow">
          <p className="eyebrow">Etapa 2</p>
          <h2>¿Qué estás intentando conservar?</h2>
          <label>
            Criterio principal
            <select
              value={state.criterion}
              onChange={e => setState(s => ({ ...s, criterion: e.target.value }))}
            >
              <option value="">Selecciona…</option>
              <option value="masa">Masa</option>
              <option value="semejanza">Semejanza química</option>
              <option value="formula">Fórmula</option>
              <option value="propiedad">Propiedad</option>
              <option value="otro">Otro</option>
            </select>
          </label>
          <label>
            Explica brevemente tu criterio
            <textarea
              value={state.criterionNote}
              onChange={e => setState(s => ({ ...s, criterionNote: e.target.value }))}
              rows={4}
            />
          </label>
          <div className="actions">
            <button className="secondary" onClick={() => setState(s => ({ ...s, stage: 'archive' }))}>Volver</button>
            <button
              disabled={!state.criterion}
              onClick={() => setState(s => ({ ...s, stage: 'reveal', revealed: true }))}
            >
              Registrar criterio y revelar evidencia
            </button>
          </div>
        </section>
      )}

      {state.stage === 'reveal' && (
        <section className="panel">
          <p className="eyebrow">Etapa 3</p>
          <h2>Nueva evidencia</h2>
          <p>Las mismas tarjetas han ganado una segunda pista. Tu organización no ha sido corregida.</p>
          <div className="mini-grid">
            {DEV_CARDS.map(card => (
              <article className="mini-card" key={card.id}>
                <strong>{card.symbol} · {card.name}</strong>
                <span>{card.clue2}</span>
              </article>
            ))}
          </div>
          <p className="question">¿Mantendrías tu organización?</p>
          <button onClick={() => setState(s => ({ ...s, stage: 'archive' }))}>
            Quiero revisarla
          </button>
          <button className="secondary" onClick={() => setState(s => ({ ...s, stage: 'gap' }))}>
            Mantener por ahora y buscar ausencias
          </button>
        </section>
      )}

      {state.stage === 'gap' && (
        <section className="panel narrow">
          <p className="eyebrow">Etapa 4</p>
          <h2>¿Hay un espacio significativo?</h2>
          <p>El sistema no te dirá dónde falta algo. Declara una ausencia sólo si tu representación te da razones para sospecharla.</p>
          <label>
            Describe el hueco que propones y por qué importa
            <textarea
              value={state.gapNote}
              onChange={e => setState(s => ({ ...s, gapNote: e.target.value }))}
              rows={5}
            />
          </label>
          <button
            disabled={!state.gapNote.trim()}
            onClick={() => setState(s => ({ ...s, stage: 'prediction' }))}
          >
            Registrar hueco
          </button>
        </section>
      )}

      {state.stage === 'prediction' && (
        <section className="panel narrow">
          <p className="eyebrow">Etapa 5</p>
          <h2>Formula una predicción</h2>
          <p>Antes de cualquier contraste histórico, deja constancia de tu inferencia.</p>
          <label>
            Predicción y justificación
            <textarea
              value={state.prediction}
              onChange={e => setState(s => ({ ...s, prediction: e.target.value }))}
              rows={7}
              placeholder="¿Qué esperas encontrar y qué evidencia sostiene esa idea?"
            />
          </label>
          <button
            disabled={!state.prediction.trim()}
            onClick={() => setState(s => ({ ...s, stage: 'summary' }))}
          >
            Guardar predicción
          </button>
        </section>
      )}

      {state.stage === 'summary' && (
        <section className="panel">
          <p className="eyebrow">Etapa 6 · corte técnico</p>
          <h2>Tu recorrido</h2>
          <dl className="summary">
            <div><dt>Criterio inicial</dt><dd>{state.criterion || 'No registrado'}</dd></div>
            <div><dt>Explicación</dt><dd>{state.criterionNote || 'Sin nota'}</dd></div>
            <div><dt>Hueco declarado</dt><dd>{state.gapNote}</dd></div>
            <div><dt>Predicción</dt><dd>{state.prediction}</dd></div>
          </dl>
          <h3>Organización final DEV</h3>
          <ul>
            {grouped.map(({ group, cards }) => (
              <li key={group}><strong>{group}:</strong> {cards.map(card => card.symbol).join(', ') || '—'}</li>
            ))}
          </ul>
          <p className="notice">
            El contraste histórico real, REC6, Mazo B y corpus validado se integrarán después de aprobar este vertical slice.
          </p>
          <button className="secondary" onClick={() => setState(s => ({ ...s, stage: 'archive' }))}>
            Volver al archivo
          </button>
        </section>
      )}
    </main>
  )
}
