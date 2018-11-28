function uniqueSequences(input) {
  let unique = new Map();
  
  input.forEach(sequence => {
    const sorted = JSON.parse(sequence).map(n => +n).sort((a, b) => b - a);
    const str = `[${sorted.join(', ')}]`;
    if (!unique.has(str)) {
      unique.set(str, sorted.length);
    }
  });
  console.log([...unique.keys()].sort((arr1, arr2) => unique.get(arr1) - unique.get(arr2)).join('\n'));
}

uniqueSequences([
  "[-3, -2, -1, 0, 1, 2, 3, 4]",
  "[10, 1, -17, 0, 2, 13]",
  "[4, -3, 3, -2, 2, -1, 1, 0]",
]);

uniqueSequences([
  "[7.14, 7.180, 7.339, 80.099]",
  "[7.339, 80.0990, 7.140000, 7.18]",
  "[7.339, 7.180, 7.14, 80.099]",
]);