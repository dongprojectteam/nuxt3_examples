function voidFunction() {
    console.log('This fundtion returns nothing');
    // 아무런 반환 값이 없으므로 void를 씁니다.
    // 실제로는 undefined가 리턴되며 void는 undefined를 허용합니다.
}
let nullVariable = null;
nullVariable = undefined; // strictNullChecks 옵션 true 시 에러
let undefinedVariable = undefined;
undefinedVariable = null; // strictNullChecks 옵션 true 시 에러
let numberVariable = undefined; // strictNullChecks 옵션 true 시 에러
numberVariable = null; // strictNullChecks 옵션 true 시 에러
let voidVariable = undefined;
voidVariable = null; // strictNullChecks 옵션 true 시 에러
