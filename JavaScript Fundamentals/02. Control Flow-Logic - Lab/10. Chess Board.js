function chessBoard(n) {
    let html = '<div class="chessboard">\n';

    for (let i = 0; i < n; i++) {
        html += '  <div>\n';
        let color = i % 2 === 0 ? 'black' : 'white';

        for (let j = 0; j < n; j++) {
            html += `    <span class="${color}"></span>\n`;
            color = color === 'white' ? 'black' : 'white';
        }
        html += '  </div>\n'
    }
    html += '</div>\n'

    return html;
}

console.log(chessBoard(3));