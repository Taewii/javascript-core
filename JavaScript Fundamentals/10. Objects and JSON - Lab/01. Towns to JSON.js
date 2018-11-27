function parseTownsToJSON(towns) {
  let townsArr = [];
  
  for (let town of towns.slice(1)) {
    let [townName, lat, lng] = town.split(/\s*\|\s*/).filter(x => x !== '');
    
    let townObj = {
      Town: townName,
      Latitude: +lat,
      Longitude: +lng
    };
    
    townsArr.push(townObj);
  }
  
  return JSON.stringify(townsArr);
}

console.log(parseTownsToJSON([
  '| Town | Latitude | Longitude |',
  '| Sofia | 42.696552 | 23.32601 |',
  '| Beijing | 39.913818 | 116.363625 |'
]));