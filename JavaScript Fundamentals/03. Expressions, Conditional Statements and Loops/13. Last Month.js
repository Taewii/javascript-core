function lastMonth(arr) {
    let date = new Date(arr[2], arr[1] - 1, 0);
    return date.getDate();
}

console.log(lastMonth([17, 3, 2002]));
console.log(lastMonth([13, 12, 2004]));