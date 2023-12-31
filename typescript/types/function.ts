function personalInfo(
  age: number, // age 매개변수는 number 타입
  name: string // name 매개변수는 string 타입
): // 반환값은 object 타입
{
  name: string
  age: number
  adult: boolean
} {
  return {
    name,
    age,
    adult: age > 18,
  }
}

const dopt = personalInfo(22, 'DOPT')
const wrongAge = personalInfo('22', 'DOPT') // 에러

function optionalParameter(
  age: number,
  name?: string // 선택적 매개변수
): {
  name: string
  age: number
  adult: boolean
} {
  // name이 실제로 있는지 확인 필요
  const userName = name == undefined ? '익명' : name

  return {
    name: userName,
    age,
    adult: age > 18,
  }
}

const personalInfoArrow: (
  age: number,
  name?: string
) => {
  name: string
  age: number
  adult: boolean
} = (
  age, // 타입 정의 불필요
  name? // 타입 정의 불필요
) => {
  const userName = name == undefined ? '익명' : name

  return {
    name: userName,
    age,
    adult: age > 18,
  }
}
