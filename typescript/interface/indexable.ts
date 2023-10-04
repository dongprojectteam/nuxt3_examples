interface ArrayLikeString {
  [index: number]: string
}

interface ObjectWithString {
  [index: string]: string | number
}

let arrayLike: ArrayLikeString = ['foo', 'bar']
arrayLike = {
  0: 'foo',
  1: 'bar',
}

let objectWithString: ObjectWithString = {
  foo: 'string',
  bar: 'string',
  baz: 10,
}
