function cityMarkets(input) {
  let towns = new Map();
  
  input.forEach(line => {
    let [town, product, quantity, price] = line.split(/\s->\s|\s:\s/);
    let income = +price * +quantity;
    
    if (!towns.has(town)) {
      towns.set(town, new Map());
    }
    
    if (!towns.get(town).has(product)) {
      towns.get(town).set(product, 0);
    }
    towns.get(town).set(product, towns.get(town).get(product) + income);
  });
  
  towns.forEach((sales, town) => {
    console.log(`Town - ${town}`);
    sales.forEach((income, product) => console.log(`$$$${product} : ${income}`));
  });
}

cityMarkets([
  'Sofia -> Laptops HP -> 200 : 2000',
  'Sofia -> Raspberry -> 200000 : 1500',
  'Sofia -> Audi Q7 -> 200 : 100000',
  'Montana -> Portokals -> 200000 : 1',
  'Montana -> Qgodas -> 20000 : 0.2',
  'Montana -> Chereshas -> 1000 : 0.3',
]);