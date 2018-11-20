function oddOrEven(a) {
    if (Number.isInteger(a)) {
        return a % 2 == 0 ? 'even' : 'odd';
    } else {
        return 'invalid';
    }
}

console.log(oddOrEven(3.4));