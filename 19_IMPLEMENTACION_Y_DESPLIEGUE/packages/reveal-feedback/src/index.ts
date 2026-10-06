export type RevealId=string
export type FeedbackTone='descriptive'|'question'|'historical'

export type RevealRule<TContext=unknown>={
  id:RevealId
  stage:string
  canReveal?:(context:TContext)=>boolean
}

export type FeedbackRule<TContext=unknown>={
  id:string
  stage:string
  tone:FeedbackTone
  message:(context:TContext)=>string|null
}

export type RevealFeedbackConfig<TContext=unknown>={
  reveals:RevealRule<TContext>[]
  feedback:FeedbackRule<TContext>[]
}

export function activeReveals<TContext>(
  config:RevealFeedbackConfig<TContext>,
  stage:string,
  context:TContext,
):RevealId[]{
  return config.reveals
    .filter(rule=>rule.stage===stage&&(!rule.canReveal||rule.canReveal(context)))
    .map(rule=>rule.id)
}

export function feedbackFor<TContext>(
  config:RevealFeedbackConfig<TContext>,
  stage:string,
  context:TContext,
):Array<{id:string;tone:FeedbackTone;message:string}>{
  return config.feedback
    .filter(rule=>rule.stage===stage)
    .map(rule=>({id:rule.id,tone:rule.tone,message:rule.message(context)}))
    .filter((item):item is {id:string;tone:FeedbackTone;message:string}=>!!item.message)
}
