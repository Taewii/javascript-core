function diagonalMatrix(matrixStr) {
    let matrix = [];

    for (const arrStr of matrixStr) {
        matrix.push(arrStr.split(' ').map(x => +x));
    }

    let rightToLeftSum = 0;
    let leftToLeftSum = 0;

    for (let row = 0; row < matrix.length; row++) {
        rightToLeftSum += matrix[row][row];
        leftToLeftSum += matrix[row][matrix[row].length - 1 - row];
    }

    if (rightToLeftSum === leftToLeftSum) {
        for (let row = 0; row < matrix.length; row++) {
            for (let col = 0; col < matrix[row].length; col++) {
                if (row !== col && row + col !== matrix.length - 1) {
                    matrix[row][col] = leftToLeftSum;
                }
            }
        }
    }

    return matrix.map(x => x.join(' ')).join('\n');
}

console.log(diagonalMatrix([
    '5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1',
]));
;

console.log(diagonalMatrix([
    '1 1 1',
    '1 1 1',
    '1 1 0',
]));