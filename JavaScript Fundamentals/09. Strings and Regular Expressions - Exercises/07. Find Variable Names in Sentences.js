function extractVariables(text) {
  return text
    .toString()
    .match(/\b_([A-Za-z0-9]+)\b/gm)
    .map(m => m.substr(1))
    .join(',');
}

console.log(extractVariables('The _id and _age variables are both integers.'));
console.log(extractVariables('Calculate the _area of the _perfectRectangle object.'));
console.log(extractVariables('__invalidVariable _evenMoreInvalidVariable_ _validVariable'));