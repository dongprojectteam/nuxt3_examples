let tupleVariable: [string, number] = ['string', 1] // 문자열과 숫자를 갖는 튜플
tupleVariable = ['string', 1]
tupleVariable[0] = 'newString'
tupleVariable[1] = 2

console.log(tupleVariable) // [ 'newString', 2 ]

// 동서남북 열거형
enum CardinalPoints {
  East, // 0
  West, // 1
  South, // 2
  North, // 3
}

enum Colors {
  Red = 1, // 1
  Green, // 2
  Blue, // 3
}

enum Cows {
  Angus = 1, // 1
  Hereford = 4, // 4
  Beefmaster = 10, // 1
}

let cow: Cows = Cows.Hereford
console.log(cow) // 4

console.log(CardinalPoints)
console.log(Colors)
console.log(Cows)

enum LastNames {
  Kim = 'Kim',
  Lee = 'Lee',
}
