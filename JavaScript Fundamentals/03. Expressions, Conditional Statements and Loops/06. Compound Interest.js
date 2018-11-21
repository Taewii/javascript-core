function calcInterest([p, i, n, t]) {
    i = i / 100;
    n = 12 / n;

    let interest = p * Math.pow((1 + i / n), n * t);
    return interest.toFixed(2);
}

console.log(calcInterest([1500, 4.3, 3, 6]));
console.log(calcInterest([100000, 5, 12, 25]));