function solve(text, char) {
    let count = 0;
    for (let i = 0; i < text.length; i++) {
        if (text[i] == char) {
            count++;
        }
    }
    console.log(count);
}

solve('hello', 'l');