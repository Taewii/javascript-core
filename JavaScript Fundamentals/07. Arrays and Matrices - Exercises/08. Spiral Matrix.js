function createSpiralMatrix(rows, cols) {
    let matrix = [...Array(rows)].map(e => Array(cols));
    let nextValue = 1;
    let row = 0;
    let col = 0;

    while (nextValue <= rows * cols) {
        while (col < cols && !matrix[row][col]) {
            matrix[row][col++] = nextValue++;
        }
        col--;
        row++;

        while (row < rows && !matrix[row][col]) {
            matrix[row++][col] = nextValue++;
        }
        row--;
        col--;
        while (col >= 0 && !matrix[row][col]) {
            matrix[row][col--] = nextValue++;
        }
        col++;
        row--;
        while (row >= 0 && !matrix[row][col]) {
            matrix[row--][col] = nextValue++;
        }
        row++;
        col++;
    }
    console.log(matrix.map(row => row.join(' ')).join('\n'));
}

createSpiralMatrix(5, 5);
createSpiralMatrix(3, 3);