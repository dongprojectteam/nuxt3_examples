// male 과 female 만 사용 가능합니다.
let gender: 'male' | 'female' = 'male'
gender = 'man' // 에러 발생

type Gender = 'male' | 'female' // 타입 별칭 설정
let genderWithTypeAlias: Gender = 'female'

type PersonalInfo = {
  name: string
  age: number
  adult: boolean
}

function personalInfo(age: number, name: string): PersonalInfo {
  return {
    name,
    age,
    adult: age > 18,
  }
}

const dopt = personalInfo(22, 'DOPT')
const wrongAge = personalInfo('22', 'DOPT') // 에러
