// default 키워드 없이 export
export const PI = 3.141592
export const sum = (a: number, b: number): number => a + b

// 함수나 클래스도 export 가능
const mul = (a: number, b: number): number => a * b
function div_function(a: number, b: number): number {
  return a / b
}

// 별도로 export 시 중괄호 사용
// as 를 이용해 이름 변경 가능
export { mul, div_function as div }
