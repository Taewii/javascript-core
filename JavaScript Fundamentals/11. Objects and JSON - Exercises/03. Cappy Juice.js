function extractBottles(input) {
  const bottleVolume = 1000;
  let juices = new Map();
  let bottles = new Map();

  input.forEach(line => {
    let [flavor, quantity] = line.split(' => ');
    quantity = +quantity;

    if (!juices.has(flavor)) {
      juices.set(flavor, 0);
    }

    if (juices.get(flavor) + quantity >= bottleVolume) {
      let bottleCount = Math.floor((juices.get(flavor) + quantity) / bottleVolume);
      juices.set(flavor, (juices.get(flavor) + quantity) - bottleVolume * bottleCount)

      if (!bottles.has(flavor)) {
        bottles.set(flavor, 0);
      }

      bottles.set(flavor, bottles.get(flavor) + bottleCount);
    } else {
      juices.set(flavor, juices.get(flavor) + quantity);
    }
  });

  bottles.forEach((bottles, flavor) => console.log(`${flavor} => ${bottles}`))
}

extractBottles([
  'Orange => 2000',
  'Peach => 1432',
  'Banana => 450',
  'Peach => 600',
  'Strawberry => 549'
]);

extractBottles([
  'Kiwi => 234',
  'Pear => 2345',
  'Watermelon => 3456',
  'Kiwi => 4567',
  'Pear => 5678',
  'Watermelon => 6789'
]);