function solveQuadratic(a, b, c) {
    let d = (b * b) - 4 * a * c;
    
    if (d > 0) {
        let x1 = (-b + Math.sqrt(d)) / (2 * a);
        let x2 = (-b - Math.sqrt(d)) / (2 * a);
        console.log(Math.min(x1, x2));
        console.log(Math.max(x1, x2));
    } else if (d === 0) {
        let x = -b / (2 * a);
        console.log(x);
    } else {
        console.log('No');
    }
}

solveQuadratic(6, 11, -35);
solveQuadratic(1, -12, 36);
solveQuadratic(5, 2, 1);