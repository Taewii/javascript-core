const assert = require('chai').assert;

function lookupChar(string, index) {
  if (typeof (string) !== 'string' || !Number.isInteger(index)) {
    return undefined;
  }
  if (string.length <= index || index < 0) {
    return "Incorrect index";
  }
  
  return string.charAt(index);
}

describe('lookupChar tests', function () {
  it('should return "e" from Cthulhu at index 2', function () {
    const actual = lookupChar('Cthulhu', 2);
    assert.equal(actual, 'h');
  });
  
  it('should return undefined if input value is not a string', function () {
    assert.equal(lookupChar([]), undefined);
  });
  
  it('should return undefined if input value is decimal', function () {
    assert.equal(lookupChar(1.5, 2), undefined);
  });
  
  it('should return undefined if index is decimal', function () {
    assert.equal(lookupChar('Cthulhu', 2.5), undefined);
  });
  
  it('should return "Incorrect index" for index out of bounds', function () {
    assert.equal(lookupChar('Cthulhu', -1), 'Incorrect index');
    assert.equal(lookupChar('Cthulhu', 20), 'Incorrect index');
  });
});

