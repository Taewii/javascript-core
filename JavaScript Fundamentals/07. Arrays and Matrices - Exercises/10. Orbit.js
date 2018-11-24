function orbit([w, h, x, y]) {
    let matrix = [];

    for (let i = 0; i < h; i++) {
        let arr = [];
        for (let j = 0; j < w; j++) {
            arr.push('')
        }
        matrix.push(arr);
    }

    for (let row = 0; row < w; row++) {
        for (let col = 0; col < h; col++) {
            //I didn't do this... not smart enough
            matrix[row][col] = Math.max(Math.abs(row - x), Math.abs(col - y)) + 1;
        }
    }

    return matrix.map(row => row.join(' ')).join('\n');
}

console.log(orbit([4, 4, 0, 0]));
console.log(orbit([5, 5, 2, 2]));
console.log(orbit([3, 3, 2, 2]));