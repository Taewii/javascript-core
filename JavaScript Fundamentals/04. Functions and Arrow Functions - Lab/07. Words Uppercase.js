function wordsUppercase(text) {
    return text.toUpperCase().split(/\W+/gm).filter(x => x !== '').join(', ');
}

console.log(wordsUppercase('Hi, how are you?'));
console.log(wordsUppercase('hello'));