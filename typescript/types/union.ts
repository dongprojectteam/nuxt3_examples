const NAMES = {
  1: 'Kim',
  '2': 'Lee',
}

function getName(id: number | string): string {
  return NAMES[id]
}

console.log(getName(1)) // Kim
console.log(getName('2')) // Lee
