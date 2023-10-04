interface Point {
  x: number
  y: number
}

interface GetPoint {
  (x: number, y: number): Point
}

let GetPointImpl: GetPoint = (x, y) => ({ x, y })
console.log(GetPointImpl(10, 10))

let GetPointImplWithDiffNames: GetPoint = (left, top) => ({ x: left, y: top })
console.log(GetPointImplWithDiffNames(100, 100))
