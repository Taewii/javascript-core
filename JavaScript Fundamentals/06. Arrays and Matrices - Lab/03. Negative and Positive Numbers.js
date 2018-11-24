function negativeAndPositiveNums(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= 0) {
            result.push(arr[i]);
        } else {
            result.splice(0, 0, arr[i]);
        }
    }

    return result.join('\r\n');
}

console.log(negativeAndPositiveNums([7, -2, 8, 9]));
console.log(negativeAndPositiveNums([3, -2, 0, -1]));