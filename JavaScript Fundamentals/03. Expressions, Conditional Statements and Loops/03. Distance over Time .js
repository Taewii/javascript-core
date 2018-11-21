function distanceOverTime(arr) {
    let speedA = arr[0] * 1000;
    let speedB = arr[1] * 1000
    let time = arr[2] / 3600;
    let distance = Math.abs((speedA - speedB) * time);
    return distance;
}

console.log(distanceOverTime([0, 60, 3600]))
console.log(distanceOverTime([11, 10, 120]))
console.log(distanceOverTime([5, -5, 40]))