export type PortableSession<T> = {
  app: string
  formatVersion: number
  exportedAt: string
  state: T
}

export type ImportResult<T> =
  | { ok: true; state: T }
  | { ok: false; error: string }

export function buildPortableSession<T>(app:string,formatVersion:number,state:T):PortableSession<T>{
  return { app, formatVersion, exportedAt:new Date().toISOString(), state }
}

export function serializePortableSession<T>(session:PortableSession<T>):string{
  return JSON.stringify(session,null,2)
}

export function parsePortableSession<T>(
  raw:string,
  expectedApp:string,
  expectedVersion:number,
  validateState:(value:unknown)=>value is T,
):ImportResult<T>{
  try{
    const parsed=JSON.parse(raw) as Partial<PortableSession<unknown>>
    if(parsed.app!==expectedApp) return {ok:false,error:'Este archivo pertenece a otra aplicación.'}
    if(parsed.formatVersion!==expectedVersion) return {ok:false,error:'La versión del archivo no es compatible.'}
    if(!validateState(parsed.state)) return {ok:false,error:'El estado de la sesión está incompleto o dañado.'}
    return {ok:true,state:parsed.state}
  }catch{
    return {ok:false,error:'No se pudo leer el archivo JSON.'}
  }
}

export function downloadPortableText(filename:string,text:string,type='application/json;charset=utf-8'){
  const blob=new Blob([text],{type})
  const url=URL.createObjectURL(blob)
  const a=document.createElement('a')
  a.href=url
  a.download=filename
  a.click()
  URL.revokeObjectURL(url)
}
