function endsWith(text, endsWithString) {
  return text.endsWith(endsWithString);
}

console.log(endsWith('This sentence ends with fun?', 'fun?'));
console.log(endsWith('This is Houston, we have…', 'We have…'));
console.log(endsWith('The new iPhone has no headphones jack.', 'o headphones jack.'));