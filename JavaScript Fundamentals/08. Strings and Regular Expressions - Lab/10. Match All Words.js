function matchAllWords(text) {
  let words = [];
  const regexPatter = /\w+/gm;
  
  let word;
  while ((word = regexPatter.exec(text))) {
    words.push(word);
  }
  
  return words.join('|');
  
  // second solution
  // return text.match(/\w+/gm).join('|');
}

console.log(matchAllWords('A Regular Expression needs to have the global flag in order to match all occurrences in the text'));
console.log(matchAllWords('_(Underscores) are also word characters'));