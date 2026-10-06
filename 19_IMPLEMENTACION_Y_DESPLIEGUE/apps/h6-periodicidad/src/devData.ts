export type DevCard = {
  id: string
  symbol: string
  name: string
  mass: string
  clue1: string
  clue2: string
}

export const DEV_CARDS: DevCard[] = [
  { id: 'a', symbol: 'A', name: 'Alfa', mass: '7', clue1: 'Forma un compuesto X₂O', clue2: 'Reacciona de manera parecida a Delta' },
  { id: 'b', symbol: 'B', name: 'Beta', mass: '11', clue1: 'Forma un compuesto X₂O₃', clue2: 'Comparte una relación con Épsilon' },
  { id: 'c', symbol: 'C', name: 'Gamma', mass: '16', clue1: 'Forma un compuesto XO₃', clue2: 'Presenta una propiedad semejante a Zeta' },
  { id: 'd', symbol: 'D', name: 'Delta', mass: '23', clue1: 'Forma un compuesto X₂O', clue2: 'Reacciona de manera parecida a Alfa' },
  { id: 'e', symbol: 'E', name: 'Épsilon', mass: '27', clue1: 'Forma un compuesto X₂O₃', clue2: 'Comparte una relación con Beta' },
  { id: 'f', symbol: 'F', name: 'Zeta', mass: '32', clue1: 'Forma un compuesto XO₃', clue2: 'Presenta una propiedad semejante a Gamma' },
  { id: 'g', symbol: 'G', name: 'Eta', mass: '65', clue1: 'Su comportamiento no encaja limpiamente', clue2: 'Puede servir como ancla de una secuencia' },
  { id: 'h', symbol: 'H', name: 'Theta', mass: '75', clue1: 'Continúa una secuencia creciente', clue2: 'Conserva relaciones con tarjetas anteriores' },
]

export const GROUPS = ['Sin clasificar', 'Grupo A', 'Grupo B', 'Grupo C']
