function getWordOccurrences(text, word) {
  const regex = new RegExp(`\\b${word}\\b`, 'gmi');
  let matches = text.toString().match(regex);
  
  if (matches) {
    return matches.length;
  } else {
    return 0;
  }
}

console.log(getWordOccurrences('The waterfall was so high, that the child couldn’t see its peak.', 'the'));
console.log(getWordOccurrences('How do you plan on achieving that? How? How can you even think of that?', 'how'));
console.log(getWordOccurrences('There was one. Therefore I bought it. I wouldn’t buy it otherwise.', 'there'));