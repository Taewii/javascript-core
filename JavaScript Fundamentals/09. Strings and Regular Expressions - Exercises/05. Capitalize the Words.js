function capitalizeTheWords(words) {
  return words
    .toString()
    .split(/\s+/)
    .map(word => word[0].toUpperCase() + word.substring(1).toLowerCase())
    .join(' ');
}

console.log(capitalizeTheWords('Capitalize these words'));
console.log(capitalizeTheWords('Was that Easy? tRY thIs onE for SiZe!'));