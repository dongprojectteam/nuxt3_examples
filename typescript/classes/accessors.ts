class UserName {
  #firstName: string
  #lastName: string

  get name() {
    return `${this.#firstName} ${this.#lastName}`
  }

  set name(fullName: string) {
    if (fullName.length == 0) throw new Error('Cannot use empty name')
    if (fullName.split(' ').length != 2)
      throw new Error('Need space between last and first name')

    this.#firstName = fullName.split(' ')[0]
    this.#lastName = fullName.split(' ')[1]
  }
}

let doptName = new UserName()
doptName.name = 'DOPT KIM' // setter 사용
console.log(doptName.name) // getter 사용
