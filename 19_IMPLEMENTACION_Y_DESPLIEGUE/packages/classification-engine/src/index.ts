export type ItemId=string
export type GroupId=string

export type RelationType=
  | 'pertenece_a_grupo'
  | 'precede_a'
  | 'sigue_a'
  | 'relacionado_con'
  | 'hueco_entre'
  | 'serie_propuesta'
  | 'fuera_de_clasificacion'

export type SemanticRelation={
  type:RelationType
  source:ItemId
  target?:ItemId
  group?:GroupId
  note?:string
}

export type ClassificationState={
  groups:GroupId[]
  placements:Record<ItemId,GroupId>
  series:ItemId[]
  relations:SemanticRelation[]
}

export function createGroup(state:ClassificationState,label:string):ClassificationState{
  const name=label.trim()
  if(!name||state.groups.includes(name)) return state
  return {...state,groups:[...state.groups,name]}
}

export function moveItem(state:ClassificationState,itemId:ItemId,group:GroupId):ClassificationState{
  if(!state.groups.includes(group)) return state
  const placements={...state.placements,[itemId]:group}
  const relations=state.relations
    .filter(r=>!(r.type==='pertenece_a_grupo'&&r.source===itemId))
    .concat({type:'pertenece_a_grupo',source:itemId,group})
  return {...state,placements,relations}
}

export function toggleSeriesItem(state:ClassificationState,itemId:ItemId):ClassificationState{
  const exists=state.series.includes(itemId)
  const series=exists?state.series.filter(id=>id!==itemId):[...state.series,itemId]
  return {...state,series,relations:seriesRelations(state.relations,series)}
}

export function reorderSeries(state:ClassificationState,index:number,delta:number):ClassificationState{
  const target=index+delta
  if(index<0||index>=state.series.length||target<0||target>=state.series.length) return state
  const series=[...state.series]
  ;[series[index],series[target]]=[series[target],series[index]]
  return {...state,series,relations:seriesRelations(state.relations,series)}
}

export function addRelation(state:ClassificationState,relation:SemanticRelation):ClassificationState{
  const duplicate=state.relations.some(r=>
    r.type===relation.type&&r.source===relation.source&&r.target===relation.target&&r.group===relation.group
  )
  return duplicate?state:{...state,relations:[...state.relations,relation]}
}

export function removeRelation(
  state:ClassificationState,
  predicate:(relation:SemanticRelation)=>boolean,
):ClassificationState{
  return {...state,relations:state.relations.filter(r=>!predicate(r))}
}

export function seriesRelations(existing:SemanticRelation[],series:ItemId[]):SemanticRelation[]{
  const retained=existing.filter(r=>!['serie_propuesta','precede_a','sigue_a'].includes(r.type))
  const derived:SemanticRelation[]=[]
  for(let i=0;i<series.length;i++){
    derived.push({type:'serie_propuesta',source:series[i]})
    if(i<series.length-1){
      derived.push({type:'precede_a',source:series[i],target:series[i+1]})
      derived.push({type:'sigue_a',source:series[i+1],target:series[i]})
    }
  }
  return [...retained,...derived]
}

export function markGap(
  state:ClassificationState,
  from:ItemId,
  to:ItemId,
  note?:string,
):ClassificationState{
  const relations=state.relations.filter(r=>r.type!=='hueco_entre')
  return {...state,relations:[...relations,{type:'hueco_entre',source:from,target:to,note}]}
}

export function groupedItems(state:ClassificationState,itemIds:ItemId[]){
  return state.groups.map(group=>({
    group,
    items:itemIds.filter(id=>state.placements[id]===group),
  }))
}
