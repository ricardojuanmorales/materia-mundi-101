import { useEffect, useMemo, useState } from 'react'
import {
  buildPortableSession, downloadPortableText, parsePortableSession, serializePortableSession,
} from '../../../packages/session-portability/src'
import { parseHistory, pushHistory, serializeHistory, undoHistory, type HistoryEntry } from '../../../packages/state-history/src'
import { evidenceMarkdown } from '../../../packages/evidence-export/src'
import { canTransition, progressOf, transitionLabel } from '../../../packages/pedagogical-flow/src'
import { activeReveals, feedbackFor } from '../../../packages/reveal-feedback/src'
import { H6_FLOW } from './flowConfig'
import { H6_REVEAL_FEEDBACK } from './revealFeedbackConfig'
import {
  createGroup as engineCreateGroup,
  groupedItems,
  markGap,
  moveItem,
  reorderSeries,
  toggleSeriesItem,
  type ClassificationState,
  type SemanticRelation,
} from '../../../packages/classification-engine/src'
import {
  DECK_A1, DECK_A2, DECK_B1, DECK_B2, HISTORICAL_CARDS,
  HISTORICAL_CONTRAST, SOURCE_NOTE, SYSTEM_LIMIT,
} from './historicalData'

type Stage =
  | 'intro' | 'archive1' | 'archive2' | 'criterion' | 'reveal' | 'reorganize'
  | 'deckB1' | 'reorganizeB1' | 'deckB2' | 'reorganizeB2'
  | 'gap' | 'prediction' | 'contrast' | 'reflection' | 'summary'

type Placement = Record<string,string>
type Prediction = { mass:string; family:string; formula:string; property:string; justification:string }
type Reflection = { changedBy:string; shows:string; hides:string; limit:string }

type SavedState = {
  stage:Stage
  placements:Placement
  groups:string[]
  criterion:string
  criterionNote:string
  revealed:boolean
  a2Loaded:boolean
  b1Loaded:boolean
  b2Loaded:boolean
  series:string[]
  relations:SemanticRelation[]
  gapFrom:string
  gapTo:string
  gapNote:string
  prediction:Prediction
  reflection:Reflection
}

const STORAGE_KEY='materia-mundi:h6:pedagogical-mvp:v0.3'
const HISTORY_KEY='materia-mundi:h6:history:v1'
const SESSION_APP='materia-mundi:h6-periodicidad'
const SESSION_FORMAT=1

const blankPrediction:Prediction={mass:'',family:'',formula:'',property:'',justification:''}
const blankReflection:Reflection={changedBy:'',shows:'',hides:'',limit:''}
const initialPlacements:Placement=Object.fromEntries(DECK_A1.map(c=>[c.id,'Sin clasificar']))

const initialState:SavedState={
  stage:'intro',placements:initialPlacements,groups:['Sin clasificar','Grupo A','Grupo B','Grupo C'],
  criterion:'',criterionNote:'',revealed:false,a2Loaded:false,b1Loaded:false,b2Loaded:false,
  series:[],relations:[],gapFrom:'',gapTo:'',gapNote:'',prediction:blankPrediction,reflection:blankReflection,
}

function normalizeState(value:Partial<SavedState>):SavedState{
  return {...initialState,...value,relations:Array.isArray(value.relations)?value.relations:[]}
}

function loadState():SavedState{
  try{const raw=localStorage.getItem(STORAGE_KEY);return raw?normalizeState(JSON.parse(raw)):initialState}
  catch{return initialState}
}

function classificationOf(s:SavedState):ClassificationState{
  return {groups:s.groups,placements:s.placements,series:s.series,relations:s.relations}
}

function applyClassification(s:SavedState,next:ClassificationState):SavedState{
  return {...s,groups:next.groups,placements:next.placements,series:next.series,relations:next.relations}
}

function downloadText(filename:string,text:string){
  downloadPortableText(filename,text,'text/markdown;charset=utf-8')
}

function isSavedState(value:unknown):value is SavedState{
  if(!value||typeof value!=='object') return false
  const s=value as Partial<SavedState>
  const validStages:Stage[]=[
    'intro','archive1','archive2','criterion','reveal','reorganize','deckB1','reorganizeB1',
    'deckB2','reorganizeB2','gap','prediction','contrast','reflection','summary'
  ]
  return !!(
    s.stage&&validStages.includes(s.stage) &&
    s.placements&&typeof s.placements==='object' &&
    Array.isArray(s.groups) &&
    typeof s.criterion==='string' &&
    typeof s.criterionNote==='string' &&
    typeof s.revealed==='boolean' &&
    typeof s.a2Loaded==='boolean' &&
    typeof s.b1Loaded==='boolean' &&
    typeof s.b2Loaded==='boolean' &&
    Array.isArray(s.series) &&
    typeof s.gapFrom==='string' &&
    typeof s.gapTo==='string' &&
    typeof s.gapNote==='string' &&
    s.prediction&&typeof s.prediction==='object' &&
    s.reflection&&typeof s.reflection==='object'
  )
}

export default function App(){
  const [state,setState]=useState<SavedState>(loadState)
  const [history,setHistory]=useState<HistoryEntry<SavedState>[]>(()=>parseHistory(localStorage.getItem(HISTORY_KEY)))
  const [announcement,setAnnouncement]=useState('')
  const [newGroup,setNewGroup]=useState('')

  useEffect(()=>localStorage.setItem(STORAGE_KEY,JSON.stringify(state)),[state])
  useEffect(()=>localStorage.setItem(HISTORY_KEY,serializeHistory(history)),[history])

  const checkpoint=(label:string)=>{
    setHistory(h=>pushHistory(h,label,state,20))
  }

  const undo=()=>{
    const result=undoHistory(history)
    if(!result.entry) return
    setHistory(result.history)
    setState(result.entry.state)
    setAnnouncement(`Se deshizo: ${result.entry.label}.`)
  }

  const visibleCards=useMemo(()=>HISTORICAL_CARDS.filter(card=>{
    if(DECK_A1.some(c=>c.id===card.id)) return true
    if(DECK_A2.some(c=>c.id===card.id)) return state.a2Loaded
    if(DECK_B1.some(c=>c.id===card.id)) return state.b1Loaded
    if(DECK_B2.some(c=>c.id===card.id)) return state.b2Loaded
    return false
  }),[state.a2Loaded,state.b1Loaded,state.b2Loaded])

  const grouped=useMemo(
    ()=>groupedItems(classificationOf(state),visibleCards.map(card=>card.id)).map(({group,items})=>({
      group,cards:items.map(id=>visibleCards.find(card=>card.id===id)!).filter(Boolean),
    })),
    [state.groups,state.placements,state.series,state.relations,visibleCards],
  )

  const seriesEnabled=state.revealed
  const workspaceStage=['archive1','archive2','reorganize','reorganizeB1','reorganizeB2'].includes(state.stage)
  const flowContext={
    criterion:state.criterion,
    criterionNote:state.criterionNote,
    gapFrom:state.gapFrom,
    gapTo:state.gapTo,
    gapNote:state.gapNote,
    prediction:{
      mass:state.prediction.mass,
      family:state.prediction.family,
      justification:state.prediction.justification,
    },
    reflection:state.reflection,
  }

  const feedbackContext={
    criterion:state.criterion,
    seriesLength:state.series.length,
    gapFrom:state.gapFrom,
    gapTo:state.gapTo,
    predictionMass:state.prediction.mass,
  }
  const stageFeedback=feedbackFor(H6_REVEAL_FEEDBACK,state.stage,feedbackContext)
  const revealIds=activeReveals(H6_REVEAL_FEEDBACK,state.stage,feedbackContext)
  const showSecondClue=state.revealed||revealIds.includes('segunda_pista')

  const go=(to:Stage)=>{
    if(!canTransition(H6_FLOW,state.stage,to,flowContext)){
      setAnnouncement('Todavía falta completar la evidencia requerida para avanzar.')
      return
    }
    const label=transitionLabel(H6_FLOW,state.stage,to)??`Avanzar a ${to}`
    checkpoint(label)
    setState(s=>({...s,stage:to}))
  }

  const moveCard=(cardId:string,group:string)=>{
    const card=HISTORICAL_CARDS.find(c=>c.id===cardId)
    checkpoint(`Mover ${card?.symbol??cardId} a ${group}`)
    setState(s=>applyClassification(s,moveItem(classificationOf(s),cardId,group)))
    setAnnouncement(`${card?.name??'Tarjeta'} movida a ${group}.`)
  }

  const createGroup=()=>{
    const label=newGroup.trim();if(!label||state.groups.includes(label))return
    checkpoint(`Crear grupo ${label}`)
    setState(s=>applyClassification(s,engineCreateGroup(classificationOf(s),label)));setNewGroup('');setAnnouncement(`Grupo ${label} creado.`)
  }

  const addWave=(wave:'A2'|'B1'|'B2')=>{
    const target:Stage=wave==='A2'?'archive2':wave==='B1'?'reorganizeB1':'reorganizeB2'
    if(!canTransition(H6_FLOW,state.stage,target,flowContext)){
      setAnnouncement('Esta transición todavía no está disponible.')
      return
    }
    checkpoint(transitionLabel(H6_FLOW,state.stage,target)??`Incorporar ${wave}`)
    const cards=wave==='A2'?DECK_A2:wave==='B1'?DECK_B1:DECK_B2
    const added=Object.fromEntries(cards.map(c=>[c.id,'Sin clasificar']))
    setState(s=>({
      ...s,placements:{...s.placements,...added},
      a2Loaded:wave==='A2'?true:s.a2Loaded,
      b1Loaded:wave==='B1'?true:s.b1Loaded,
      b2Loaded:wave==='B2'?true:s.b2Loaded,
      stage:target,
    }))
    setAnnouncement(`${cards.length} registros nuevos incorporados.`)
  }

  const toggleSeries=(id:string)=>{
    checkpoint(`${state.series.includes(id)?'Quitar':'Añadir'} ${id} de la serie`)
    setState(s=>applyClassification(s,toggleSeriesItem(classificationOf(s),id)))
  }
  const moveSeries=(i:number,d:number)=>{
    checkpoint('Reordenar serie propuesta')
    setState(s=>applyClassification(s,reorderSeries(classificationOf(s),i,d)))
  }

  const exportSession=()=>{
    const portable=buildPortableSession(SESSION_APP,SESSION_FORMAT,state)
    const stamp=new Date().toISOString().slice(0,10)
    downloadPortableText(
      `materia-mundi-h6-sesion-${stamp}.json`,
      serializePortableSession(portable),
    )
    setAnnouncement('Sesión exportada. Puedes guardarla y continuar en otro dispositivo.')
  }

  const importSession=async(file:File)=>{
    const result=parsePortableSession(await file.text(),SESSION_APP,SESSION_FORMAT,isSavedState)
    if(!result.ok){
      alert(`No se pudo importar la sesión: ${result.error}`)
      setAnnouncement('La importación no se completó.')
      return
    }
    const knownIds=new Set(HISTORICAL_CARDS.map(card=>card.id))
    const unknownCards=Object.keys(result.state.placements).filter(id=>!knownIds.has(id))
    if(unknownCards.length){
      alert('No se pudo importar la sesión: el archivo contiene tarjetas que esta versión no reconoce.')
      setAnnouncement('La importación no se completó.')
      return
    }
    if(!confirm('Importar reemplazará la sesión actualmente guardada en este navegador. ¿Continuar?')) return
    setHistory([])
    localStorage.removeItem(HISTORY_KEY)
    const restored=normalizeState(result.state)
    setState(restored)
    localStorage.setItem(STORAGE_KEY,JSON.stringify(restored))
    setAnnouncement('Sesión importada correctamente. Puedes continuar desde el punto guardado.')
  }

  const reset=()=>{
    if(confirm('Comenzar de nuevo eliminará esta sesión candidata guardada en este navegador.')){
      localStorage.removeItem(STORAGE_KEY);localStorage.removeItem(HISTORY_KEY);setHistory([]);setState(initialState);setAnnouncement('Sesión reiniciada.')
    }
  }

  const trajectoryItems=history.map(item=>({at:item.at,action:item.label}))
  const summaryText=evidenceMarkdown(
    'Tu recorrido H6 — MVP candidato',
    trajectoryItems,
    [
      {heading:'Criterio',body:`${state.criterion}\n${state.criterionNote}`},
      {heading:'Serie propuesta',body:state.series.join(' → ')||'No se construyó una serie.'},
      {heading:'Relaciones semánticas registradas',body:state.relations.length?state.relations.map(r=>`- ${r.type}: ${r.source}${r.target?` → ${r.target}`:''}${r.group?` @ ${r.group}`:''}`).join('\n'):'No registradas.'},
      {heading:'Hueco',body:`${state.gapFrom} → [ ? ] → ${state.gapTo}\n${state.gapNote}`},
      {heading:'Predicción',body:`Masa: ${state.prediction.mass}\nRelación: ${state.prediction.family}\nFórmula: ${state.prediction.formula||'—'}\nPropiedad: ${state.prediction.property||'—'}\nJustificación: ${state.prediction.justification}`},
      {heading:'Reflexión para REC6',body:`Evidencia que cambió mi organización: ${state.reflection.changedBy}\nQué muestra: ${state.reflection.shows}\nQué simplifica u oculta: ${state.reflection.hides}\nQué todavía no explica: ${state.reflection.limit}`},
      {heading:'Nota',body:'La app conserva cuatro preguntas de preparación. El REC6 completo se entrega en Moodle.\n\nPILOTO EN AULA · v1.0'},
    ],
  )

  return <main className="shell">
    <p className="dev-banner">PILOTO EN AULA · v1.0</p>
    <header className="topbar">
      <div><p className="eyebrow">CIFI 3065 Virtual · Materia Mundi</p><h1>H6 · Ordenar el archivo</h1></div>
      <div className="progress" aria-label={`Progreso ${progressOf(H6_FLOW,state.stage)} de 14`}>{progressOf(H6_FLOW,state.stage)}/14</div>
    </header>
    <div className="sr-only" aria-live="polite">{announcement}</div>

    <section className="continuity-bar" aria-label="Continuidad de sesión">
      <div>
        <strong>Continuidad entre dispositivos</strong>
        <span> Exporta tu sesión si vas a cambiar de computadora. Si algo falla, conserva ese archivo y continúa en Moodle.</span>
      </div>
      <div className="continuity-actions">
        <button className="secondary" onClick={undo} disabled={!history.length}>Deshacer ({history.length})</button>
        <button className="secondary" onClick={exportSession}>Exportar sesión</button>
        <label className="file-button">
          Importar sesión
          <input
            type="file"
            accept="application/json,.json"
            onChange={e=>{
              const file=e.target.files?.[0]
              if(file) void importSession(file)
              e.currentTarget.value=''
            }}
          />
        </label>
      </div>
    </section>

    {state.stage==='intro'&&<section className="panel hero">
      <p className="eyebrow">Expediente 1871 · Investigación histórica</p>
      <h2>El archivo no viene ordenado. La hipótesis tampoco.</h2>
      <p>Actúas como investigador ante un conjunto de masas, fórmulas y semejanzas químicas del siglo XIX. No conoces todavía una explicación moderna del patrón. Tu tarea es construir una representación útil, someterla a nueva evidencia y decidir si el archivo sugiere algo que aún no está allí.</p>
      <ul><li>Clasifica con un criterio que puedas explicar.</li><li>Reorganiza cuando la evidencia lo exija.</li><li>Deja registros pendientes si no encajan.</li><li>Predice antes de conocer el contraste histórico.</li></ul>
      <button onClick={()=>go('archive1')}>Abrir el expediente</button>
    </section>}

    {workspaceStage&&<section className="panel">
      <div className="section-heading"><div>
        <p className="eyebrow">
          {state.stage==='archive1'?'Primera entrega · 24 registros':
           state.stage==='archive2'?'Archivo A completo · +7 registros':
           state.stage==='reorganize'?'Reorganización · serie habilitada':
           state.stage==='reorganizeB1'?'Mazo B · primera presión':
           'Mazo B · segunda presión'}
        </p>
        <h2>{state.revealed?'Revisa qué relaciones quieres conservar':'Construye una primera organización'}</h2>
      </div><button className="secondary" onClick={reset}>Reiniciar</button></div>

      <div className="toolbar"><label>Nuevo grupo<input value={newGroup} onChange={e=>setNewGroup(e.target.value)} placeholder="Nombre del grupo"/></label><button className="secondary" onClick={createGroup}>Crear grupo</button></div>

      <div className="workspace">{grouped.map(({group,cards})=><section className="group" key={group}>
        <h3>{group}</h3>{cards.length===0&&<p className="empty">Sin tarjetas.</p>}
        <div className="cards">{cards.map(card=><article className="card" key={card.id}>
          <div className="symbol">{card.symbol}</div><h4>{card.name}</h4>
          <p><strong>Masa histórica aprox.:</strong> {card.mass}</p>
          <p><strong>Pista inicial:</strong> {card.initialClue}</p>
          {showSecondClue&&<p className="reveal"><strong>Nueva evidencia:</strong> {card.revealClue}</p>}
          <label>Mover a…<select value={state.placements[card.id]} onChange={e=>moveCard(card.id,e.target.value)}>{state.groups.map(g=><option key={g}>{g}</option>)}</select></label>
          {seriesEnabled&&<button className="tertiary" onClick={()=>toggleSeries(card.id)}>{state.series.includes(card.id)?'Quitar de serie':'Añadir a serie'}</button>}
          <details><summary>Procedencia</summary><p>{card.provenance}</p></details>
        </article>)}</div>
      </section>)}</div>

      {seriesEnabled&&<section className="series-panel"><h3>Serie propuesta</h3><p>La serie aparece ahora, después de declarar tu criterio. Úsala sólo si el orden aporta significado.</p>
        {state.series.length===0&&<p className="empty">Todavía no has construido una serie.</p>}
        <ol className="series-list">{state.series.map((id,i)=>{const c=HISTORICAL_CARDS.find(x=>x.id===id)!;return <li key={id}><span><strong>{c.symbol}</strong> · {c.mass}</span><span className="series-actions"><button className="tertiary" disabled={i===0} onClick={()=>moveSeries(i,-1)}>↑</button><button className="tertiary" disabled={i===state.series.length-1} onClick={()=>moveSeries(i,1)}>↓</button></span></li>})}</ol>
      </section>}

      {state.stage==='archive1'&&<button onClick={()=>addWave('A2')}>Incorporar 7 registros antes de fijar criterio</button>}
      {state.stage==='archive2'&&<button onClick={()=>go('criterion')}>Declarar mi criterio</button>}
      {state.stage==='reorganize'&&<button onClick={()=>go('deckB1')}>Poner a prueba mi sistema</button>}
      {state.stage==='reorganizeB1'&&<button onClick={()=>go('deckB2')}>Continuar con una segunda presión</button>}
      {state.stage==='reorganizeB2'&&<button onClick={()=>go('gap')}>Buscar una ausencia significativa</button>}
    </section>}

    {state.stage==='criterion'&&<section className="panel narrow">
      <p className="eyebrow">Criterio</p><h2>¿Qué intentas conservar?</h2>
      <label>Criterio principal<select value={state.criterion} onChange={e=>setState(s=>({...s,criterion:e.target.value}))}><option value="">Selecciona…</option><option>Masa</option><option>Semejanza química</option><option>Fórmulas o patrones de compuestos</option><option>Otro</option></select></label>
      <label>Explícalo brevemente<textarea rows={5} value={state.criterionNote} onChange={e=>setState(s=>({...s,criterionNote:e.target.value}))}/></label>
      <button disabled={!state.criterion||!state.criterionNote.trim()} onClick={()=>{if(canTransition(H6_FLOW,state.stage,'reveal',flowContext)){checkpoint('Registrar criterio');setState(s=>({...s,stage:'reveal',revealed:true}))}else setAnnouncement('Completa el criterio y su explicación antes de avanzar.')}}>Registrar criterio y recibir nueva evidencia</button>
    </section>}

    {state.stage==='reveal'&&<section className="panel">
      <p className="eyebrow">Nueva evidencia</p><h2>Tu primera organización ya tiene algo que resistir</h2>
      <p>{stageFeedback[0]?.message??'Las pistas nuevas no corrigen automáticamente. Pueden confirmar, dividir o deshacer tus grupos.'}</p>
      <div className="mini-grid">{visibleCards.map(c=><article className="mini-card" key={c.id}><strong>{c.symbol}</strong><span>{c.revealClue}</span></article>)}</div>
      <button onClick={()=>go('reorganize')}>Reorganizar y construir una serie si hace falta</button>
    </section>}

    {state.stage==='deckB1'&&<section className="panel narrow"><p className="eyebrow">Mazo B · ola 1</p><h2>Cinco registros nuevos</h2><p>Fe, Co, Ni, Cu y Ag añaden casos donde una regla simple puede dejar de bastar.</p><button onClick={()=>addWave('B1')}>Incorporar primera ola</button></section>}
    {state.stage==='deckB2'&&<section className="panel narrow"><p className="eyebrow">Mazo B · ola 2</p><h2>Cinco registros más</h2><p>In, Sn, Sb, Te e I extienden familias y añaden una nueva tensión entre masa y semejanza química.</p><button onClick={()=>addWave('B2')}>Incorporar segunda ola</button></section>}

    {state.stage==='gap'&&<section className="panel narrow">
      <p className="eyebrow">Hueco</p><h2>¿Tu representación necesita algo que no está?</h2>
      <p>{stageFeedback[0]?.message??'La app no te dirá dónde buscar. Declara un hueco sólo si tu sistema lo vuelve necesario.'}</p>
      <div className="two-col"><label>Después de<select value={state.gapFrom} onChange={e=>setState(s=>({...s,gapFrom:e.target.value}))}><option value="">Selecciona…</option>{visibleCards.map(c=><option key={c.id} value={c.id}>{c.symbol} · {c.mass}</option>)}</select></label><label>Antes de<select value={state.gapTo} onChange={e=>setState(s=>({...s,gapTo:e.target.value}))}><option value="">Selecciona…</option>{visibleCards.map(c=><option key={c.id} value={c.id}>{c.symbol} · {c.mass}</option>)}</select></label></div>
      <label>¿Por qué ese espacio tiene significado?<textarea rows={5} value={state.gapNote} onChange={e=>setState(s=>({...s,gapNote:e.target.value}))}/></label>
      <button disabled={!state.gapFrom||!state.gapTo||!state.gapNote.trim()} onClick={()=>{if(!canTransition(H6_FLOW,state.stage,'prediction',flowContext)){setAnnouncement('Completa y justifica el hueco antes de avanzar.');return}checkpoint('Registrar hueco');setState(s=>{const next=markGap(classificationOf(s),s.gapFrom,s.gapTo,s.gapNote);return {...applyClassification(s,next),stage:'prediction'}})}}>Registrar hueco</button>
    </section>}

    {state.stage==='prediction'&&<section className="panel narrow">
      <p className="eyebrow">Predicción</p><h2>Comprométete con una inferencia antes del contraste</h2>
      <div className="two-col">
        <label>Masa aproximada *<input value={state.prediction.mass} onChange={e=>setState(s=>({...s,prediction:{...s.prediction,mass:e.target.value}}))}/></label>
        <label>Familia o relación *<input value={state.prediction.family} onChange={e=>setState(s=>({...s,prediction:{...s.prediction,family:e.target.value}}))}/></label>
        <label>Fórmula esperada, opcional<input value={state.prediction.formula} onChange={e=>setState(s=>({...s,prediction:{...s.prediction,formula:e.target.value}}))}/></label>
        <label>Propiedad esperada, opcional<input value={state.prediction.property} onChange={e=>setState(s=>({...s,prediction:{...s.prediction,property:e.target.value}}))}/></label>
      </div>
      <label>Justificación *<textarea rows={6} value={state.prediction.justification} onChange={e=>setState(s=>({...s,prediction:{...s.prediction,justification:e.target.value}}))}/></label>
      <button disabled={!state.prediction.mass.trim()||!state.prediction.family.trim()||!state.prediction.justification.trim()} onClick={()=>go('contrast')}>Congelar predicción y abrir contraste</button>
    </section>}

    {state.stage==='contrast'&&<section className="panel">
      <p className="eyebrow">Contraste histórico · sólo después de predecir</p><h2>La periodicidad permitió predecir, pero no convirtió cada predicción en certeza</h2>
      <div className="contrast-grid">{Object.values(HISTORICAL_CONTRAST).map(item=><article key={item.label}>
        <h3>{item.label}</h3><p><strong>Masa prevista:</strong> {item.predictedMass}</p><p><strong>Relación:</strong> {item.relation}</p><p><strong>Óxido previsto:</strong> {item.predictedOxide}</p><p><strong>Después:</strong> {item.discovered}, masa {item.observedMass}</p><p className="success-note"><strong>Qué funcionó:</strong> {item.success}</p><p className="limit-note"><strong>Qué limita el relato:</strong> {item.limit}</p>
      </article>)}</div>
      <p className="notice"><strong>El sistema también cambió:</strong> {SYSTEM_LIMIT}</p>
      <p>{stageFeedback[0]?.message??''}</p>
      <details className="source-note"><summary>Procedencia candidata</summary><p>{SOURCE_NOTE}</p></details>
      <button onClick={()=>go('reflection')}>Preparar mi reflexión REC6</button>
    </section>}

    {state.stage==='reflection'&&<section className="panel narrow">
      <p className="eyebrow">Preparación REC6</p><h2>La app recupera tu trayectoria; Moodle conserva la entrega formal</h2>
      <p className="notice">Criterio: <strong>{state.criterion}</strong>. Hueco: <strong>{state.gapFrom} → ? → {state.gapTo}</strong>. Predicción de masa: <strong>{state.prediction.mass}</strong>.</p>
      <label>¿Qué evidencia te hizo reorganizar?<textarea rows={4} value={state.reflection.changedBy} onChange={e=>setState(s=>({...s,reflection:{...s.reflection,changedBy:e.target.value}}))}/></label>
      <label>¿Qué muestra tu representación?<textarea rows={4} value={state.reflection.shows} onChange={e=>setState(s=>({...s,reflection:{...s.reflection,shows:e.target.value}}))}/></label>
      <label>¿Qué simplifica u oculta?<textarea rows={4} value={state.reflection.hides} onChange={e=>setState(s=>({...s,reflection:{...s.reflection,hides:e.target.value}}))}/></label>
      <label>¿Qué todavía no explica?<textarea rows={4} value={state.reflection.limit} onChange={e=>setState(s=>({...s,reflection:{...s.reflection,limit:e.target.value}}))}/></label>
      <button disabled={Object.values(state.reflection).some(v=>!v.trim())} onClick={()=>go('summary')}>Generar recorrido para Moodle</button>
    </section>}

    {state.stage==='summary'&&<section className="panel">
      <p className="eyebrow">Tu recorrido</p><h2>Clasificar también es construir una explicación</h2>
      <dl className="summary">
        <div><dt>Criterio</dt><dd>{state.criterion}: {state.criterionNote}</dd></div>
        <div><dt>Serie propuesta</dt><dd>{state.series.join(' → ')||'No construida'}</dd></div>
        <div><dt>Hueco</dt><dd>{state.gapFrom} → [ ? ] → {state.gapTo}: {state.gapNote}</dd></div>
        <div><dt>Predicción</dt><dd>Masa {state.prediction.mass}; relación {state.prediction.family}. {state.prediction.justification}</dd></div>
        <div><dt>Qué muestra</dt><dd>{state.reflection.shows}</dd></div><div><dt>Qué oculta</dt><dd>{state.reflection.hides}</dd></div>
      </dl>
      <div className="actions"><button onClick={()=>navigator.clipboard.writeText(summaryText)}>Copiar resumen</button><button className="secondary" onClick={()=>downloadText('H6-tu-recorrido.md',summaryText)}>Descargar resumen</button></div>
      <p className="notice"><strong>Frontera app ↔ Moodle:</strong> estas cuatro respuestas preparan REC6. La entrega formal y cualquier pregunta adicional permanecen en Moodle.</p>
    </section>}
  </main>
}
