function firstAndLastNNumbers([n, ...numbers]) {
    let start = numbers.slice(0, n);
    let ending = numbers.slice(-n, n + 1);

    console.log(start.join(' '));
    console.log(ending.join(' '));
}

firstAndLastNNumbers([2, 7, 8, 9]);
firstAndLastNNumbers([3, 6, 7, 8, 9]);