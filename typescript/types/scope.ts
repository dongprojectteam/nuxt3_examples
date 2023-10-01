var varScopeVariable = 1 // 전역 범위
function varFoo() {
  var varScopeVariable = 2 // 함수 범위
  console.log(varScopeVariable) // 2
}
varFoo()
console.log(varScopeVariable) // 1

if (true) {
  var varScopeVariable = 3 // 전역 함수 재선언
}
console.log(varScopeVariable) // 3

varFoo()
console.log(varScopeVariable) // 3

if (true) {
  let letScopeVariable = 10
}
console.log(letScopeVariable) // 에러
