class Engine {
    // 생성자
    constructor(engine) {
        // 멤버 접근자 this
        this.engine = engine;
    }
    // 메소드
    print() {
        console.log(this.engine);
    }
}
class Car {
    constructor(brand, engine) {
        this.brand = brand;
        this.engine = engine;
    }
    print() {
        console.log(this.brand);
        this.engine.print();
    }
}
let engine = new Engine('Alpha');
let avante = new Car('Hyundai', engine);
avante.print();
