type Foot = {
  foot: 'left' | 'right' | 'both'
}

type Hand = {
  hand: 'left' | 'right'
}

type SportStart = {
  name: string
  sports: 'soccor' | 'baseball'
}

type Baseball = SportStart & Hand
type Soccor = SportStart & Foot

const player1: Soccor = {
  name: 'Son',
  sports: 'soccor',
  foot: 'both',
}

const player2: Baseball = {
  name: 'Ryu',
  sports: 'baseball',
  hand: 'left',
}

console.log(player1)
console.log(player2)
