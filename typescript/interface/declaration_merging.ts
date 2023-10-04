interface PersonInfo {
  name: string
}

interface PersonInfo {
  age: number
}

let dopt: PersonInfo = {
  name: 'dopt',
  age: 22,
}

interface PersonInfo {
  age: string // 에러 발생
}

interface PersonInterface {
  getInfo(name: string): PersonInfo
}

interface PersonInterface {
  getInfo(age: number): PersonInfo
}

class PersonImpl implements PersonInterface {
  getInfo(arg: string | number) {
    let name: string = typeof arg === 'string' ? arg : 'unknown'
    let age: number = typeof arg === 'number' ? arg : 0
    return {
      name,
      age,
    }
  }
}
