function factory(car) {
  let engine;
  if (car.power <= 90) {
    engine = {power: 90, volume: 1800};
  } else if (car.power <= 120) {
    engine = {power: 120, volume: 2400};
  } else if (car.power <= 200) {
    engine = {power: 200, volume: 3500};
  }

  const wheelSize = car.wheelsize % 2 === 0 ? car.wheelsize - 1 : car.wheelsize;

  return {
    model: car.model,
    engine,
    carriage: {
      type: car.carriage,
      color: car.color,
    },
    wheels: [wheelSize, wheelSize, wheelSize, wheelSize]
  };
}

factory({
  model: 'VW Golf II',
  power: 90,
  color: 'blue',
  carriage: 'hatchback',
  wheelsize: 14
});

factory({
  model: 'Opel Vectra',
  power: 110,
  color: 'grey',
  carriage: 'coupe',
  wheelsize: 17
});