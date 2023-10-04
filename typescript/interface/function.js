let GetPointImpl = (x, y) => ({ x, y });
console.log(GetPointImpl(10, 10));
let GetPointImplWithDiffNames = (left, top) => ({ x: left, y: top });
console.log(GetPointImplWithDiffNames(100, 100));
function printInformation(info) {
    console.log(info);
}
let doptInfo = {
    name: 'DOPT',
    age: 22,
    nationailty: 'Korea', // 구조 외 속성
};
printInformation(doptInfo);
