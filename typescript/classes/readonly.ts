class Personal {
  readonly name: string
  constructor(name: string) {
    this.name = name
  }
}

let author = new Personal('DOPT')
author.name = 'WANG' // 에러
