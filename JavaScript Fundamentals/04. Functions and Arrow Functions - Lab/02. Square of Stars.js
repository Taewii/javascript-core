function squareOfStars(n) {    
    let result = '';

    for (let i = 1; i <= n; i++) {
        result += '* '.repeat(n) + '\n';    
    }

    return result;
}

console.log(squareOfStars(1));
console.log(squareOfStars(2));
console.log(squareOfStars(5));