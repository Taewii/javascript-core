let sum = (() => {
  let sum = 0;
  
  let add = (num) => {
    sum += num;
    return add;
  };

  add.toString = () => sum;

  return add;
})();

console.log(sum(2)(4).toString());