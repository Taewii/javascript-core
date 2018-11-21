function multiplicationTable(n) {
    html = '<table border="1">\n';

    html += '  <tr><th>x</th>';
    for (let i = 1; i <= n; i++) {
        html += `<th>${i}</th>`;
    }
    html += '</tr>\n';

    for (let i = 1; i <= n; i++) {
        html += `  <tr><th>${i}</th>`;
        for (let j = 1; j <= n; j++) {
            html += `<td>${j * i}</td>`;
        }
        html += '</tr>\n';
    }

    html += '</table>';
    return html;
}

console.log(multiplicationTable(5));