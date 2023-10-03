let anyVariable = 1;
anyVariable = 'string';
anyVariable = { foo: 'string' };
function neverReturn() {
    throw new Error('에러 발생');
}
let neverVraible = 1; // 에러 발생
