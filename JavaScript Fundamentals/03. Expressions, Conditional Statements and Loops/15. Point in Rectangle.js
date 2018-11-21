function pointInRect(arr) {
    let [x, y, xMin, xMax, yMin, yMax] = arr;

    if (x >= xMin && x <= xMax && y >= yMin && y <= yMax) {
        return 'inside';
    } else {
        return 'outside';
    }
}

console.log(pointInRect([8, -1, 2, 12, -3, 3]));
console.log(pointInRect([12.5, -1, 2, 12, -3, 3]));