function parseToHTMLTable(json) {
  let input = json.map(line => JSON.parse(line));
  let html = '<table>\n';

  for (const person of input) {
    html += ' <tr>\n';
    for (const data of Object.values(person)) {
      html += `  <td>${htmlEscape(data)}</td>\n`
    }
    html += ' </tr>\n'
  }
  html += '</table>';
  
  return html;

  function htmlEscape(text) {
    return text.toString()
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }
}

console.log(parseToHTMLTable([
  '{"name":"Pesho","position":"Promenliva","salary":100000}',
  '{"name":"Teo","position":"Lecturer","salary":1000}',
  '{"name":"Georgi","position":"Lecturer","salary":1000}'
]));