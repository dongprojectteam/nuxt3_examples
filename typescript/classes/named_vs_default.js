"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const default_pi_1 = require("./modules/default_pi"); // default export
const default_pi2_1 = require("./modules/default_pi2"); // default export
const default_pi3_1 = require("./modules/default_pi3"); // default export
// named import 는 중괄호를 이용해 import
// as를 이용해 변수명 변경 가능
const named_pi_1 = require("./modules/named_pi"); // named export
console.log(default_pi_1.default);
console.log(default_pi2_1.default);
console.log((0, default_pi3_1.default)());
console.log(named_pi_1.PI);
console.log((0, named_pi_1.sum)(10, 10));
console.log((0, named_pi_1.mul)(10, 10));
console.log((0, named_pi_1.div)(10, 10));
