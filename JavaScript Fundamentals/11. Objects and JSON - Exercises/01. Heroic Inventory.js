function heroicInventory(input) {
  let heroes = [];

  for (let line of input) {
    let [heroName, heroLevel, inventory] = line.split(/ \/ /);
    let heroItems = !inventory ? [] : inventory.split(', ');

    let hero = {
      name: heroName,
      level: +heroLevel,
      items: heroItems,
    };

    heroes.push(hero);
  }

  return JSON.stringify(heroes);
}

console.log(heroicInventory([
  'Isacc / 25 / Apple, GravityGun',
  'Derek / 12 / BarrelVest, DestructionSword',
  'Hes / 1 / Desolator, Sentinel, Antara',
]));

console.log(heroicInventory(['Jake / 1000 / Gauss, HolidayGrenade']));