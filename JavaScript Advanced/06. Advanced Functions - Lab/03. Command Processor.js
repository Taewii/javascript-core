function commandProcessor(input) {
  let processor = (function () {
    let text = '';

    return {
      append: (str) => text += str,
      removeStart: (count) => text = text.slice(count),
      removeEnd: (count) => text = text.slice(0, text.length - count),
      print: () => {
        console.log(text);
      }
    };
  })();

  input.forEach(line => {
    const [command, parameter] = line.split(' ');
    processor[command](parameter);
  });
}

commandProcessor([
  'append hello',
  'append again',
  'removeStart 3',
  'removeEnd 4',
  'print'
]);

commandProcessor([
  'append 123',
  'append 45',
  'removeStart 2',
  'removeEnd 1',
  'print'
]);