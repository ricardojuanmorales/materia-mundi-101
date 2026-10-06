import { useEffect, useMemo, useState } from 'react'
import { DECK_A, DECK_B, HISTORICAL_CARDS, HISTORICAL_CONTRAST, SOURCE_NOTE } from './historicalData'

type Stage =
  | 'intro'
  | 'archive'
  | 'criterion'
  | 'reveal'
  | 'reorganize'
  | 'deckB'
  | 'gap'
  | 'prediction'
  | 'contrast'
  | 'reflection'
  | 'summary'

type Placement = Record<string, string>

type Prediction = {
  mass: string
  family: string
  formula: string
  property: string
  justification: string
}

type Reflection = {
  changedBy: string
  shows: string
  hides: string
  limit: string
}

type SavedState = {
  stage: Stage
  placements: Placement
  groups: string[]
  criterion: string
  criterionNote: string
  revealed: boolean
  deckBLoaded: boolean
  series: string[]
  gapFrom: string
  gapTo: string
  gapNote: string
  prediction: Prediction
  reflection: Reflection
}

const STORAGE_KEY = 'materia-mundi:h6:pedagogical-mvp:v0.2'

const blankPrediction: Prediction = { mass:'', family:'', formula:'', property:'', justification:'' }
const blankReflection: Reflection = { changedBy:'', shows:'', hides:'', limit:'' }

const initialPlacements: Placement = Object.fromEntries(DECK_A.map(card => [card.id, 'Sin clasificar']))

const initialState: SavedState = {
  stage:'intro',
  placements:initialPlacements,
  groups:['Sin clasificar', 'Grupo A', 'Grupo B', 'Grupo C'],
  criterion:'',
  criterionNote:'',
  revealed:false,
  deckBLoaded:false,
  series:[],
  gapFrom:'',
  gapTo:'',
  gapNote:'',
  prediction:blankPrediction,
  reflection:blankReflection,
}

function loadState(): SavedState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? { ...initialState, ...JSON.parse(raw) } : initialState
  } catch {
    return initialState
  }
}

function downloadText(filename: string, text: string) {
  const blob = new Blob([text], { type: 'text/markdown;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = filename
  a.click()
  URL.revokeObjectURL(url)
}

export default function App() {
  const [state, setState] = useState<SavedState>(loadState)
  const [announcement, setAnnouncement] = useState('')
  const [newGroup, setNewGroup] = useState('')

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
  }, [state])

  const visibleCards = useMemo(
    () => HISTORICAL_CARDS.filter(card => card.deck === 'A' || state.deckBLoaded),
    [state.deckBLoaded],
  )

  const grouped = useMemo(() => state.groups.map(group => ({
    group,
    cards: visibleCards.filter(card => state.placements[card.id] === group),
  })), [state.groups, state.placements, visibleCards])

  const progress: Record<Stage, number> = {
    intro:0, archive:1, criterion:2, reveal:3, reorganize:4, deckB:5,
    gap:6, prediction:7, contrast:8, reflection:9, summary:10,
  }

  const moveCard = (cardId: string, group: string) => {
    const card = HISTORICAL_CARDS.find(item => item.id === cardId)
    setState(s => ({ ...s, placements:{ ...s.placements, [cardId]:group } }))
    setAnnouncement(`${card?.name ?? 'Tarjeta'} movida a ${group}.`)
  }

  const createGroup = () => {
    const label = newGroup.trim()
    if (!label || state.groups.includes(label)) return
    setState(s => ({ ...s, groups:[...s.groups, label] }))
    setNewGroup('')
    setAnnouncement(`Grupo ${label} creado.`)
  }

  const toggleSeries = (cardId: string) => {
    setState(s => ({
      ...s,
      series: s.series.includes(cardId) ? s.series.filter(id => id !== cardId) : [...s.series, cardId],
    }))
  }

  const moveSeries = (index: number, delta: number) => {
    setState(s => {
      const next = [...s.series]
      const target = index + delta
      if (target < 0 || target >= next.length) return s
      ;[next[index], next[target]] = [next[target], next[index]]
      return { ...s, series:next }
    })
  }

  const loadDeckB = () => {
    const added = Object.fromEntries(DECK_B.map(card => [card.id, 'Sin clasificar']))
    setState(s => ({
      ...s,
      deckBLoaded:true,
      placements:{ ...s.placements, ...added },
      stage:'reorganize',
    }))
    setAnnouncement(`${DECK_B.length} registros nuevos incorporados.`)
  }

  const reset = () => {
    if (confirm('Comenzar de nuevo eliminará esta sesión candidata guardada en este navegador.')) {
      localStorage.removeItem(STORAGE_KEY)
      setState(initialState)
      setAnnouncement('Sesión reiniciada.')
    }
  }

  const summaryText = `# Tu recorrido H6 — MVP candidato

## Criterio inicial
${state.criterion}
${state.criterionNote}

## Serie propuesta
${state.series.join(' → ') || 'No se construyó una serie.'}

## Hueco declarado
Entre: ${state.gapFrom || '—'} y ${state.gapTo || '—'}
${state.gapNote}

## Predicción
Masa: ${state.prediction.mass || '—'}
Familia: ${state.prediction.family || '—'}
Fórmula: ${state.prediction.formula || '—'}
Propiedad: ${state.prediction.property || '—'}
Justificación: ${state.prediction.justification}

## Reflexión
Evidencia que cambió mi organización: ${state.reflection.changedBy}
Qué muestra mi representación: ${state.reflection.shows}
Qué oculta o simplifica: ${state.reflection.hides}
Qué todavía no explica: ${state.reflection.limit}

## Nota
MVP PEDAGÓGICO CANDIDATO · NO PARA AULA
`

  return (
    <main className="shell">
      <p className="dev-banner">MVP PEDAGÓGICO CANDIDATO · NO PARA AULA</p>
      <header className="topbar">
        <div>
          <p className="eyebrow">CIFI 3065 Virtual · Materia Mundi</p>
          <h1>H6 · Ordenar el archivo</h1>
        </div>
        <div className="progress" aria-label={`Progreso ${progress[state.stage]} de 10`}>
          {progress[state.stage]}/10
        </div>
      </header>

      <div className="sr-only" aria-live="polite">{announcement}</div>

      {state.stage === 'intro' && (
        <section className="panel hero">
          <p className="eyebrow">Detectives de la periodicidad</p>
          <h2>Un archivo incompleto. Una organización todavía por construir.</h2>
          <p>Trabajarás con un corpus histórico candidato inspirado en la tabla de 1871. Tu tarea no es reproducir la tabla moderna, sino construir una clasificación que haga visibles relaciones, tensiones y posibles ausencias.</p>
          <ul>
            <li>Puedes cambiar de criterio.</li>
            <li>Puedes crear tus propios grupos.</li>
            <li>Puedes construir una serie propuesta.</li>
            <li>No existe una única organización inicial.</li>
          </ul>
          <button onClick={() => setState(s => ({ ...s, stage:'archive' }))}>Comenzar investigación</button>
        </section>
      )}

      {(state.stage === 'archive' || state.stage === 'reorganize') && (
        <section className="panel">
          <div className="section-heading">
            <div>
              <p className="eyebrow">{state.deckBLoaded ? 'Archivo expandido' : 'Mazo A · descubrimiento'}</p>
              <h2>{state.deckBLoaded ? 'Reorganiza el archivo' : 'Construye una primera organización'}</h2>
            </div>
            <button className="secondary" onClick={reset}>Reiniciar</button>
          </div>

          <div className="toolbar">
            <label>
              Nuevo grupo
              <input value={newGroup} onChange={e => setNewGroup(e.target.value)} placeholder="Nombre del grupo" />
            </label>
            <button className="secondary" onClick={createGroup}>Crear grupo</button>
          </div>

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
                      <p><strong>Masa histórica aprox.:</strong> {card.mass}</p>
                      <p><strong>Patrón:</strong> {card.pattern}</p>
                      {state.revealed && <p className="reveal">{card.reveal}</p>}
                      <label>
                        Mover a…
                        <select value={state.placements[card.id]} onChange={e => moveCard(card.id, e.target.value)}>
                          {state.groups.map(option => <option key={option}>{option}</option>)}
                        </select>
                      </label>
                      <button className="tertiary" onClick={() => toggleSeries(card.id)}>
                        {state.series.includes(card.id) ? 'Quitar de serie' : 'Añadir a serie'}
                      </button>
                      <details>
                        <summary>Procedencia</summary>
                        <p>{card.provenance}</p>
                      </details>
                    </article>
                  ))}
                </div>
              </section>
            ))}
          </div>

          <section className="series-panel">
            <h3>Serie propuesta</h3>
            {state.series.length === 0 && <p className="empty">Todavía no has construido una serie.</p>}
            <ol className="series-list">
              {state.series.map((id, index) => {
                const card = HISTORICAL_CARDS.find(c => c.id === id)!
                return (
                  <li key={id}>
                    <span><strong>{card.symbol}</strong> · {card.mass}</span>
                    <span className="series-actions">
                      <button className="tertiary" disabled={index === 0} onClick={() => moveSeries(index,-1)}>↑</button>
                      <button className="tertiary" disabled={index === state.series.length-1} onClick={() => moveSeries(index,1)}>↓</button>
                    </span>
                  </li>
                )
              })}
            </ol>
          </section>

          {!state.revealed && (
            <button onClick={() => setState(s => ({ ...s, stage:'criterion' }))}>Declarar mi criterio</button>
          )}
          {state.revealed && !state.deckBLoaded && (
            <button onClick={() => setState(s => ({ ...s, stage:'deckB' }))}>Continuar: poner a prueba mi sistema</button>
          )}
          {state.deckBLoaded && (
            <button onClick={() => setState(s => ({ ...s, stage:'gap' }))}>Buscar una ausencia significativa</button>
          )}
        </section>
      )}

      {state.stage === 'criterion' && (
        <section className="panel narrow">
          <p className="eyebrow">Criterio</p>
          <h2>¿Qué estás intentando conservar?</h2>
          <label>
            Criterio principal
            <select value={state.criterion} onChange={e => setState(s => ({ ...s, criterion:e.target.value }))}>
              <option value="">Selecciona…</option>
              <option value="masa">Masa</option>
              <option value="semejanza química">Semejanza química</option>
              <option value="fórmula o patrón de compuestos">Fórmula o patrón de compuestos</option>
              <option value="propiedad">Propiedad</option>
              <option value="otro">Otro</option>
            </select>
          </label>
          <label>
            Explica tu criterio
            <textarea value={state.criterionNote} onChange={e => setState(s => ({ ...s, criterionNote:e.target.value }))} rows={5} />
          </label>
          <div className="actions">
            <button className="secondary" onClick={() => setState(s => ({ ...s, stage:'archive' }))}>Volver</button>
            <button disabled={!state.criterion || !state.criterionNote.trim()} onClick={() => setState(s => ({ ...s, stage:'reveal', revealed:true }))}>
              Registrar criterio
            </button>
          </div>
        </section>
      )}

      {state.stage === 'reveal' && (
        <section className="panel">
          <p className="eyebrow">Nueva evidencia</p>
          <h2>Las mismas tarjetas ahora dicen un poco más</h2>
          <p>La información adicional no corrige tu organización. Te da razones para conservarla o cambiarla.</p>
          <div className="mini-grid">
            {DECK_A.map(card => <article className="mini-card" key={card.id}><strong>{card.symbol}</strong><span>{card.reveal}</span></article>)}
          </div>
          <button onClick={() => setState(s => ({ ...s, stage:'reorganize' }))}>Revisar mi organización</button>
        </section>
      )}

      {state.stage === 'deckB' && (
        <section className="panel narrow">
          <p className="eyebrow">Mazo B · expansión</p>
          <h2>El archivo crece</h2>
          <p>Llegan {DECK_B.length} registros nuevos. Algunos conservarán tus regularidades. Otros las pondrán bajo presión.</p>
          <button onClick={loadDeckB}>Incorporar nuevos registros</button>
        </section>
      )}

      {state.stage === 'gap' && (
        <section className="panel narrow">
          <p className="eyebrow">Huecos</p>
          <h2>Declara una ausencia sólo si tu representación la necesita</h2>
          <div className="two-col">
            <label>Después de
              <select value={state.gapFrom} onChange={e => setState(s => ({ ...s, gapFrom:e.target.value }))}>
                <option value="">Selecciona…</option>
                {visibleCards.map(card => <option key={card.id} value={card.id}>{card.symbol} · {card.mass}</option>)}
              </select>
            </label>
            <label>Antes de
              <select value={state.gapTo} onChange={e => setState(s => ({ ...s, gapTo:e.target.value }))}>
                <option value="">Selecciona…</option>
                {visibleCards.map(card => <option key={card.id} value={card.id}>{card.symbol} · {card.mass}</option>)}
              </select>
            </label>
          </div>
          <label>
            ¿Por qué ese espacio podría tener significado?
            <textarea value={state.gapNote} onChange={e => setState(s => ({ ...s, gapNote:e.target.value }))} rows={5} />
          </label>
          <button disabled={!state.gapFrom || !state.gapTo || !state.gapNote.trim()} onClick={() => setState(s => ({ ...s, stage:'prediction' }))}>
            Registrar hueco y predecir
          </button>
        </section>
      )}

      {state.stage === 'prediction' && (
        <section className="panel narrow">
          <p className="eyebrow">Predicción</p>
          <h2>¿Qué debería existir allí?</h2>
          <div className="two-col">
            <label>Masa aproximada
              <input value={state.prediction.mass} onChange={e => setState(s => ({ ...s, prediction:{ ...s.prediction, mass:e.target.value } }))} />
            </label>
            <label>Familia o relación propuesta
              <input value={state.prediction.family} onChange={e => setState(s => ({ ...s, prediction:{ ...s.prediction, family:e.target.value } }))} />
            </label>
            <label>Fórmula esperada
              <input value={state.prediction.formula} onChange={e => setState(s => ({ ...s, prediction:{ ...s.prediction, formula:e.target.value } }))} />
            </label>
            <label>Propiedad esperada
              <input value={state.prediction.property} onChange={e => setState(s => ({ ...s, prediction:{ ...s.prediction, property:e.target.value } }))} />
            </label>
          </div>
          <label>Justificación
            <textarea value={state.prediction.justification} onChange={e => setState(s => ({ ...s, prediction:{ ...s.prediction, justification:e.target.value } }))} rows={6} />
          </label>
          <button disabled={!state.prediction.justification.trim()} onClick={() => setState(s => ({ ...s, stage:'contrast' }))}>
            Congelar predicción y ver contraste histórico
          </button>
        </section>
      )}

      {state.stage === 'contrast' && (
        <section className="panel">
          <p className="eyebrow">Contraste histórico · después de tu predicción</p>
          <h2>Lo que hizo visible la tabla de 1871</h2>
          <div className="contrast-grid">
            <article>
              <h3>{HISTORICAL_CONTRAST.ea.label}</h3>
              <p><strong>Masa prevista:</strong> {HISTORICAL_CONTRAST.ea.mass}</p>
              <p><strong>Relación:</strong> {HISTORICAL_CONTRAST.ea.relation}</p>
              <p><strong>Óxido:</strong> {HISTORICAL_CONTRAST.ea.oxide}</p>
              <p>{HISTORICAL_CONTRAST.ea.note}</p>
            </article>
            <article>
              <h3>{HISTORICAL_CONTRAST.es.label}</h3>
              <p><strong>Masa prevista:</strong> {HISTORICAL_CONTRAST.es.mass}</p>
              <p><strong>Relación:</strong> {HISTORICAL_CONTRAST.es.relation}</p>
              <p><strong>Óxido:</strong> {HISTORICAL_CONTRAST.es.oxide}</p>
              <p>{HISTORICAL_CONTRAST.es.note}</p>
            </article>
          </div>
          <details className="source-note"><summary>Procedencia del contraste</summary><p>{SOURCE_NOTE}</p></details>
          <button onClick={() => setState(s => ({ ...s, stage:'reflection' }))}>Reflexionar sobre mi representación</button>
        </section>
      )}

      {state.stage === 'reflection' && (
        <section className="panel narrow">
          <p className="eyebrow">REC6 · reflexión</p>
          <h2>Tu representación como argumento</h2>
          <p className="notice"><strong>Recuperado:</strong> criterio “{state.criterion}”; hueco entre {state.gapFrom} y {state.gapTo}; predicción de masa “{state.prediction.mass || '—'}”.</p>
          <label>¿Qué evidencia te hizo reorganizar?
            <textarea value={state.reflection.changedBy} onChange={e => setState(s => ({ ...s, reflection:{ ...s.reflection, changedBy:e.target.value } }))} rows={4} />
          </label>
          <label>¿Qué muestra tu representación?
            <textarea value={state.reflection.shows} onChange={e => setState(s => ({ ...s, reflection:{ ...s.reflection, shows:e.target.value } }))} rows={4} />
          </label>
          <label>¿Qué simplifica u oculta?
            <textarea value={state.reflection.hides} onChange={e => setState(s => ({ ...s, reflection:{ ...s.reflection, hides:e.target.value } }))} rows={4} />
          </label>
          <label>¿Qué todavía no explica esta periodicidad?
            <textarea value={state.reflection.limit} onChange={e => setState(s => ({ ...s, reflection:{ ...s.reflection, limit:e.target.value } }))} rows={4} />
          </label>
          <button
            disabled={Object.values(state.reflection).some(v => !v.trim())}
            onClick={() => setState(s => ({ ...s, stage:'summary' }))}
          >
            Generar mi recorrido
          </button>
        </section>
      )}

      {state.stage === 'summary' && (
        <section className="panel">
          <p className="eyebrow">Tu recorrido</p>
          <h2>Clasificar también es construir una explicación</h2>
          <dl className="summary">
            <div><dt>Criterio inicial</dt><dd>{state.criterion}: {state.criterionNote}</dd></div>
            <div><dt>Serie propuesta</dt><dd>{state.series.join(' → ') || 'No construida'}</dd></div>
            <div><dt>Hueco</dt><dd>{state.gapFrom} → [ ? ] → {state.gapTo}: {state.gapNote}</dd></div>
            <div><dt>Predicción</dt><dd>{state.prediction.justification}</dd></div>
            <div><dt>Qué muestra</dt><dd>{state.reflection.shows}</dd></div>
            <div><dt>Qué oculta</dt><dd>{state.reflection.hides}</dd></div>
          </dl>
          <div className="actions">
            <button onClick={() => navigator.clipboard.writeText(summaryText)}>Copiar resumen</button>
            <button className="secondary" onClick={() => downloadText('H6-tu-recorrido.md', summaryText)}>Descargar resumen</button>
          </div>
          <p className="notice">CANDIDATO. Este recorrido sirve para QA y prueba humana. No constituye todavía la versión estudiantil final.</p>
        </section>
      )}
    </main>
  )
}
