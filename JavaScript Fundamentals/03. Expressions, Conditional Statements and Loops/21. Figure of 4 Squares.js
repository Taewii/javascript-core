function figure(n) {
    if (n === 2) {
        return '+++'; //
    }

    let figure = '';
    let dashes = Number.parseInt((n * 2 - 3) / 2);
    let topBotMid = '+' + '-'.repeat(dashes) + '+' + '-'.repeat(dashes) + '+' + '\n';
    let middle = '|' + ' '.repeat(dashes) + '|' + ' '.repeat(dashes) + '|' + '\n';
    let repeatTimes = n % 2 === 0 ? (n - 4) / 2 : (n - 3) / 2;

    figure += topBotMid;

    for (let i = 0; i < repeatTimes; i++) {
        figure += middle;
    }
    figure += topBotMid;

    for (let i = 0; i < repeatTimes; i++) {
        figure += middle;
    }
    figure += topBotMid;

    return figure;
}


console.log(figure(4));
console.log(figure(5));
console.log(figure(6));
console.log(figure(7));