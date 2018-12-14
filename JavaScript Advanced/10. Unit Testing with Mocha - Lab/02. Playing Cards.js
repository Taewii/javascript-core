function makeCard(face, suit) {
  const faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
  const suits = ['S', 'H', 'D', 'C'];
  const suitUnicode = {
    S: '\u2660',
    H: '\u2665',
    D: '\u2666',
    C: '\u2663',
  };
  
  if (!faces.includes(face) || !suits.includes(suit)) {
    throw Error('face or suit is invalid.');
  }
  
  return {
    toString: () => `${face}${suitUnicode[suit]}`
  }
}

console.log('' + makeCard('A', 'S'));
console.log('' + makeCard('10', 'H'));
console.log('' + makeCard('1', 'C'));