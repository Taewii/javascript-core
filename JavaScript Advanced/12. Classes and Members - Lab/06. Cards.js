const classDefinition = (() => {
  const Faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
  const Suits = {
    CLUBS: '\u2663',
    DIAMONDS: '\u2666',
    HEARTS: '\u2665',
    SPADES: '\u2660',
  };

  class Card {
    constructor(face, suit) {
      this.face = face;
      this.suit = suit;
    }

    get face() {
      return this._face;
    }

    set face(inputFace) {
      if (!Faces.includes(inputFace)) {
        throw new Error('Invalid face.');
      }
      this._face = inputFace;
    }

    get suit() {
      return this._suit;
    }

    set suit(inputSuit) {
      if (!Object.values(Suits).includes(inputSuit)) {
        throw new Error('Invalid suit.');
      }
      this._suit = inputSuit;
    }
  }

  return {
    Suits,
    Card,
  };
})();

const Card = classDefinition.Card;
const Suits = classDefinition.Suits;

let card = new Card('Q', Suits.CLUBS);
card.face = 'A';
card.suit = Suits.DIAMONDS;
let card2 = new Card('1', Suits.DIAMONDS); // Error