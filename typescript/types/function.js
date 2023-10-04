function personalInfo(age, // age 매개변수는 number 타입
name // name 매개변수는 string 타입
) {
    return {
        name,
        age,
        adult: age > 18,
    };
}
const dopt = personalInfo(22, 'DOPT');
const wrongAge = personalInfo('22', 'DOPT'); // 에러
function optionalParameter(age, name // 선택적 매개변수
) {
    // name이 실제로 있는지 확인 필요
    const userName = name == undefined ? '익명' : name;
    return {
        name: userName,
        age,
        adult: age > 18,
    };
}
const personalInfoArrow = (age, // 타입 정의 불필요
name // 타입 정의 불필요
) => {
    const userName = name == undefined ? '익명' : name;
    return {
        name: userName,
        age,
        adult: age > 18,
    };
};
