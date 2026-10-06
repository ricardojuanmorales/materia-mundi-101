export type HistoricalCard = {
  id: string
  symbol: string
  name: string
  mass: string
  deck: 'A' | 'B'
  pattern: string
  reveal: string
  provenance: string
}

export const HISTORICAL_CARDS: HistoricalCard[] = [
  { id:'Li', symbol:'Li', name:'Litio', mass:'7', deck:'A', pattern:'R₂O', reveal:'Patrón histórico de valencia I', provenance:'FH/RH' },
  { id:'Na', symbol:'Na', name:'Sodio', mass:'23', deck:'A', pattern:'R₂O', reveal:'Patrón histórico de valencia I', provenance:'FH/RH' },
  { id:'K', symbol:'K', name:'Potasio', mass:'39', deck:'A', pattern:'R₂O', reveal:'Patrón histórico de valencia I', provenance:'FH/RH' },
  { id:'Rb', symbol:'Rb', name:'Rubidio', mass:'85', deck:'A', pattern:'R₂O', reveal:'Patrón histórico de valencia I', provenance:'FH/RH' },
  { id:'Cs', symbol:'Cs', name:'Cesio', mass:'133', deck:'A', pattern:'R₂O', reveal:'Patrón histórico de valencia I', provenance:'FH/RH' },
  { id:'Be', symbol:'Be', name:'Berilio', mass:'9.4', deck:'A', pattern:'RO', reveal:'Patrón histórico de valencia II', provenance:'FH/RH' },
  { id:'Mg', symbol:'Mg', name:'Magnesio', mass:'24', deck:'A', pattern:'RO', reveal:'Patrón histórico de valencia II', provenance:'FH/RH' },
  { id:'Ca', symbol:'Ca', name:'Calcio', mass:'40', deck:'A', pattern:'RO', reveal:'Patrón histórico de valencia II', provenance:'FH/RH' },
  { id:'Sr', symbol:'Sr', name:'Estroncio', mass:'87', deck:'A', pattern:'RO', reveal:'Patrón histórico de valencia II', provenance:'FH/RH' },
  { id:'Ba', symbol:'Ba', name:'Bario', mass:'137', deck:'A', pattern:'RO', reveal:'Patrón histórico de valencia II', provenance:'FH/RH' },
  { id:'B', symbol:'B', name:'Boro', mass:'11', deck:'A', pattern:'R₂O₃', reveal:'Patrón histórico de valencia III', provenance:'FH/RH' },
  { id:'Al', symbol:'Al', name:'Aluminio', mass:'27.3', deck:'A', pattern:'R₂O₃', reveal:'Patrón histórico de valencia III', provenance:'FH/RH' },
  { id:'C', symbol:'C', name:'Carbono', mass:'12', deck:'A', pattern:'RH₄ / RO₂', reveal:'Patrón histórico de valencia IV', provenance:'FH/RH' },
  { id:'Si', symbol:'Si', name:'Silicio', mass:'28', deck:'A', pattern:'RH₄ / RO₂', reveal:'Patrón histórico de valencia IV', provenance:'FH/RH' },
  { id:'N', symbol:'N', name:'Nitrógeno', mass:'14', deck:'A', pattern:'RH₃ / R₂O₅', reveal:'Patrón histórico de valencia V', provenance:'FH/RH' },
  { id:'P', symbol:'P', name:'Fósforo', mass:'31', deck:'A', pattern:'RH₃ / R₂O₅', reveal:'Patrón histórico de valencia V', provenance:'FH/RH' },
  { id:'As', symbol:'As', name:'Arsénico', mass:'75', deck:'A', pattern:'RH₃ / R₂O₅', reveal:'Patrón histórico de valencia V', provenance:'FH/RH' },
  { id:'O', symbol:'O', name:'Oxígeno', mass:'16', deck:'A', pattern:'RH₂ / RO₃', reveal:'Patrón histórico de valencia VI', provenance:'FH/RH' },
  { id:'S', symbol:'S', name:'Azufre', mass:'32', deck:'A', pattern:'RH₂ / RO₃', reveal:'Patrón histórico de valencia VI', provenance:'FH/RH' },
  { id:'Se', symbol:'Se', name:'Selenio', mass:'78', deck:'A', pattern:'RH₂ / RO₃', reveal:'Patrón histórico de valencia VI', provenance:'FH/RH' },
  { id:'F', symbol:'F', name:'Flúor', mass:'19', deck:'A', pattern:'RH / R₂O₇', reveal:'Patrón histórico de valencia VII', provenance:'FH/RH' },
  { id:'Cl', symbol:'Cl', name:'Cloro', mass:'35.5', deck:'A', pattern:'RH / R₂O₇', reveal:'Patrón histórico de valencia VII', provenance:'FH/RH' },
  { id:'Br', symbol:'Br', name:'Bromo', mass:'80', deck:'A', pattern:'RH / R₂O₇', reveal:'Patrón histórico de valencia VII', provenance:'FH/RH' },
  { id:'Ti', symbol:'Ti', name:'Titanio', mass:'48', deck:'A', pattern:'RO₂', reveal:'En 1871 aparece en una zona de transición entre regularidades', provenance:'FH/RH' },
  { id:'Zr', symbol:'Zr', name:'Circonio', mass:'90', deck:'A', pattern:'RO₂', reveal:'Conserva analogías químicas con otros registros del archivo', provenance:'FH/RH' },
  { id:'V', symbol:'V', name:'Vanadio', mass:'51', deck:'A', pattern:'R₂O₅', reveal:'En 1871 aparece en una zona de transición entre regularidades', provenance:'FH/RH' },
  { id:'Nb', symbol:'Nb', name:'Niobio', mass:'94', deck:'A', pattern:'R₂O₅', reveal:'Conserva analogías químicas con otros registros del archivo', provenance:'FH/RH' },
  { id:'Cr', symbol:'Cr', name:'Cromo', mass:'52', deck:'A', pattern:'RO₃', reveal:'En 1871 aparece en una zona de transición entre regularidades', provenance:'FH/RH' },
  { id:'Mo', symbol:'Mo', name:'Molibdeno', mass:'96', deck:'A', pattern:'RO₃', reveal:'Conserva analogías químicas con otros registros del archivo', provenance:'FH/RH' },
  { id:'Zn', symbol:'Zn', name:'Zinc', mass:'65', deck:'A', pattern:'RO', reveal:'Su posición histórica queda cerca de una zona incompleta', provenance:'FH/RH' },
  { id:'Cd', symbol:'Cd', name:'Cadmio', mass:'112', deck:'A', pattern:'RO', reveal:'Conserva una relación funcional con Zn', provenance:'FH/RH' },

  { id:'Fe', symbol:'Fe', name:'Hierro', mass:'56', deck:'B', pattern:'zona VIII', reveal:'Caso de organización menos lineal en la tabla de 1871', provenance:'FH/RH' },
  { id:'Co', symbol:'Co', name:'Cobalto', mass:'59', deck:'B', pattern:'zona VIII', reveal:'Masa muy próxima a Ni; semejanza y orden entran en tensión', provenance:'FH/RH' },
  { id:'Ni', symbol:'Ni', name:'Níquel', mass:'59', deck:'B', pattern:'zona VIII', reveal:'Masa muy próxima a Co; semejanza y orden entran en tensión', provenance:'FH/RH' },
  { id:'Cu', symbol:'Cu', name:'Cobre', mass:'63', deck:'B', pattern:'zona I/VIII', reveal:'Caso puente en la representación histórica', provenance:'FH/RH' },
  { id:'Ag', symbol:'Ag', name:'Plata', mass:'108', deck:'B', pattern:'zona I/VIII', reveal:'Caso puente en la representación histórica', provenance:'FH/RH' },
  { id:'In', symbol:'In', name:'Indio', mass:'113', deck:'B', pattern:'R₂O₃', reveal:'Extiende una relación semejante a B y Al', provenance:'FH/RH' },
  { id:'Sn', symbol:'Sn', name:'Estaño', mass:'118', deck:'B', pattern:'RO₂', reveal:'Extiende una relación semejante a C y Si', provenance:'FH/RH' },
  { id:'Sb', symbol:'Sb', name:'Antimonio', mass:'122', deck:'B', pattern:'RH₃ / R₂O₅', reveal:'Extiende una relación semejante a P y As', provenance:'FH/RH' },
  { id:'Te', symbol:'Te', name:'Telurio', mass:'125', deck:'B', pattern:'RH₂ / RO₃', reveal:'Su relación con I tensiona una regla puramente basada en masa', provenance:'FH/RH' },
  { id:'I', symbol:'I', name:'Yodo', mass:'127', deck:'B', pattern:'RH / R₂O₇', reveal:'Su semejanza química exige comparar más de un criterio', provenance:'FH/RH' },
]

export const DECK_A = HISTORICAL_CARDS.filter(card => card.deck === 'A')
export const DECK_B = HISTORICAL_CARDS.filter(card => card.deck === 'B')

export const HISTORICAL_CONTRAST = {
  ea: {
    label: 'eka-aluminio',
    mass: '≈68',
    relation: 'análogo de Al',
    oxide: 'Ea₂O₃',
    note: 'La tabla de 1871 dejó explícitamente este lugar incompleto.'
  },
  es: {
    label: 'eka-silicio',
    mass: '≈72',
    relation: 'análogo de Si',
    oxide: 'EsO₂',
    note: 'La tabla de 1871 dejó explícitamente este segundo lugar incompleto.'
  }
}

export const SOURCE_NOTE =
  'Baseline histórica candidata: tabla de Mendeleev de 1871 (Science History Institute / RSC). Los patrones R₂O…R₂O₇ reproducen encabezados históricos de grupo; las frases explicativas RH/DD requieren QA antes de uso en aula.'
