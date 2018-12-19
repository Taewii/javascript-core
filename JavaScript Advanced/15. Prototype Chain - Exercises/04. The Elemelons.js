function solve() {
  const elements = ['Water', 'Fire', 'Earth', 'Air'];

  class Melon {
    constructor(weight, melonSort) {
      if (new.target === Melon) {
        throw new TypeError('Abstract class cannot be instantiated directly');
      }

      this.weight = weight;
      this.melonSort = melonSort;
      this._elementIndex = this.weight * this.melonSort.length;
      this.element = '';
    }

    get elementIndex() {
      return this._elementIndex;
    }

    toString() {
      return `Element: ${this.element}\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`;
    }
  }

  class Watermelon extends Melon {
    constructor(weight, melonSort) {
      super(weight, melonSort);
      this.element = 'Water';
    }
  }

  class Firemelon extends Melon {
    constructor(weight, melonSort) {
      super(weight, melonSort);
      this.element = 'Fire';
    }
  }

  class Earthmelon extends Melon {
    constructor(weight, melonSort) {
      super(weight, melonSort);
      this.element = 'Earth';
    }
  }

  class Airmelon extends Melon {
    constructor(weight, melonSort) {
      super(weight, melonSort);
      this.element = 'Air';
    }
  }

  class Melolemonmelon extends Firemelon {
    constructor(weight, melonSort) {
      super(weight, melonSort);
      this.element = elements[0];
      this.index = 0;
    }

    morph() {
      this.element = elements[++this.index % 4];
    }
  }

  return {
    Melon,
    Watermelon,
    Firemelon,
    Earthmelon,
    Airmelon,
    Melolemonmelon
  };
}

let melons = solve();
let test = new melons.Melon(100, "Test");
//Throws error

let watermelon = new melons.Watermelon(12.5, "Kingsize");
console.log(watermelon.toString());

// Element: Water
// Sort: Kingsize
// Element Index: 100
