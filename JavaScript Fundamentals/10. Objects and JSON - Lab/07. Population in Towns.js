function countPopulation(input) {
  let cities = {};
  
  input.forEach(line => {
    let [city, population] = line.split(' <-> ');
    
    if (cities[city]) {
      cities[city] += +population;
    } else {
      cities[city] = +population;
    }
  });
  
  Object.entries(cities).forEach(([key, value] = line) => console.log(`${key} : ${value}`));
}

countPopulation([
  'Sofia <-> 1200000',
  'Montana <-> 20000',
  'New York <-> 10000000',
  'Washington <-> 2345000',
  'Las Vegas <-> 1000000',
]);

countPopulation([
  'Istanbul <-> 100000',
  'Honk Kong <-> 2100004',
  'Jerusalem <-> 2352344',
  'Mexico City <-> 23401925',
  'Istanbul <-> 1000',
]);