function printArrayWithDelimiter(arr) {
    const delimiter = arr.pop();
    return arr.join(delimiter);
}

console.log(printArrayWithDelimiter(['One', 'Two', 'Three', 'Four', 'Five', '-']));
console.log(printArrayWithDelimiter(['How about no?', 'I', 'will', 'not', 'do', 'it!', '_']));