let Console = require('../05. C# Console').Console;
let assert = require('chai').assert;

describe('C# Console tests', function () {
  it('should return a string correctly', function () {
    assert.equal(Console.writeLine('string'), 'string');
  });
  
  it('should parse object to JSON', function () {
    assert.equal(Console.writeLine({'asd': 12}), JSON.stringify({'asd': 12}))
  });
  
  it('should correctly template a string', function () {
    const template = 'Hello, {0}, my name is {1}, and I am {2} years old.';
    const expected = 'Hello, Mandingo, my name is Boiko Borisov, and I am 69 years old.';
    assert.equal(Console.writeLine(template, 'Mandingo', 'Boiko Borisov', 69), expected);
  });
  
  it('should throw a TypeError if the template is not a string', function () {
    assert.throws(() => Console.writeLine(123, 'test', 'test2'), TypeError);
  });
  
  it('should throw RangeError if the arguments dont match the placeholder count', function () {
    const template = 'Hello, {0}, my name is {1}, and I am {2} years old.';
    assert.throws(() => Console.writeLine(template, 1, 2, 3, 4, 5, 6), RangeError);
  });
  
  it('should recognize the number in the placeholder', () => {
    assert.throws(() => Console.writeLine('This will be {101}', 'WRONG'), RangeError);
  });
});