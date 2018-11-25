function escapeTags(input) {
  let html = '<ul>\n';
  
  const lessThanRegEx = new RegExp('\<', 'g');
  const greaterThanRegEx = new RegExp('\>', 'g');
  const ampersandRegEx = new RegExp('\&', 'g');
  const quoteRegEx = new RegExp('\"', 'g');
  
  input.forEach(line => {
    line = line
      .replace(ampersandRegEx, '&amp;')
      .replace(lessThanRegEx, '&lt;')
      .replace(greaterThanRegEx, '&gt;')
      .replace(quoteRegEx, '&quot;');
    
    html += `  <li>${line}</li>\n`;
  });
  html += '</ul>';
  
  return html;
}

console.log(escapeTags(['<b>unescaped text</b>', 'normal text']));
console.log(escapeTags(['<div style=\"color: red;\">Hello, Red!</div>', '<table><tr><td>Cell 1</td><td>Cell 2</td><tr>']));