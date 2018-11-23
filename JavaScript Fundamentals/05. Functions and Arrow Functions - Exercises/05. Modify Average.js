function modifyAvg(num) {
    function getAvg(num) {
        let sum = 0;
        let nums = num.toString().split('');

        for (const num1 of nums) {
            sum += +num1;
        }
        return sum / nums.length;
    }

    while (getAvg(num) <= 5) {
        num += '9';
    }
    return num;
}

console.log(modifyAvg(101));
console.log(modifyAvg(5835));