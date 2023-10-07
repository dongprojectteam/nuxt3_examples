class Shape {
    constructor(_name) {
        this._name = _name;
    }
    // printShapeName 은 Concrete 클래스가 따로 구현하지 않아도 사용 가능
    printShapeName() {
        console.log(`Shape: ${this._name}`);
    }
}
class Circle extends Shape {
    draw() {
        console.log('Draw Circle');
    }
}
class Rectangle extends Shape {
    draw() {
        console.log('Draw Rectangle');
    }
    // overriding
    printShapeName() {
        console.log('My name is Rectangle');
    }
}
// let shape = new Shape('Shape') // 에러
let circle = new Circle('Circle');
let rectangle = new Rectangle('Rectangle');
circle.draw();
circle.printShapeName();
rectangle.draw();
rectangle.printShapeName();
