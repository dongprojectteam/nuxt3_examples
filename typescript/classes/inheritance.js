// class Engine {
//   engine: string // 속성
//   // 생성자
//   constructor(engine: string) {
//     // 멤버 접근자 this
//     this.engine = engine
//   }
//   // 메소드
//   print() {
//     console.log(this.engine)
//   }
// }
// class Car extends Engine {
//   brand: string
//   constructor(brand: string, engine: string) {
//     // 부모 접근자 super
//     super(engine)
//     this.brand = brand
//   }
//   // 메소드 오버라이딩
//   print() {
//     console.log(this.brand)
//     console.log(this.engine)
//   }
// }
// let avante = new Car('Hyundai', 'Alpha')
// avante.print()
