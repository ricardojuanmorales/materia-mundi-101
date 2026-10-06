import type { PedagogicalFlow } from '../../../packages/pedagogical-flow/src'

export type H6FlowContext={
  criterion:string
  criterionNote:string
  gapFrom:string
  gapTo:string
  gapNote:string
  prediction:{
    mass:string
    family:string
    justification:string
  }
  reflection:{
    changedBy:string
    shows:string
    hides:string
    limit:string
  }
}

export const H6_FLOW:PedagogicalFlow<H6FlowContext>={
  stages:[
    {id:'intro',label:'Introducción',progress:0},
    {id:'archive1',label:'Archivo inicial',progress:1},
    {id:'archive2',label:'Archivo A completo',progress:2},
    {id:'criterion',label:'Criterio',progress:3},
    {id:'reveal',label:'Nueva evidencia',progress:4,reveal:['segunda_pista']},
    {id:'reorganize',label:'Reorganización',progress:5},
    {id:'deckB1',label:'Mazo B · ola 1',progress:6,reveal:['deck_b1']},
    {id:'reorganizeB1',label:'Reorganización B1',progress:7},
    {id:'deckB2',label:'Mazo B · ola 2',progress:8,reveal:['deck_b2']},
    {id:'reorganizeB2',label:'Reorganización B2',progress:9},
    {
      id:'gap',label:'Hueco',progress:10,
    },
    {
      id:'prediction',label:'Predicción',progress:11,
      gate:{
        id:'gap-declared',
        label:'Hueco declarado y justificado',
        canEnter:c=>!!(c.gapFrom&&c.gapTo&&c.gapNote.trim()),
      },
    },
    {
      id:'contrast',label:'Contraste histórico',progress:12,reveal:['contraste_historico'],
      gate:{
        id:'prediction-frozen',
        label:'Predicción mínima completa',
        canEnter:c=>!!(c.prediction.mass.trim()&&c.prediction.family.trim()&&c.prediction.justification.trim()),
      },
    },
    {id:'reflection',label:'Preparación REC6',progress:13},
    {
      id:'summary',label:'Recorrido',progress:14,
      gate:{
        id:'reflection-complete',
        label:'Reflexión mínima completa',
        canEnter:c=>Object.values(c.reflection).every(v=>v.trim().length>0),
      },
    },
  ],
  transitions:[
    {from:'intro',to:'archive1',action:'Abrir expediente'},
    {from:'archive1',to:'archive2',action:'Incorporar A2'},
    {from:'archive2',to:'criterion',action:'Declarar criterio'},
    {
      from:'criterion',to:'reveal',action:'Registrar criterio',
      canTransition:c=>!!(c.criterion&&c.criterionNote.trim()),
    },
    {from:'reveal',to:'reorganize',action:'Abrir reorganización'},
    {from:'reorganize',to:'deckB1',action:'Pasar a Mazo B'},
    {from:'deckB1',to:'reorganizeB1',action:'Incorporar B1'},
    {from:'reorganizeB1',to:'deckB2',action:'Pasar a segunda ola B'},
    {from:'deckB2',to:'reorganizeB2',action:'Incorporar B2'},
    {from:'reorganizeB2',to:'gap',action:'Buscar hueco'},
    {from:'gap',to:'prediction',action:'Registrar hueco'},
    {from:'prediction',to:'contrast',action:'Congelar predicción'},
    {from:'contrast',to:'reflection',action:'Abrir reflexión REC6'},
    {from:'reflection',to:'summary',action:'Generar recorrido'},
  ],
}
