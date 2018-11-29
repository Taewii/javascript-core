function coffeeMachine(input) {
  let income = 0;

  input.forEach(line => {
    let tokens = line.split(', ');
    let coins = +tokens[0];
    let price = 0;

    if (tokens[1] === 'coffee') {
      if (tokens[2] === 'caffeine') {
        price = 0.80;
      } else {
        price = 0.90;
      }

      if (tokens[3] === 'milk') {
        price = +(price * 1.10).toFixed(1);
      } else {
        if (+tokens[3] !== 0) {
          price += 0.10;
        }
      }

      if (tokens[4] && +tokens[4] !== 0) {
        price += 0.10;
      }
    } else {
      price = 0.80;

      if (tokens[2] === 'milk') {
        price = +(price * 1.10).toFixed(1);
      } else {
        if (+tokens[2] !== 0) {
          price += 0.10;
        }
      }

      if (tokens[3] && +tokens[3] !== 0) {
        price += 0.10;
      }
    }

    if (coins - price >= 0) {
      console.log(`You ordered ${tokens[1]}. Price: ${price.toFixed(2)}$ Change: ${(coins - price).toFixed(2)}$`);
      income += price;
    } else {
      console.log(`Not enough money for ${tokens[1]}. Need ${(price - coins).toFixed(2)}$ more.`);
    }
  });

  console.log(`Income Report: ${income.toFixed(2)}$`);
}

coffeeMachine([
  '1.00, coffee, caffeine, milk, 4', '0.40, tea, milk, 2',
  '1.00, coffee, decaf, 0',
]);

coffeeMachine([
  '8.00, coffee, decaf, 4',
  '1.00, tea, 2'
]);