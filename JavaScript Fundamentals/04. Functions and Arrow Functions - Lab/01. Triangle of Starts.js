function triangleOfStars(n) {
    let result = '';

    for (let i = 1; i <= n; i++) {
        result += '*'.repeat(i) + '\n';
    }

    for (let i = n - 1; i >= 0; i--) {
        result += '*'.repeat(i) + '\n';
    }

    return result.trim();
}

console.log(triangleOfStars(1));
console.log(triangleOfStars(2));
console.log(triangleOfStars(5));