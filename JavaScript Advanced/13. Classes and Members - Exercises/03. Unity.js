class Rat {
  constructor(name) {
    this.name = name;
    this.unitedRats = [];
  }

  unite(rat) {
    if (rat instanceof Rat) {
      this.unitedRats.push(rat);
    }
  }

  getRats() {
    return this.unitedRats;
  }

  toString() {
    let str = this.name + '\n';
    this.unitedRats.forEach(rat => {
      str += '##' + rat.name + '\n';
    });

    return str.trim();
  }
}

let test = new Rat("Pesho");
console.log(test.toString()); //Pesho

console.log(test.getRats()); //[]

test.unite(new Rat("Gosho"));
test.unite(new Rat("Sasho"));
console.log(test.getRats());
//[ Rat { name: 'Gosho', unitedRats: [] },
//  Rat { name: 'Sasho', unitedRats: [] } ]

console.log(test.toString());
// Pesho
// ##Gosho
// ##Sasho
