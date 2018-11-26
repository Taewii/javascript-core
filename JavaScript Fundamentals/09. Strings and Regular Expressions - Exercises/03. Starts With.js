function startsWith(text, startsWithString) {
  return text.startsWith(startsWithString);
}

console.log(startsWith('How have you been?', 'how'));
console.log(startsWith('The quick brown fox…', 'The quick brown fox…'));
console.log(startsWith('Marketing Fundamentals, starting 19/10/2016', 'Marketing Fundamentals, sta'));