function addAndRemoveElementsFromAnArray(arr) {
    let number = 0;
    let result = [];

    for (const command of arr) {
        number++;
        if (command === 'add') {
            result.push(number);
        } else {
            result.pop();
        }
    }

    return result.length === 0 ? 'Empty' : result.join('\r\n');
}

console.log(addAndRemoveElementsFromAnArray(['add', 'add', 'add', 'add']));
console.log(addAndRemoveElementsFromAnArray(['add', 'add', 'remove', 'add', 'add']));
console.log(addAndRemoveElementsFromAnArray(['remove', 'remove', 'remove']));