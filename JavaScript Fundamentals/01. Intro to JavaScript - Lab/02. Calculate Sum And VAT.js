function solve(nums) {
    let sum = 0;
    for (const num of nums) {
        sum += num;
    }
    let vat = sum * 0.20;
    console.log("sum = " + sum);
    console.log("VAT = " + vat);
    console.log("total = " + (sum + vat))
}

solve(
    [
        1.20,
        2.60,
        3.50
    ]);