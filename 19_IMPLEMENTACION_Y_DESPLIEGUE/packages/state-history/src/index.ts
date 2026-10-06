export type HistoryEntry<T> = {
  at: string
  label: string
  state: T
}

export function pushHistory<T>(
  history:HistoryEntry<T>[],
  label:string,
  state:T,
  limit=20,
):HistoryEntry<T>[]{
  const entry:HistoryEntry<T>={at:new Date().toISOString(),label,state:structuredClone(state)}
  return [...history,entry].slice(-limit)
}

export function undoHistory<T>(
  history:HistoryEntry<T>[],
):{entry:HistoryEntry<T>|null;history:HistoryEntry<T>[]}{
  if(!history.length) return {entry:null,history}
  return {entry:history[history.length-1],history:history.slice(0,-1)}
}

export function serializeHistory<T>(history:HistoryEntry<T>[]):string{
  return JSON.stringify(history)
}

export function parseHistory<T>(raw:string|null):HistoryEntry<T>[]{
  if(!raw) return []
  try{
    const parsed=JSON.parse(raw)
    return Array.isArray(parsed)?parsed:[]
  }catch{
    return []
  }
}
