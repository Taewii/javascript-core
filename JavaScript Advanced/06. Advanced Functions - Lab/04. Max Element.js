function getMaxElement(elements) {
  return Math.max.apply(null, elements);
}

console.log(getMaxElement([10, 20, 5]));
console.log(getMaxElement([1, 44, 123, 33]));