interface Point {
  x: number
  y: number
}

interface Line {
  start: Point
  end: Point
}

let line: Line = {
  start: { x: 0, y: 0 },
  end: { x: 100, y: 100 },
}

interface ColorLine {
  line: Line
  color?: string
}

let noColorLine: ColorLine = {
  line: line,
}

let colorLine: ColorLine = {
  line: line,
  color: 'red',
}

console.log(noColorLine)
console.log(colorLine)

interface CenterPoint {
  readonly x: number
  readonly y: number
}

let centerPoint: CenterPoint = { x: 0, y: 0 }
centerPoint.x = 10 // 에러 발생

centerPoint = { x: 10, y: 0 }
let generalPoint: Point = centerPoint
generalPoint.x = 10 // 에러가 발생하지 않습니다.

console.log(generalPoint)
