function listProcessor(input) {
  const processor = (() => {
    let list = [];

    return {
      add: (item) => list.push(item),
      remove: (item) => list = list.filter(x => x !== item),
      print: () => console.log(list.join(','))
    };
  })();

  input.forEach(entry => {
    const [command, element] = entry.split(' ');
    processor[command](element);
  });
}

listProcessor(['add hello', 'add again', 'remove hello', 'add again', 'print']);