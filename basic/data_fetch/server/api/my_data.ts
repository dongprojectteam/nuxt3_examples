const data = {
  results: [
    {
      name: {
        title: "Mr",
        first: "Donghyuk",
        last: "Kim"
      },
      dob: {
        age: 20
      }
    }
  ]
}
export default defineEventHandler(async () => {
  data.results[0].dob.age++
  return new Promise<any>((resolve) => {
    setTimeout(() => {
      resolve(data)
    }, 3000)
  })
})