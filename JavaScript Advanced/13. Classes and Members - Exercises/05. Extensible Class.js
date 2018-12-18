const Extensible = (function () {
  let uniqueId = 0;

  return class Extensible {
    constructor() {
      this.id = uniqueId++;
    }

    extend(template) {
      for (let prop in template) {
        if (template.hasOwnProperty(prop)) {
          if (typeof template[prop] === 'function') {
            Extensible.prototype[prop] = template[prop];
          } else {
            this[prop] = template[prop];
          }
        }
      }
    }
  };
})();

const obj1 = new Extensible();
const obj2 = new Extensible();
const obj3 = new Extensible();
console.log(obj1.id);
console.log(obj2.id);
console.log(obj3.id);