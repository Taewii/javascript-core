function countWordsWithMap(text) {
  let wordCount = new Map();
  
  text
    .toString()
    .toLowerCase()
    .split(/\W/g)
    .filter(word => word !== '')
    .sort()
    .forEach(word => {
        if (wordCount.has(word)) {
          wordCount.set(word, wordCount.get(word) + 1);
        } else {
          wordCount.set(word, 1);
        }
      }
    );
  
  wordCount.forEach((value, key) => console.log(`'${key}' -> ${value} times`));
}

countWordsWithMap('Far too slow, you\'re far too slow.');
countWordsWithMap('JS devs use Node.js for server-side JS.-- JS for devs');