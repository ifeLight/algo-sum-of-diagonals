const fs = require('fs');
function diagonalDifference(arr) {
    let n = arr.length;
    let leftToRightDiagonalSum = 0;
    let rightToLeftDiagonalSum = 0;

    for (let i = 0; i < n; i++) {
        leftToRightDiagonalSum += arr[i][i];
        rightToLeftDiagonalSum += arr[i][n - 1 - i];
    }

    return Math.abs(leftToRightDiagonalSum - rightToLeftDiagonalSum);
}

// Example usage:
const text = fs.readFileSync('sample-input.txt', 'utf8');
const lines = text.split('\n');
const n = parseInt(lines[0]);
const matrix = [];
for (let i = 1; i <= n; i++) {
    matrix.push(lines[i].split(' ').map(Number));
}

console.log(diagonalDifference(matrix)); 