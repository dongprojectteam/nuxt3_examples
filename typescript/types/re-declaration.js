let matrix = [
    [1, 2],
    [3, 4],
];
function varSum(matrix) {
    var sum = 0;
    for (var i = 0; i < matrix.length; i++) {
        var currentRow = matrix[i];
        for (var i = 0; i < currentRow.length; i++)
            sum += currentRow[i];
    }
    return sum;
}
let varSumResult = varSum(matrix);
console.log(`Var Result : ${varSumResult}`); // 3
function letSum(matrix) {
    let sum = 0;
    for (let i = 0; i < matrix.length; i++) {
        let currentRow = matrix[i];
        for (let i = 0; i < currentRow.length; i++)
            sum += currentRow[i];
    }
    return sum;
}
let letSumResult = letSum(matrix);
console.log(`Let Result : ${letSumResult}`); // 10
