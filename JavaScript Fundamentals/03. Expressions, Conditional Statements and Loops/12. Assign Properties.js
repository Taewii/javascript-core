function assignProperties(arr) {
    let person = {
        [arr[0]]: arr[1],
        [arr[2]]: arr[3],
        [arr[4]]: arr[5],
    };

    return person;
}

console.log(assignProperties(['name', 'Pesho', 'age', '23', 'gender', 'male']));
console.log(assignProperties(['ssid', '90127461', 'status', 'admin', 'expires', '600']));