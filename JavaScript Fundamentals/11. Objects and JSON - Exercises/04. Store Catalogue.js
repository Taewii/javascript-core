function catalogue(input) {
  let catalogue = new Map();

  input.forEach(line => {
    const [product, price] = line.split(' : ');
    const letter = product.charAt(0);
    const prod = {product, price};

    if (!catalogue.has(letter)) {
      catalogue.set(letter, []);
    }
    catalogue.get(letter).push(prod);
  });


  catalogue = new Map([...catalogue.entries()].sort((a, b) => a[0].localeCompare(b[0])));

  catalogue.forEach((items, letter) => {
    console.log(letter);
    
    items.sort((a, b) => a.product.localeCompare(b.product))
    .forEach(item => {
      console.log(`  ${item.product}: ${item.price}`);
    })
  });
}

catalogue([
  'Appricot : 20.4',
  'Fridge : 1500',
  'TV : 1499',
  'Deodorant : 10',
  'Boiler : 300',
  'Apple : 1.25',
  'Anti-Bug Spray : 15',
  'T-Shirt : 10',
]);

catalogue([
  'Banana : 2',
  'Rubic\'s Cube : 5',
  'Raspberry P : 4999',
  'Rolex : 100000',
  'Rollon : 10',
  'Rali Car : 2000000',
  'Pesho : 0.000001',
  'Barrel : 10',
]);