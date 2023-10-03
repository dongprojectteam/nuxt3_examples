function personalInfo(age, // age 매개변수는 number 타입
name // name 매개변수는 string 타입
) {
    return {
        name: name,
        age: age,
        adult: age > 18,
    };
}
var dopt = personalInfo(22, 'DOPT');
console.log(dopt);
var wrongAge = personalInfo('22', 'DOPT'); // 에러
function optionalParameter(age, name) {
    var userName = name == undefined ? '익명' : name;
    return {
        name: userName,
        age: age,
        adult: age > 18,
    };
}
