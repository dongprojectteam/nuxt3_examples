"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.div = exports.mul = exports.sum = exports.PI = void 0;
// default 키워드 없이 export
exports.PI = 3.141592;
const sum = (a, b) => a + b;
exports.sum = sum;
// 함수나 클래스도 export 가능
const mul = (a, b) => a * b;
exports.mul = mul;
function div_function(a, b) {
    return a / b;
}
exports.div = div_function;
