function convertUnits(inches) {
    let feet = Number.parseInt(inches / 12);
    let inch = inches - (12 * feet);

    return `${feet}'-${inch}"`;
}

console.log(convertUnits(36));
console.log(convertUnits(55));
console.log(convertUnits(11));