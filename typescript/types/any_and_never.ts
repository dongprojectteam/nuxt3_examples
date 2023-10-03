let anyVariable: any = 1
anyVariable = 'string'
anyVariable = { foo: 'string' }

function neverReturn(): never {
  throw new Error('에러 발생')
}
let neverVraible: never = 1 // 에러 발생
