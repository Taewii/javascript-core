function round(arr) {
    let num = +arr[0];
    let precision = arr[1] > 15 ? 15 : arr[1];

    return +num.toFixed(precision);
}

console.log(round([3.1415926535897932384626433832795, 2]));
console.log(round([10.5, 3]));