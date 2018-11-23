function roadRadar(arr) {
    let [speed, place] = arr;

    let limits = {
        motorway: 130,
        interstate: 90,
        city: 50,
        residential: 20,
    };

    if (place in limits) {
        let maxSpeed = limits[place];
        if (speed > maxSpeed) {
            if (speed - maxSpeed <= 20) {
                return 'speeding';
            } else if (speed - maxSpeed <= 40) {
                return 'excessive speeding';
            } else {
                return 'reckless driving'
            }
        }
    }
    return '';
}

console.log(roadRadar([40, 'city']));
console.log(roadRadar([21, 'residential']));
console.log(roadRadar([120, 'interstate']));
console.log(roadRadar([200, 'motorway']));