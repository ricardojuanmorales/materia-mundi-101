export type HistoricalCard = {
  id: string
  symbol: string
  name: string
  mass: string
  deck: 'A' | 'B'
  pattern: string
  initialClue: string
  revealClue: string
  provenance: string
}

const card = (
  id:string, symbol:string, name:string, mass:string, deck:'A'|'B',
  pattern:string, initialClue:string, revealClue:string,
): HistoricalCard => ({ id, symbol, name, mass, deck, pattern, initialClue, revealClue, provenance:'masa/patrón: FH · pistas: RH' })

export const HISTORICAL_CARDS: HistoricalCard[] = [
  card('Li','Li','Litio','7','A','R₂O','Forma un óxido con patrón R₂O.','Su patrón químico puede compararse con Na y K.'),
  card('Na','Na','Sodio','23','A','R₂O','Su masa permite colocarlo en una secuencia creciente.','Forma compuestos análogos a Li y K.'),
  card('K','K','Potasio','39','A','R₂O','Forma un óxido con patrón R₂O.','Conserva semejanza química con Li y Na.'),
  card('Rb','Rb','Rubidio','85','A','R₂O','Su masa extiende una secuencia conocida.','Mantiene analogía química con K y Cs.'),
  card('Cs','Cs','Cesio','133','A','R₂O','Forma un óxido con patrón R₂O.','Extiende una familia de comportamiento semejante.'),

  card('Be','Be','Berilio','9.4','A','RO','Forma un óxido con patrón RO.','Puede compararse con Mg y Ca.'),
  card('Mg','Mg','Magnesio','24','A','RO','Su masa lo sitúa entre registros ligeros.','Forma compuestos análogos a Ca y Sr.'),
  card('Ca','Ca','Calcio','40','A','RO','Forma un óxido con patrón RO.','Conserva relaciones químicas con Mg y Sr.'),
  card('Sr','Sr','Estroncio','87','A','RO','Su masa prolonga una secuencia.','Mantiene analogía química con Ca y Ba.'),
  card('Ba','Ba','Bario','137','A','RO','Forma un óxido con patrón RO.','Extiende una familia de comportamiento semejante.'),

  card('B','B','Boro','11','A','R₂O₃','Forma un óxido con patrón R₂O₃.','Su relación con Al será importante más adelante.'),
  card('Al','Al','Aluminio','27.3','A','R₂O₃','Su masa permite compararlo con vecinos del archivo.','Forma un óxido análogo al de B y deja abierta una continuidad.'),
  card('C','C','Carbono','12','A','RH₄ / RO₂','Presenta un patrón RH₄ / RO₂.','Su relación con Si puede sostener una familia.'),
  card('Si','Si','Silicio','28','A','RH₄ / RO₂','Su masa queda próxima a Al y P.','Presenta analogía química con C y deja abierta una continuidad.'),
  card('N','N','Nitrógeno','14','A','RH₃ / R₂O₅','Presenta un patrón RH₃ / R₂O₅.','Puede compararse con P y As.'),
  card('P','P','Fósforo','31','A','RH₃ / R₂O₅','Su masa extiende una secuencia corta.','Conserva analogías con N y As.'),
  card('As','As','Arsénico','75','A','RH₃ / R₂O₅','Presenta un patrón RH₃ / R₂O₅.','Puede cerrar una continuidad química con P.'),
  card('O','O','Oxígeno','16','A','RH₂ / RO₃','Presenta un patrón RH₂ / RO₃.','Puede compararse con S y Se.'),
  card('S','S','Azufre','32','A','RH₂ / RO₃','Su masa prolonga una secuencia.','Conserva analogías químicas con O y Se.'),
  card('Se','Se','Selenio','78','A','RH₂ / RO₃','Presenta un patrón RH₂ / RO₃.','Puede cerrar una continuidad química con S.'),
  card('F','F','Flúor','19','A','RH / R₂O₇','Presenta un patrón de hidruro RH.','Puede compararse con Cl y Br.'),
  card('Cl','Cl','Cloro','35.5','A','RH / R₂O₇','Su masa prolonga una secuencia.','Conserva analogías químicas con F y Br.'),
  card('Br','Br','Bromo','80','A','RH / R₂O₇','Presenta un patrón de hidruro RH.','Puede cerrar una continuidad química con Cl.'),
  card('Ti','Ti','Titanio','48','A','RO₂','Forma un óxido con patrón RO₂.','Aparece en una zona donde las regularidades se vuelven menos simples.'),

  card('Zr','Zr','Circonio','90','A','RO₂','Su masa extiende una secuencia de registros pesados.','Conserva analogía funcional con Ti.'),
  card('V','V','Vanadio','51','A','R₂O₅','Forma un óxido con patrón R₂O₅.','Aparece en una zona de transición entre regularidades.'),
  card('Nb','Nb','Niobio','94','A','R₂O₅','Su masa extiende una secuencia.','Conserva analogía funcional con V.'),
  card('Cr','Cr','Cromo','52','A','RO₃','Forma un óxido con patrón RO₃.','Aparece en una zona de transición entre regularidades.'),
  card('Mo','Mo','Molibdeno','96','A','RO₃','Su masa extiende una secuencia.','Conserva analogía funcional con Cr.'),
  card('Zn','Zn','Zinc','65','A','RO','Forma un óxido con patrón RO.','Su posición queda cerca de una zona históricamente incompleta.'),
  card('Cd','Cd','Cadmio','112','A','RO','Su masa extiende una secuencia.','Conserva una relación funcional con Zn.'),

  card('Fe','Fe','Hierro','56','B','zona VIII','Su masa se aproxima a otros metales del archivo.','Caso de organización menos lineal en la tabla de 1871.'),
  card('Co','Co','Cobalto','59','B','zona VIII','Su masa es casi igual a la de Ni.','Masa y semejanza no producen una decisión única.'),
  card('Ni','Ni','Níquel','59','B','zona VIII','Su masa es casi igual a la de Co.','Masa y semejanza no producen una decisión única.'),
  card('Cu','Cu','Cobre','63','B','zona I/VIII','Su masa lo aproxima a Zn.','Funciona como caso puente en la representación histórica.'),
  card('Ag','Ag','Plata','108','B','zona I/VIII','Su masa lo sitúa entre registros pesados.','Funciona como caso puente en la representación histórica.'),

  card('In','In','Indio','113','B','R₂O₃','Forma un óxido con patrón R₂O₃.','Extiende una relación semejante a B y Al.'),
  card('Sn','Sn','Estaño','118','B','RO₂','Forma un óxido con patrón RO₂.','Extiende una relación semejante a C y Si.'),
  card('Sb','Sb','Antimonio','122','B','RH₃ / R₂O₅','Presenta un patrón RH₃ / R₂O₅.','Extiende una relación semejante a P y As.'),
  card('Te','Te','Telurio','125','B','RH₂ / RO₃','Su masa queda antes de I.','Conserva analogías químicas con O, S y Se dentro del sistema de 1871.'),
  card('I','I','Yodo','127','B','RH / R₂O₇','Presenta un patrón de hidruro RH.','Conserva analogías químicas con F, Cl y Br dentro del sistema de 1871.'),
]

export const DECK_A = HISTORICAL_CARDS.filter(c => c.deck === 'A')
export const DECK_A1 = DECK_A.slice(0, 24)
export const DECK_A2 = DECK_A.slice(24)
export const DECK_B = HISTORICAL_CARDS.filter(c => c.deck === 'B')
export const DECK_B1 = DECK_B.slice(0, 5)
export const DECK_B2 = DECK_B.slice(5)

export const HISTORICAL_CONTRAST = {
  ea: {
    label:'eka-aluminio',
    predictedMass:'≈68',
    relation:'análogo de Al',
    predictedOxide:'Ea₂O₃',
    discovered:'Galio (Ga), 1875',
    observedMass:'≈69.7',
    success:'La masa, densidad y varias relaciones químicas previstas resultaron notablemente cercanas.',
    limit:'No todo coincidió: por ejemplo, se había previsto que el metal sería volátil; el galio observado es involátil.',
  },
  es: {
    label:'eka-silicio',
    predictedMass:'≈72',
    relation:'análogo de Si',
    predictedOxide:'EsO₂',
    discovered:'Germanio (Ge), 1886',
    observedMass:'≈72.3 (comparación histórica)',
    success:'La masa y varias propiedades previstas estuvieron muy cerca de las observadas.',
    limit:'La comparación histórica muestra una predicción poderosa, no una explicación moderna de por qué existe la periodicidad.',
  },
}

export const SYSTEM_LIMIT =
  'El sistema de 1871 fue revisado y ampliado después. La aparición de los gases nobles, entre otros casos, mostró que una clasificación útil también puede necesitar nuevas categorías.'

export const SOURCE_NOTE =
  'QA histórico: masas y patrones se contrastan con la tabla de 1871; las pistas interpretativas se mantienen como reconstrucciones históricas (RH) hasta cerrar revisión tarjeta por tarjeta.'
