function travelTime(input) {
  let countries = new Map();

  input.forEach(line => {
    let [country, city, cost] = line.split(' > ');
    city = city[0].toUpperCase() + city.slice(1);
    cost = +cost;

    if (!countries.has(country)) {
      countries.set(country, new Map());
    }

    if (!countries.get(country).has(city)) {
      countries.get(country).set(city, cost);
    }

    if (countries.get(country).get(city) > cost) {
      countries.get(country).set(city, cost);
    }
  });

  [...countries].sort((a, b) => a[0].localeCompare(b[0])).forEach(entry => {
    let result = [`${entry[0]} ->`];
    [...entry[1]].sort((a, b) => a[1] - b[1]).forEach(c => result.push(`${c[0]} -> ${c[1]}`));

    console.log(result.join(' '));
  });
}

travelTime([
  'Bulgaria > Sofia > 25000',
  'aaa > Sofia > 1',
  'aa > Orgrimar > 0',
  'Albania > Tirana > 25000',
  'zz > Aarna > 25010',
  'Bulgaria > Lukovit > 10',
]);

travelTime([
  "Bulgaria > Sofia > 500",
  "Bulgaria > Sopot > 800",
  "France > Paris > 2000",
  "Albania > Tirana > 1000",
  "Bulgaria > Sofia > 200",
]);