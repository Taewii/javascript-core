class LineManager {
  constructor(stops) {
    this.stops = stops.map(stop => {
      if (!(Object.keys(stop).length === 2 &&
        stop.name &&
        stop.timeToNext >= 0 &&
        typeof stop.name === 'string' &&
        typeof stop.timeToNext === 'number')) {
        throw new Error('Invalid input');
      }
      return stop;
    });
    this.index = 0;
    this.duration = 0;
    this.delay = 0;
  }
  
  get atDepot() {
    return this.index === this.stops.length - 1;
  }
  
  get currentDelay() {
    return this.delay;
  }
  
  get nextStopName() {
    if (this.atDepot) {
      return 'At depot.';
    }
    return this.stops[this.index + 1].name;
  }
  
  arriveAtStop(minutes) {
    if (this.atDepot || +minutes < 0) {
      throw new Error('Minutes are invalid or the bus is at the last stop.');
    }
    this.duration += +minutes;
    this.delay += +minutes - +this.stops[this.index].timeToNext;
    this.index++;
    return !this.atDepot;
  }
  
  toString() {
    let str = 'Line summary\n';
    str += this.atDepot ? '- Course completed\n' : `- Next stop: ${this.nextStopName === 'At depot' ? 'Depot\n' : this.nextStopName + '\n'}`;
    str += `- Stops covered: ${this.index}\n`;
    str += `- Time on course: ${this.duration} minutes\n`;
    str += `- Delay: ${this.currentDelay} minutes`;
    return str;
  }
}

const man = new LineManager([
  {
    name: 'Depot',
    timeToNext: 4
  },
  {
    name: 'Romanian Embassy',
    timeToNext: 2
  },
  {
    name: 'TV Tower',
    timeToNext: 3
  },
  {
    name: 'Interpred',
    timeToNext: 4
  },
  {
    name: 'Dianabad',
    timeToNext: 2
  },
  {
    name: 'Depot',
    timeToNext: 0
  },
]);

// Travel through all the stops until the bus is at depot
while (man.atDepot === false) {
  console.log(man.toString());
  man.arriveAtStop(4);
}

console.log(man.toString());