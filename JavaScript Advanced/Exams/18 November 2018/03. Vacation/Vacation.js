class Vacation {
  constructor(organizer, destination, budget) {
    this.organizer = organizer;
    this.destination = destination;
    this.budget = +budget;
    this.kids = {};
  }

  registerChild(name, grade, budget) {
    if (budget < this.budget) {
      return `${name}'s money is not enough to go on vacation to ${this.destination}.`;
    }

    if (!this.kids[grade]) {
      this.kids[grade] = [];
    }

    if (!this.kids[grade].some(kid => kid.indexOf(name) !== -1)) {
      this.kids[grade].push(`${name}-${budget}`);
    } else {
      return `${name} is already in the list for this ${this.destination} vacation.`;
    }
    return this.kids[grade];
  }

  removeChild(name, grade) {
    if (this.kids[grade] && this.kids[grade].some(kid => kid.indexOf(name) !== -1)) {
      this.kids[grade] = this.kids[grade].filter(kid => kid.indexOf(name) < 0);
      return this.kids[grade];
    } else {
      return `We couldn't find ${name} in ${grade} grade.`;
    }
  }

  get numberOfChildren() {
    return Object.values(this.kids).reduce((acc, curr) => {
      return acc += curr.length;
    }, 0);
  }

  toString() {
    if (Object.keys(this.kids).length === 0) {
      return `No children are enrolled for the trip and the organization of ${this.organizer} falls out...`;
    }
    let str = `${this.organizer} will take ${Object.keys(this.kids).length} children on trip to ${this.destination}\n`;
    Object.keys(this.kids).sort((a, b) => +a - +b)
      .forEach((grade) => {
        str += `Grade: ${grade}\n`;
        this.kids[grade].forEach((kid, i) => str += `${i + 1}. ${kid}\n`);
      });

    return str;
  }
}

// let vacation = new Vacation('Mr Pesho', 'San diego', 2000);
// console.log(vacation.registerChild('Gosho', 5, 2000));
// console.log(vacation.registerChild('Lilly', 6, 2100));
// console.log(vacation.registerChild('Pesho', 6, 2400));
// console.log(vacation.registerChild('Gosho', 5, 2000));
// console.log(vacation.registerChild('Tanya', 5, 6000));
// console.log(vacation.registerChild('Mitko', 10, 1590));
// console.log(vacation.numberOfChildren);

// ---------------------------------------------------
// let vacation = new Vacation('Mr Pesho', 'San diego', 2000);
// vacation.registerChild('Gosho', 5, 2000);
// vacation.registerChild('Lilly', 6, 2100);

// console.log(vacation.removeChild('Gosho', 9));

// vacation.registerChild('Pesho', 6, 2400);
// vacation.registerChild('Gosho', 5, 2000);

// console.log(vacation.removeChild('Lilly', 6));
// console.log(vacation.registerChild('Tanya', 5, 6000))
// console.log(vacation.numberOfChildren);

// ---------------------------------------------------
// let vacation = new Vacation('Miss Elizabeth', 'Dubai', 2000);

// vacation.registerChild('Gosho', 5, 3000);
// vacation.registerChild('Lilly', 6, 1500);
// vacation.registerChild('Pesho', 7, 4000);
// vacation.registerChild('Tanya', 5, 5000);
// vacation.registerChild('Mitko', 10, 5500);

// console.log(vacation.toString());