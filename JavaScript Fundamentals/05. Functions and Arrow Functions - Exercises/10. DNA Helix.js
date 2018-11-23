function dnaHelix(length) {
    const pairs = [
        ['A', 'T'],
        ['C', 'G'],
        ['T', 'T'],
        ['A', 'G'],
        ['G', 'G'],
    ];
    const fillers = [
        ['**', '', '**'],
        ['*', '--', '*'],
        ['', '----', ''],
        ['*', '--', '*'],
    ];

    for (let line = 0; line < length; line++) {
        const pair = pairs[line % pairs.length];
        const filler = fillers[line % fillers.length];
        console.log(filler[0] + pair[0] + filler[1] + pair[1] + filler[2]);
    }
}

dnaHelix(4);
dnaHelix(10);