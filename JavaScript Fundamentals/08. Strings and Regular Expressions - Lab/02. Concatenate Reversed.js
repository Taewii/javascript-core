function concatReversed(arr) {
  return arr.join('').split('').reverse().join('');
}

console.log(concatReversed(['I', 'am', 'student']));
console.log(concatReversed(['race', 'car']));