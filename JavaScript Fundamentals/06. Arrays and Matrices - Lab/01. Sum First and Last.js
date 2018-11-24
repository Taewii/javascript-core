function sumFirstAndLast(arr) {
    return +arr[0] + +arr[arr.length - 1];
}

console.log(sumFirstAndLast(['20', '30', '40']));
console.log(sumFirstAndLast(['5', '10']));