let line = {
    start: { x: 0, y: 0 },
    end: { x: 100, y: 100 },
};
let noColorLine = {
    line: line,
};
let colorLine = {
    line: line,
    color: 'red',
};
console.log(noColorLine);
console.log(colorLine);
let centerPoint = { x: 0, y: 0 };
centerPoint.x = 10; // 에러 발생
centerPoint = { x: 10, y: 0 };
let generalPoint = centerPoint;
generalPoint.x = 10;
console.log(generalPoint);
