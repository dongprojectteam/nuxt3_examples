import DEFAULT_PI from './modules/default_pi' // default export
import DEFAULT_PI2 from './modules/default_pi2' // default export
import getPI from './modules/default_pi3' // default export

// named import 는 중괄호를 이용해 import
// as를 이용해 변수명 변경 가능
import { PI as MyPI, sum, mul, div } from './modules/named_pi' // named export

console.log(DEFAULT_PI)
console.log(DEFAULT_PI2)
console.log(getPI())

console.log(MyPI)
console.log(sum(10, 10))
console.log(mul(10, 10))
console.log(div(10, 10))
