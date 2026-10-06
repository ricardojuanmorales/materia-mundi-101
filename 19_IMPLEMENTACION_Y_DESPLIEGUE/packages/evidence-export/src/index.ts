export type EvidenceItem={
  at:string
  action:string
  detail?:string
}

export function evidenceMarkdown(
  title:string,
  items:EvidenceItem[],
  sections:Array<{heading:string;body:string}>,
):string{
  const lines=[`# ${title}`,'','## Trayectoria de decisiones']
  if(items.length===0) lines.push('No hay pasos semánticos registrados todavía.')
  for(const item of items){
    lines.push(`- **${item.action}** · ${item.at}${item.detail?` · ${item.detail}`:''}`)
  }
  for(const section of sections){
    lines.push('',`## ${section.heading}`,'',section.body||'—')
  }
  return lines.join('\n')
}
