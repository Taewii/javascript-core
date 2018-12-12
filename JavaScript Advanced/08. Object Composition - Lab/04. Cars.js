function cars(input) {
  const actions = (() => {
    let cars = {};

    function create(arr) {
      if (arr.length === 2) {
        cars[arr[1]] = {};
      } else {
        cars[arr[1]] = Object.create(cars[arr[3]]);
      }
    }

    function set(arr) {
      cars[arr[1]][arr[2]] = arr[3];
    }

    function print(arr) {
      let result = [];
      for (const key in cars[arr[1]]) {
        result.push(`${key}:${cars[arr[1]][key]}`);
      }
      console.log(result.join(', '));
    }

    return { create, set, print };
  })();

  input.forEach(element => {
    const arr = element.split(' ');
    actions[arr[0]](arr);
  });
}

cars([
  'create c1',
  'create c2 inherit c1',
  'set c1 color red',
  'set c2 model new',
  'print c1',
  'print c2'
]);