function sortArray(arr) {
    return arr.sort((a, b) => {
        let result = a.length - b.length;
        if (result === 0) {
            result = a.localeCompare(b);
        }
        return result;
    }).join('\r\n');
}

console.log(sortArray(['alpha', 'beta', 'gamma']));
console.log(sortArray(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']));
console.log(sortArray(['test', 'Deny', 'omen', 'Default']));
