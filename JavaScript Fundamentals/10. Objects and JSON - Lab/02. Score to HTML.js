function scoreToHtml(json) {
  let html =
    '<table>\n' +
    ' <tr><th>name</th><th>score</th></tr>\n';
  const arr = JSON.parse(json);
  
  for (const obj of arr) {
    html +=
      ` <tr><td>${htmlEscape(obj.name)}` +
      `</td><td>${obj.score}</td></tr>\n`;
  }
  return html + '</table>';
  
  function htmlEscape(text) {
    return text
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }
}

console.log(scoreToHtml('[{"name":"Pesho","score":479},{"name":"Gosho","score":205}]'));
console.log(scoreToHtml('[{"name":"Pesho & Kiro","score":479},{"name":"Gosho, Maria & Viki","score":205}]'));