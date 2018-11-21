function composeTag(arr) {
    return `<img src="${arr[0]}" alt="${arr[1]}">`
}

console.log(composeTag(['smiley.gif', 'Smiley Face']));