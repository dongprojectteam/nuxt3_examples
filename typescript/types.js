// 변수 선언
var varVariable;
varVariable = 1;
(function () {
    var varVariable = 2;
    console.log(varVariable); // 2 출력
})();
console.log(varVariable); // 1 출력
let letVariable;
letVariable = 1;
(function () {
    let letVariable = 2;
    console.log(letVariable); // 2 출력
})();
console.log(letVariable); // 1 출력
// const constVariableWitoutInitialValue: string // 에러 발생
// const constVariable = 'const'
// constVariable = 'new assignment' // 에러 발생
// let typeBoolean: boolean = true
// let typeNumber: number = 0xff
// let typeString: string = 'string'
// let typeNumberList: number[] = [1, 2, 3]
// let typeStringList: string[] = ['str1', 'str2']
// let typeObjectList: object[] = [{ str: 'str' }, { number: 1 }]
// let typeTuple: [string, number] = ['str', 1]
// enum Lights {
//   Red, // 0
//   Yellow, // 1
//   Green, // 2
// }
// let typeEnum: Lights = Lights.Red
// let typeAny: any = 1
// typeAny = 'str'
// typeAny = ['anything']
// let typeVoid: void = undefined
// // strict, strictNullChecks 옵션이 꺼져있으면 사용 가능
// // typeVoid = null
// const fnReturnNothing = (message: string): void => {
//   console.log(message)
//   return undefined
// }
// https://typescript-kr.github.io/pages/basic-types.html
/*
응답 중지
In TypeScript, the as operator is used for type assertions. It is used to cast a value to a specific type. In JSX, as is used to assert the type of a JSX element. This is because the angle bracket syntax used in JSX conflicts with TypeScript’s syntax for type assertions.

For example, consider the following code snippet:

const element = <div id="myDiv" />;
const myDiv = element as HTMLDivElement;

Here, we are asserting that element is of type HTMLDivElement. This allows us to access properties and methods specific to HTMLDivElement.

In summary, as is used in JSX to assert the type of a JSX element, while in TypeScript it is used for type assertions.

I hope this helps! Let me know if you have any more questions.
*/
