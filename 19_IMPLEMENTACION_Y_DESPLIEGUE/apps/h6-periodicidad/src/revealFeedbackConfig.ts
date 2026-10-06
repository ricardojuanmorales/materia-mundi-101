import type { RevealFeedbackConfig } from '../../../packages/reveal-feedback/src'

export type H6FeedbackContext={
  criterion:string
  seriesLength:number
  gapFrom:string
  gapTo:string
  predictionMass:string
}

export const H6_REVEAL_FEEDBACK:RevealFeedbackConfig<H6FeedbackContext>={
  reveals:[
    {id:'segunda_pista',stage:'reveal'},
    {id:'segunda_pista',stage:'reorganize'},
    {id:'segunda_pista',stage:'reorganizeB1'},
    {id:'segunda_pista',stage:'reorganizeB2'},
    {id:'contraste_historico',stage:'contrast'},
  ],
  feedback:[
    {id:'reveal-review',stage:'reveal',tone:'question',message:()=> '¿La nueva evidencia sostiene tu criterio o exige reorganizar?'},
    {id:'reorganize-series',stage:'reorganize',tone:'descriptive',message:c=>c.seriesLength ? 'Revisa si el orden de tu serie conserva las relaciones importantes.' : 'No necesitas una serie si tus grupos expresan mejor el patrón.'},
    {id:'b1-pressure',stage:'reorganizeB1',tone:'question',message:()=> '¿Qué tendría que cambiar para conservar las relaciones más importantes?'},
    {id:'b2-pressure',stage:'reorganizeB2',tone:'question',message:()=> '¿Las nuevas tarjetas sostienen las familias y relaciones que habías propuesto, o necesitas reorganizar?'},
    {id:'gap',stage:'gap',tone:'question',message:()=> 'Declara un hueco sólo si tu representación te da una razón para esperar algo allí.'},
    {id:'prediction',stage:'prediction',tone:'descriptive',message:()=> 'Formula una predicción concreta que luego pueda contrastarse.'},
    {id:'contrast',stage:'contrast',tone:'historical',message:()=> 'Compara tu razonamiento con el caso histórico y observa también sus límites.'},
  ],
}
