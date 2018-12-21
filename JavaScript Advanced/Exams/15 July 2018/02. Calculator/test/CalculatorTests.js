const Calculator = require('../Calculator').Calculator;
const assert = require('chai').assert;

describe('Calculator Tests', function () {
  let calc;
  beforeEach(() => {
    calc = new Calculator();
  });
  
  it('should be initialized with an empty array', function () {
    assert.equal(calc.expenses.length, 0);
  });
  
  it('should be able to add every type', function () {
    calc.add('asd');
    calc.add(123);
    calc.add(123.123);
    calc.add([1, 2, 'test']);
    assert.equal(calc.expenses.length, 4);
  });
  
  describe('divideNums() tests', function () {
    it('should divide only the numbers from the array', function () {
      calc.add('asd');
      calc.add(15);
      calc.add(3);
      calc.add(2);
      calc.add([1, 2, 'test']);
      
      assert.equal(calc.divideNums(), 2.5);
    });
    
    it('should return "Cannot divide by zero" if you try to divide by zero', function () {
      calc.add(5);
      calc.add(0);
      
      assert.equal(calc.divideNums(), 'Cannot divide by zero');
    });
    
    it('should throw error if there are no numbers in the array', function () {
      calc.add('Pesho');
      calc.add('Gosho');
      
      assert.throws(() => calc.divideNums(), Error);
    });
  });
  
  describe('toSting() tests', function () {
    it('should return "Pesho -> Gosho -> Ivan"', function () {
      calc.add('Pesho');
      calc.add('Gosho');
      calc.add('Ivan');
      const expected = 'Pesho -> Gosho -> Ivan';
      
      assert.equal(calc.toString(), expected);
    });
    
    it('should return "empty array" if the array is empty', function () {
      assert.equal(calc.toString(), 'empty array');
    });
  });
  
  describe('orderBy() tests', function () {
    it('should order a numbers in ascending order', function () {
      calc.add(10);
      calc.add(2.5);
      calc.add(5);
      
      const expected = '2.5, 5, 10';
      assert.equal(calc.orderBy(), expected);
    });
    
    it('should order different types of elements in natural order', function () {
      calc.add(10);
      calc.add('asd');
      calc.add([1, 2, 3, 'test']);
      calc.add({name: 'Pesho'});
      
      const expected = '1,2,3,test, 10, [object Object], asd';
      assert.equal(calc.orderBy(), expected);
    });
    
    it('should return "empty" for an empty array', function () {
      assert.equal(calc.orderBy(), 'empty');
    });
  });
});