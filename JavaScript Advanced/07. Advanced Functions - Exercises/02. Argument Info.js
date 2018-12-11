function argumentInfo(args) {
  let obj = {};

  for (let i = 0; i < arguments.length; i++) {
    let type = typeof arguments[i];
    console.log(`${type}: ${arguments[i]}`);

    if (!obj.hasOwnProperty(type)) {
      obj[type] = 0;
    }
    obj[type]++;
  }

  Object.keys(obj).sort((a, b) => obj[b] - obj[a]).forEach(entry => console.log(`${entry} = ${obj[entry]}`));
}

argumentInfo('cat', 42, function () { console.log('Hello world!'); });