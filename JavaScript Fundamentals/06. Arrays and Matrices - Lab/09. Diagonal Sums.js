function diagonalSums(matrix) {
    let leftToRight = 0;
    let rightToLeft = 0;

    for (let i = 0; i < matrix.length; i++) {
        leftToRight += matrix[i][i];
        rightToLeft += matrix[i][matrix.length - 1 - i];
    }

    return `${leftToRight} ${rightToLeft}`;
}

console.log(diagonalSums([
    [20, 40],
    [10, 60]
]));

console.log(diagonalSums([
    [3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]
]));