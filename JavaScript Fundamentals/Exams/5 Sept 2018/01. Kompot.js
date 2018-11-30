 function kompot(fruits) {
  let plums = 0;
  let peaches = 0;
  let cherries = 0;
  let other = 0;

  fruits.forEach(tokens => {
    const [fruit, quantityInKg] = tokens.split(/\s+/);
    const quantity = quantityInKg * 1000;

    switch (fruit) {
      case 'plum': plums += quantity; break;
      case 'peach': peaches += quantity; break;
      case 'cherry': cherries += quantity; break;
      default: other += quantity; break;
    }
  });

  const plumKompots = Math.floor((plums / 20) / 10);
  const peachKompots = Math.floor((peaches / 140) / 2.5);
  const cherryKompots = Math.floor((cherries / 9) / 25);
  const rakiya = (other / 1000) * 0.200;
  
  console.log(`Cherry kompots: ${cherryKompots}`);
  console.log(`Peach kompots: ${peachKompots}`);
  console.log(`Plum kompots: ${plumKompots}`);
  console.log(`Rakiya liters: ${rakiya.toFixed(2)}`);
}

kompot([
  'cherry 1.2',
  'peach 2.2',
  'plum 5.2',
  'peach 0.1',
  'cherry 0.2',
  'cherry 5.0',
  'plum 10',
  'cherry 20.0',
  'papaya 20'
]);

kompot([
  'apple 6',
  'peach 25.158',
  'strawberry 0.200',
  'peach 0.1',
  'banana 1.55',
  'cherry 20.5',
  'banana 16.8',
  'grapes 205.65', 
  'watermelon 20.54'
]);