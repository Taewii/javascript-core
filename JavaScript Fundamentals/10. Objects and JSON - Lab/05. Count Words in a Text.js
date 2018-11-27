function countWordsInText(text) {
  let wordCount = {};
  
  text.toString()
    .split(/\W/g)
    .filter(word => word !== '')
    .forEach(word => wordCount[word] = wordCount[word] ? wordCount[word] + 1 : wordCount[word] = 1);
  
  return JSON.stringify(wordCount);
}

console.log(countWordsInText('Far too slow, you\'re far too slow.'));
console.log(countWordsInText('JS devs use Node.js for server-side JS.-- JS for devs'));