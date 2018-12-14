const assert = require('chai').assert;

function createCalculator() {
  let value = 0;
  return {
    add: function(num) { value += Number(num); },
    subtract: function(num) { value -= Number(num); },
    get: function() { return value; }
  }
}

describe('createCalculator tests', function () {
  let calc;
  beforeEach(function() {
    calc = createCalculator();
  });
  
  it('should be an object', function () {
    assert.isObject(calc);
  });
  
  it('should have a starting value of 0', function () {
    assert.equal(calc.get(), 0);
  });
  
  it('should add correctly', function () {
    calc.add(5);
    calc.add(5);
    const actual = calc.get();
    assert.equal(actual, 10);
  });
  
  it('should subtract correctly', function () {
    calc.subtract(5);
    calc.subtract(5);
    const actual = calc.get();
    assert.equal(actual, -10);
  });
  
  it('should work correctly with multiple additions and subtractions with numbers and strings', () => {
    calc.add(10);
    calc.subtract('7');
    calc.add('-2');
    calc.subtract(-1);
    const actual = calc.get();
    assert.equal(actual, 2);
  });
  
  it('add() should parse string to number', function () {
    calc.add('5.5');
    const actual = calc.get();
    assert.equal(actual, 5.5);
  });
  
  it('subtract() should parse string to number', function () {
    calc.subtract('5.5');
    const actual = calc.get();
    assert.equal(actual, -5.5);
  });
  
  it('should return NaN if the input isn\'t a number', function () {
    calc.add('test');
    const actual = calc.get();
    assert.isNaN(actual);
  });
});


