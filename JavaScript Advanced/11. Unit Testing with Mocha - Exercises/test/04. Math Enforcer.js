const assert = require('chai').assert;

let mathEnforcer = {
  addFive: function (num) {
    if (typeof (num) !== 'number') {
      return undefined;
    }
    return num + 5;
  },
  subtractTen: function (num) {
    if (typeof (num) !== 'number') {
      return undefined;
    }
    return num - 10;
  },
  sum: function (num1, num2) {
    if (typeof (num1) !== 'number' || typeof (num2) !== 'number') {
      return undefined;
    }
    return num1 + num2;
  }
};

describe('mathEnforcer tests', function () {
  describe('Addition tests', function () {
    it('should add 5 correctly', function () {
      assert.equal(mathEnforcer.addFive(10), 15)
    });
    
    it('should add 5 correctly to a decimal number', function () {
      assert.equal(mathEnforcer.addFive(1.5), 6.5)
    });
    
    it('should correctly add negative numbers', function () {
      assert.equal(mathEnforcer.addFive(-5), 0);
    });
    
    it('should return undefined for add input other that number', function () {
      assert.equal(mathEnforcer.addFive('test'), undefined);
    });
  });
  
  describe('Subtraction tests', function () {
    it('should subtract 10 correctly', function () {
      assert.equal(mathEnforcer.subtractTen(19), 9);
    });
    
    it('should correctly subtract negative numbers', function () {
      assert.equal(mathEnforcer.subtractTen(-5), -15);
    });
    
    it('should subtract 10 correctly to a decimal number', function () {
      assert.closeTo(mathEnforcer.subtractTen(12.3), 2.3, 0.01);
    });
    
    it('should return undefined for subtract input other that number', function () {
      assert.equal(mathEnforcer.subtractTen('test'), undefined);
    });
  });
  
  describe('Sum tests', function () {
    it('should sum two numbers correctly', function () {
      assert.equal(mathEnforcer.sum(5, 3), 8)
    });
    
    it('should sum two decimal numbers correctly', function () {
      assert.equal(mathEnforcer.sum(5.2, 3.1), 8.3)
    });
    
    it('should return undefined for sum input other that number', function () {
      assert.equal(mathEnforcer.sum('test', 1), undefined);
    });
    
    it('should return undefined for sum input other that number', function () {
      assert.equal(mathEnforcer.sum(2, [19]), undefined);
    });
  });
});
