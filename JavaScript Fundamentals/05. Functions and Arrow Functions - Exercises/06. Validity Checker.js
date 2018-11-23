function validityChecker([x1, y1, x2, y2]) {
    const o = {x: 0, y: 0};
    const a = {x: +x1, y: +y1};
    const b = {x: +x2, y: +y2};

    const getDistance = (pointA, pointB) => {
        return Math.sqrt(
            Math.pow(pointB.x - pointA.x, 2) +
            Math.pow(pointB.y - pointA.y, 2)
        );
    };

    const isDistanceValid = (pointA, pointB) => {
        return Number.isInteger(getDistance(pointA, pointB));
    };

    const pointToString = (point) => {
        return `{${point.x}, ${point.y}}`;
    };

    const validatePoints = (pointA, pointB) => {
        const isValid = isDistanceValid(pointA, pointB) ? 'valid' : 'invalid';
        console.log(`${pointToString(pointA)} to ${pointToString(pointB)} is ${isValid}`);
    };

    validatePoints(a, o);
    validatePoints(b, o);
    validatePoints(a, b);
}

validityChecker([3, 0, 0, 4]);
validityChecker([2, 1, 1, 1]);