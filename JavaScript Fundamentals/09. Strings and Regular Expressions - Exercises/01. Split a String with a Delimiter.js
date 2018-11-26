function splitStringWithDelimiter(string, delimiter) {
  return string.toString().split(delimiter).join('\r\n');
}

console.log(splitStringWithDelimiter('One-Two-Three-Four-Five', '-'));
console.log(splitStringWithDelimiter('http://platform.softuni.bg', '.'));