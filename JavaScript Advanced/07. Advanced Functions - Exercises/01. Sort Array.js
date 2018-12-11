function sortArray(arr, order) {
  const ascendingComparator = (a, b) => a - b;
  const descendingComparator = (a, b) => b - a;

  const comparators = {
    'asc': ascendingComparator,
    'desc': descendingComparator
  };

  return arr.sort(comparators[order]);
}

console.log(sortArray([14, 7, 17, 6, 8], 'asc'));
console.log(sortArray([14, 7, 17, 6, 8], 'desc'));