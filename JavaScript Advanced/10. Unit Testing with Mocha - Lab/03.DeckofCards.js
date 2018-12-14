function printDeckOfCards(deck) {
  let cards = [];
  
  for (const card of deck) {
    const face = card.substring(0, card.length - 1);
    const suit = card.substr(card.length - 1);
    
    try {
      cards.push(makeCard(face, suit).toString());
    } catch (e) {
      console.log(`Invalid card: ${face + suit}`);
      return;
    }
  }
  
  console.log(cards.join(' '));
  
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
}

printDeckOfCards(['AS', '10D', 'KH', '2C']);
printDeckOfCards(['5S', '3D', 'QD', '1C']);