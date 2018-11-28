function carBrandWithModelsCount(input) {
  let brands = new Map();

  input.forEach(line => {
    const [brand, model, producedCars] = line.split(' | ');

    if (!brands.has(brand)) {
      brands.set(brand, new Map());
      brands.get(brand).set(model, +producedCars);
    } else {
      if (!brands.get(brand).has(model)) {
        brands.get(brand).set(model, 0);
      }
      brands.get(brand).set(model, brands.get(brand).get(model) + +producedCars);
    }
  });

  brands.forEach((models, brand) => {
    console.log(brand);
    models.forEach((producedCars, model) => console.log(`###${model} -> ${producedCars}`));
  });
}

carBrandWithModelsCount([
  'Audi | Q7 | 1000',
  'Audi | Q6 | 100',
  'BMW | X5 | 1000',
  'BMW | X6 | 100',
  'Citroen | C4 | 123',
  'Volga | GAZ-24 | 1000000',
  'Lada | Niva | 1000000',
  'Lada | Jigula | 1000000',
  'Citroen | C4 | 22',
  'Citroen | C5 | 10',
]);