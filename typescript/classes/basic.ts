class BasicClass {
  property: string

  constructor(property: string) {
    this.property = property
  }

  print() {
    console.log(this.property)
  }
}

const basicClassInstance = new BasicClass('Property')
basicClassInstance.print()
