function formatCurrency(separator, symbol, symbolFirst, value) {
  let result = Math.trunc(value) + separator;
  result += value.toFixed(2).substr(-2, 2);

  if (symbolFirst) {
    return symbol + ' ' + result;
  }

  return result + ' ' + symbol;
}

function getDollarFormatter(formatter) {
  function dollarFormatter(value) {
    return formatter(',', '$', true, value);
  }

  return dollarFormatter;
}

let dollarFormatter = getDollarFormatter(formatCurrency);
console.log(dollarFormatter(5345)); // $ 5345,00
console.log(dollarFormatter(3.1429)); // $ 3,14
console.log(dollarFormatter(2.709)); // $ 2,71