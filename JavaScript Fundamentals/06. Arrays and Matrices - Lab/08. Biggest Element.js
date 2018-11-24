function getBiggestElement(matrix) {
    let biggest = Number.NEGATIVE_INFINITY;
    for (const array of matrix) {
        let biggestInArray = Math.max(...array);

        if (biggestInArray > biggest) {
            biggest = biggestInArray;
        }
    }

    return biggest;
}

console.log(getBiggestElement([
    [20, 50, 10],
    [8, 33, 145]
]));

console.log(getBiggestElement([
    [3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]
]));