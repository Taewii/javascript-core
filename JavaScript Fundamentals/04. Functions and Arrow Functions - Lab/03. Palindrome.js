function palindrome(input) {
    return input === input.split("").reverse().join("");
}

console.log(palindrome('haha'));
console.log(palindrome('racecar'));
console.log(palindrome('unitinu'));