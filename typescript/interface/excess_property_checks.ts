interface Point {
  x: number
  y: number
}

interface Line {
  start: Point
  end: Point
}

let lineWithAdditionalProperty: Line = {
  start: { x: 0, y: 0 },
  end: { x: 100, y: 100 },
  color: 'red',
} as Line // as Line 제거시 초과 속성 검사로 인한 에러 발생
