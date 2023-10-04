let person = {
    name: 'DOPT',
    age: 22,
    height: 5.9, // 초과 속성 검사 에러
};
let person1 = {
    name: 'DOPT',
    age: 22,
    height: 5.9, // 구조적 타입 시스템
};
let dopt = {
    name: 'DOPT',
    age: 22,
    height: 5.9,
};
let person3 = dopt; // 구조적 타입 시스템
function printName(person) {
    console.log(person.name);
}
printName({
    name: 'DOPT',
    age: 22,
    height: 5.9, // 초과 속성 검사 에러
});
printName(dopt); // 구조적 타입 시스템
