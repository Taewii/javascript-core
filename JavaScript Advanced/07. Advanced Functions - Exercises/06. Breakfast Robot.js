let solution = (() => {
  let ingredients = {
    protein: 0,
    carbohydrate: 0,
    fat: 0,
    flavour: 0,
  };

  let meals = {
    apple: {carbohydrate: 1, flavour: 2},
    coke: {carbohydrate: 10, flavour: 20},
    burger: {carbohydrate: 5, fat: 7, flavour: 3},
    omlet: {protein: 5, fat: 1, flavour: 1},
    cheverme: {protein: 10, carbohydrate: 10, fat: 10, flavour: 10},
  };
  
  const robot = {
      restock: (item, quantity) => {
        ingredients[item] += quantity;
        return 'Success';
      },
      prepare: (item, quantity) => {
        for (const ingredient of Object.keys(meals[item])) {
          const needed = meals[item][ingredient] * quantity;
          if (needed > ingredients[ingredient]) {
            return `Error: not enough ${ingredient} in stock`;
          }
        }

        for (const ingredient of Object.keys(meals[item])) {
          const needed = meals[item][ingredient] * quantity;
          ingredients[ingredient] -= needed;
        }

        return 'Success';
      },
      report: () => {
        return `protein=${ingredients.protein} carbohydrate=${ingredients.carbohydrate} fat=${ingredients.fat} flavour=${ingredients.flavour}`;
      }
    };

  return (input) => {
    let [command, item, quantity] = input.split(' ');
    return robot[command](item, +quantity);
  };
})();

console.log(solution('restock carbohydrate 10'));
console.log(solution('restock flavour 10'));
console.log(solution('prepare apple 1'));
console.log(solution('restock fat 10'));
console.log(solution('prepare burger 1'));
console.log(solution('report'));

console.log(solution('prepare cheverme 1'));
console.log(solution('restock protein 10'));
console.log(solution('prepare cheverme 1'));
console.log(solution('restock carbohydrate 10'));
console.log(solution('prepare cheverme 1'));
console.log(solution('restock fat 10'));
console.log(solution('prepare cheverme 1'));
console.log(solution('restock flavour 10'));
console.log(solution('prepare cheverme 1'));
console.log(solution('report'));

