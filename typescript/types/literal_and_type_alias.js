// male 과 female 만 사용 가능합니다.
let gender = 'male';
gender = 'man'; // 에러 발생
let genderWithTypeAlias = 'female';
function personalInfo(age, name) {
    return {
        name,
        age,
        adult: age > 18,
    };
}
const dopt = personalInfo(22, 'DOPT');
const wrongAge = personalInfo('22', 'DOPT'); // 에러
