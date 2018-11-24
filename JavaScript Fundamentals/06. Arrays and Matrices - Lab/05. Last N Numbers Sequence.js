function lastNNumbersSeq(n, k) {
    let result = [1];

    for (let i = 1; i < n; i++) {
        let sum = 0;
        for (let j = 1; j <= k; j++) {
            if (result[i - j]) {
                sum += result[i - j];
            }
        }
        result.push(sum);
    }

    return result.join(' ');
}

console.log(lastNNumbersSeq(6, 3));
console.log(lastNNumbersSeq(8, 2));