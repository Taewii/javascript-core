const assert = require('chai').assert;

function isOddOrEven(string) {
  if (typeof (string) !== 'string') {
    return undefined;
  }
  if (string.length % 2 === 0) {
    return "even";
  }
  
  return "odd";
}

describe('isOddOrEven tests', function () {
  it('should return even for "as"', function () {
    assert.equal(isOddOrEven('as'), 'even');
  });
  
  it('should return odd for "asd"', function () {
    assert.equal(isOddOrEven('asd'), 'odd');
  });
  
  it('should return undefined for element that\'s not a string', function () {
    assert.equal(isOddOrEven(1), undefined);
  });
});