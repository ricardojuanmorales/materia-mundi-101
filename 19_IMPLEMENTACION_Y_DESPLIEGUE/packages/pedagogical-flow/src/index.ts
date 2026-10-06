export type FlowStageId=string

export type FlowStage<TContext=unknown>={
  id:FlowStageId
  label:string
  progress:number
  reveal?:string[]
  gate?:{
    id:string
    label:string
    canEnter?:(context:TContext)=>boolean
  }
}

export type FlowTransition<TContext=unknown>={
  from:FlowStageId
  to:FlowStageId
  action:string
  canTransition?:(context:TContext)=>boolean
}

export type PedagogicalFlow<TContext=unknown>={
  stages:FlowStage<TContext>[]
  transitions:FlowTransition<TContext>[]
}

export function stageById<TContext>(
  flow:PedagogicalFlow<TContext>,
  id:FlowStageId,
):FlowStage<TContext>|undefined{
  return flow.stages.find(stage=>stage.id===id)
}

export function canTransition<TContext>(
  flow:PedagogicalFlow<TContext>,
  from:FlowStageId,
  to:FlowStageId,
  context:TContext,
):boolean{
  const transition=flow.transitions.find(t=>t.from===from&&t.to===to)
  if(!transition) return false
  const target=stageById(flow,to)
  if(transition.canTransition&&!transition.canTransition(context)) return false
  if(target?.gate?.canEnter&&!target.gate.canEnter(context)) return false
  return true
}

export function transitionLabel<TContext>(
  flow:PedagogicalFlow<TContext>,
  from:FlowStageId,
  to:FlowStageId,
):string|undefined{
  return flow.transitions.find(t=>t.from===from&&t.to===to)?.action
}

export function nextStage<TContext>(
  flow:PedagogicalFlow<TContext>,
  from:FlowStageId,
  context:TContext,
):FlowStageId|null{
  const candidate=flow.transitions.find(t=>
    t.from===from&&
    (!t.canTransition||t.canTransition(context))&&
    (!stageById(flow,t.to)?.gate?.canEnter||stageById(flow,t.to)!.gate!.canEnter!(context))
  )
  return candidate?.to??null
}

export function progressOf<TContext>(
  flow:PedagogicalFlow<TContext>,
  stageId:FlowStageId,
):number{
  return stageById(flow,stageId)?.progress??0
}

export function allowedTargets<TContext>(
  flow:PedagogicalFlow<TContext>,
  from:FlowStageId,
  context:TContext,
):FlowStageId[]{
  return flow.transitions
    .filter(t=>t.from===from&&canTransition(flow,t.from,t.to,context))
    .map(t=>t.to)
}
