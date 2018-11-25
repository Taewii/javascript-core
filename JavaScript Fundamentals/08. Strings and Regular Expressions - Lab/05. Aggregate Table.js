function aggregateTable(towns) {
  let sum = 0;
  let allTowns = [];
  
  towns.forEach(town => {
    let tokens = town.split('|').filter(t => t !== '').map(t => t.trim());
    allTowns.push(tokens[0]);
    sum += +tokens[1];
  });
  
  console.log(allTowns.join(', '));
  console.log(sum);
}

aggregateTable([
  '| Sofia           | 300',
  '| Veliko Tarnovo  | 500',
  '| Yambol          | 275',
]);