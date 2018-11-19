function solve(x1, x2, y1, y2) {
    let xd = Math.pow(x1 - y1, 2);
    let yd = Math.pow(x2 - y2, 2);

    console.log(Math.sqrt(xd + yd))
}

solve(2.34, 15.66, -13.55, -2.9985);    