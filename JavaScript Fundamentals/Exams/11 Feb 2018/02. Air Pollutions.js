function pollution(input, commands) {
  let matrix = input.map(row => row.split(' ').map(n => +n));

  commands.forEach(line => {
    let [command, index] = line.split(/\s+/);
    index = +index;

    switch (command) {
      case 'breeze':
        for (let i = 0; i < matrix[index].length; i++) {
          if (matrix[index][i] - 15 < 0) {
            matrix[index][i] = 0;
          } else {
            matrix[index][i] -= 15;
          }
        }
        break;
      case 'gale':
        for (let i = 0; i < matrix.length; i++) {
          if (matrix[i][index] - 20 < 0) {
            matrix[i][index] = 0;
          } else {
            matrix[i][index] -= 20;
          }
        }
        break;
      case 'smog':
        matrix = matrix.map(row => row.map(element => element + index));
        break;
    }
  });

  let pollutedAreas = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] >= 50) {
        pollutedAreas.push(`[${i}-${j}]`);
      }
    }
  }

  if (pollutedAreas.length) {
    console.log(`Polluted areas: ${pollutedAreas.join(', ')}`);
  } else {
    console.log('No polluted areas');
  }
}

pollution([
    "5 7 72 14 4",
    "41 35 37 27 33",
    "23 16 27 42 12",
    "2 20 28 39 14",
    "16 34 31 10 24",
  ],
  ["breeze 1", "gale 2", "smog 25"]
);

pollution([
    "5 7 3 28 32",
    "41 12 49 30 33",
    "3 16 20 42 12",
    "2 20 10 39 14",
    "7 34 4 27 24",
  ],
  [
    "smog 11", "gale 3",
    "breeze 1", "smog 2"
  ]
);

pollution([
    "5 7 2 14 4",
    "21 14 2 5 3",
    "3 16 7 42 12",
    "2 20 8 39 14",
    "7 34 1 10 24",
  ],
  ["breeze 1", "gale 2", "smog 35"]
);