function sumByTown(input) {
  let obj = {};
  
  for (let i = 0; i < input.length; i += 2) {
    if (obj[input[i]]) {
      obj[input[i]] += +input[i + 1];
    } else {
      obj[input[i]] = +input[i + 1];
    }
  }
  
  return JSON.stringify(obj);
}

console.log(sumByTown([
  'Sofia', '20',
  'Varna', '3',
  'Sofia', '5',
  'Varna', '4',
]));

console.log(sumByTown([
  'Sofia', '20',
  'Varna', '3',
  'sofia', '5',
  'varna', '4',
]));