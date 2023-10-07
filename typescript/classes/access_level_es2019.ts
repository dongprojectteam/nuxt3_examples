class ParentClass {
  publicMember: string
  #privateMember: string

  constructor() {
    this.publicMember = 'parent'
    this.#privateMember = 'parent'
  }
}

class ChildClass extends ParentClass {
  constructor() {
    super()

    this.publicMember = 'child'
    this.#privateMember = 'child'
  }

  #privateMethod(): void {
    console.log('private method')
  }
}

let childInstance = new ChildClass()

console.log(childInstance.publicMember)
console.log(childInstance.#privateMember) // 에러
childInstance.#privateMethod() // 에러
