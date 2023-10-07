class BasicClass {
    constructor(property) {
        this.property = property;
    }
    print() {
        console.log(this.property);
    }
}
const basicClassInstance = new BasicClass('Property');
basicClassInstance.print();
