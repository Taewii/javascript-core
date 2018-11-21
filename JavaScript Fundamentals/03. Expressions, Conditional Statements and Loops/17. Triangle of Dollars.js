function createTriangle(n) {
    let result = '';

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            result += '$';
        }
        result += '\n';
    }

    return result;
}

console.log(createTriangle(3));