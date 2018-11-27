function extractLowestPrices(input) {
  let products = new Map();
  
  input.forEach(line => {
    let [town, product, price] = line.split(' | ');
    
    if (!products.has(product)) {
      products.set(product, new Map());
    }
    products.get(product).set(town, +price);
  });
  
  products.forEach((townAndPrice, product) => {
    let bestPrice = Number.MAX_VALUE;
    let bestTown = '';
    
    townAndPrice.forEach((price, town) => {
      if (price < bestPrice) {
        bestPrice = price;
        bestTown = town;
      }
    });
    
    console.log(`${product} -> ${bestPrice} (${bestTown})`)
  });
}

extractLowestPrices([
  'Sample Town | Sample Product | 1000',
  'Sample Town | Orange | 2',
  'Sample Town | Peach | 1',
  'Sofia | Orange | 3',
  'Sofia | Peach | 2',
  'New York | Sample Product | 1000.1',
  'New York | Burger | 10',
]);