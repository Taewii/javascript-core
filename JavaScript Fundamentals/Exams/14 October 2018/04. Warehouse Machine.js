function warehouse(input) {
  let warehouse = new Map();

  input.forEach(line => {
    let [command, brandName, coffeeName, expireDate, quantity] = line.split(', ');
    quantity = +quantity;

    switch (command) {
      case 'IN':
        if (!warehouse.has(brandName)) {
          warehouse.set(brandName, new Map());
        }

        if (!warehouse.get(brandName).has(coffeeName)) {
          const data = {
            coffeeName,
            expireDate,
            quantity
          }

          warehouse.get(brandName).set(coffeeName, data);
        } else {
          let data = warehouse.get(brandName).get(coffeeName);
          const d1 = new Date(data.expireDate);
          const d2 = new Date(expireDate);

          if (d1.getTime() < d2.getTime()) {
            data.expireDate = expireDate;
            data.quantity = quantity;
          } else if (d1.getTime() === d2.getTime()) {
            data.quantity += quantity;
          }
        }
        break;
      case 'REPORT':
        console.log('>>>>> REPORT! <<<<<');
        warehouse.forEach((coffees, brand) => {
          console.log(`Brand: ${brand}:`);
          coffees.forEach((data, coffeeName) => {
            console.log(`-> ${coffeeName} -> ${data.expireDate} -> ${data.quantity}.`);
          });
        });
        break;
      case 'INSPECTION':
        console.log('>>>>> INSPECTION! <<<<<');
        [...warehouse].sort((a, b) => a[0].localeCompare(b[0]))
          .forEach((entry) => {
            console.log(`Brand: ${entry[0]}:`);
            [...entry[1]].sort((a, b) => b[1].quantity - a[1].quantity)
              .forEach(entry => {
                console.log(`-> ${entry[1].coffeeName} -> ${entry[1].expireDate} -> ${entry[1].quantity}.`)
              });
          });
        break;
      case 'OUT':
        if (warehouse.has(brandName) && warehouse.get(brandName).has(coffeeName)) {
          let data = warehouse.get(brandName).get(coffeeName);
          const d1 = new Date(data.expireDate);
          const d2 = new Date(expireDate);

          if (d1.getTime() > d2.getTime()) {
            if (data.quantity > quantity) {
              data.quantity -= quantity;
            }
          }
        }
        break;
    }
  });
}

warehouse([
  "IN, Batdorf & Bronson, Espresso, 2025-05-25, 20",
  "IN, Folgers, Black Silk, 2023-03-01, 14",
  "IN, Lavazza, Crema e Gusto, 2023-05-01, 5",
  "IN, Lavazza, Crema e Gusto, 2023-05-02, 5",
  "IN, Folgers, Black Silk, 2022-01-01, 10",
  "IN, Lavazza, Intenso, 2022-07-19, 20",
  "OUT, Dallmayr, Espresso, 2022-07-19, 5",
  "OUT, Dallmayr, Crema, 2022-07-19, 5",
  "OUT, Lavazza, Crema e Gusto, 2020-01-28, 2",
  "REPORT",
  "INSPECTION",
]);