function rotateArray(arr) {
    const rotations = arr.pop();

    for (let i = 0; i < rotations % arr.length; i++) {
        const last = arr[arr.length - 1];

        for (let j = arr.length - 1; j > 0; j--) {
            arr[j] = arr[j - 1];
        }
        arr[0] = last;
    }

    return arr.join(' ');
}

console.log(rotateArray(['1', '2', '3', '4', '2']));
console.log(rotateArray(['Banana', 'Orange', 'Coconut', 'Apple', '15']));