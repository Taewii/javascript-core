function extractText(text) {
  let openingParentheses = text.indexOf('(');
  let closingParentheses = text.indexOf(')', openingParentheses);
  let result = [];
  
  //having '(foo(test)foo)' will break it
  while (openingParentheses !== -1 && closingParentheses !== -1) {
    result.push((text.substring(openingParentheses + 1, closingParentheses)));
    openingParentheses = text.indexOf('(', openingParentheses + 1);
    closingParentheses = text.indexOf(')', closingParentheses + 1);
  }
  
  return result.join(', ');
}

console.log(extractText('Rakiya (Bulgarian brandy) is self-made liquor (alcoholic drink)'));