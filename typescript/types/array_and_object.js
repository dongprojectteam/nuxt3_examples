let numberArray = [1, 2, 3, 4];
let stringArray = ['string'];
let objectVariable = {
    foo: 'string',
    bar: 1,
};
objectVariable = {
    foo: 'foo',
    bar: 1,
    baz: [1, 2, 3],
};
if (objectVariable.baz != undefined)
    console.log(`undefined 검사 시 ${objectVariable.baz}`);
console.log(`Non-null assertion operator 사용 시 ${objectVariable.baz}`);
