var varScopeVariable = 1; // 전역 범위
function varFoo() {
    var varScopeVariable = 2; // 함수 범위
    console.log(varScopeVariable); // 2
}
varFoo(); // 2
console.log(varScopeVariable); // 1
if (true) {
    var varScopeVariable = 3; // 전역 함수 재선언
}
console.log(varScopeVariable); // 3
varFoo(); // 2
console.log(varScopeVariable); // 3
let letScopeVariable = 4;
if (true) {
    let letScopeVariable = 5;
}
console.log(letScopeVariable); // 4
