function colorfulNumbers(n) {
    let html = '<ul>\n';
    for (let i = 1; i <= n; i++) {
        const color = (i % 2 !== 0) ? 'green' : 'blue';
        html += `  <li><span style='color:${color}'>${i}</span></li>\n`;
    }
    html += '</ul>';
    return html;
}

console.log(colorfulNumbers(10));   