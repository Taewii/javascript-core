function solve(w, h, W, H) {
    let [s1, s2, s3] = [w * h, W * H, Math.min(w, W) * Math.min(h, H)];
    console.log(s1 + s2 - s3);
}

solve(2, 4, 5, 3);