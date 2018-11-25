function printLetters(str) {
  str.split("").forEach((str, i) => console.log(`str[${i}] -> ${str}`));
}

printLetters('Hello, World!');
printLetters('SoftUni');