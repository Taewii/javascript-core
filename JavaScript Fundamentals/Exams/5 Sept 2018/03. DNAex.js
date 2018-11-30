function dna(input) {
  const regex = /([a-z!@#$?]+).*=(\d+).*-(\d+).*<<([a-z]+)/;
  const charsToRemove = /[!@#$?]/g;

  let DNAs = new Map();

  input.forEach(element => {
    if (element === 'Stop!') {
      printResult();
    }

    const match = regex.exec(element);
    if (match) {
      let [fullMatch, gene, geneLength, geneCount, name] = match;
      gene = gene.replace(charsToRemove, '');
      geneCount = +geneCount;

      if (gene.length === +geneLength) {
        if (!DNAs.has(name)) {
          const data = { name, geneCount };
          DNAs.set(name, data);
        } else {
          DNAs.get(name).geneCount += geneCount;
        }
      }
    }
  });

  function printResult() {
    [...DNAs].sort((a, b) => b[1].geneCount - a[1].geneCount)
      .forEach(entry => console.log(`${entry[0]} has genome size of ${entry[1].geneCount}`));
      return;
  }
}

dna([
  '!@ab?si?di!a@=7--152<<human',
  'b!etu?la@=6--321<<dog',
  '!curtob@acter##ium$=14--230<<dog',
  '!some@thin@g##=9<<human',
  'Stop!',
]);

dna([
  '=12<<cat',
  '!vi@rus?=2--142',
  '?!cur##viba@cter!!=11--800<<cat',
  '!fre?esia#=7--450<<mouse',
  '@pa!rcuba@cteria$=13--351<<mouse',
  '!richel#ia??=8--900<<human',
  'Stop!',
]);

dna([
  '!@ру?би#=4--57<<polecat',
  '?do?@#ri#=4--89<<polecat',
  '=12<<cat',
  '!vi@rus?=2--142',
  '@pa!rcu>ba@cteria$=13--234<<mouse',
  '?!cur##viba@cter!!=11--680<<cat',
  'Stop!',
]);