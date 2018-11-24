function isMagical(matrix) {
    const sum = matrix[0].map(x => +x).reduce((a, b) => a + b);

    for (let row = 0; row < matrix.length; row++) {
        let currentSum = matrix[row].map(x => +x).reduce((a, b) => a + b);

        if (currentSum !== sum) {
            return false;
        }
    }

    for (let row = 0; row < matrix[0].length; row++) {
        let currentSum = 0;

        for (let col = 0; col < matrix.length; col++) {
            currentSum += matrix[col][row];
        }
        if (currentSum !== sum) {
            return false;
        }
    }

    return true;
}

console.log(isMagical([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5],
]));

console.log(isMagical([
    [11, 32, 45],
    [21, 0, 1],
    [21, 1, 1],
]));

console.log(isMagical([
    [1, 0, 0],
    [0, 0, 1],
    [0, 1, 0],
]));
