const assert = require('chai').assert;

function isSymmetric(arr) {
  if (!Array.isArray(arr))
    return false; // Non-arrays are non-symmetric
  let reversed = arr.slice(0).reverse(); // Clone and reverse
  let equal = (JSON.stringify(arr) == JSON.stringify(reversed));
  return equal;
}

describe('isSymmetric function', function () {
  describe('True tests', function () {
    it('should return true if array is symmetric', function () {
      const arr = [1, 2, 3, 3, 2, 1];
      assert.equal(isSymmetric(arr), true);
    });
    
    it('should return true if array has negative numbers', function () {
      const arr = [-1, -2, 3, 3, -2, -1];
      assert.equal(isSymmetric(arr), true);
    });
    
    it('should return true if arr has only one number', function () {
      const arr = [1];
      assert.equal(isSymmetric(arr), true);
    });
    
    it('should return true if elements are symmetric but have different types', function () {
      const arr = [1, 's', {}, new Date(), {}, 's', 1];
      assert.equal(isSymmetric(arr), true);
    });
  });
  
  describe('False tests', function () {
    it('should return false if array isn\'t symmetrical', function () {
      const arr = [1, 2, 3, 4, 5];
      assert.equal(isSymmetric(arr), false);
    });
    
    it('should return false if array different types of elements in not symmetrical order', function () {
      const arr = [1, 's', {}, [], 1.3];
      assert.equal(isSymmetric(arr), false);
    });
    
    it('should return false if the input isn\'t and array', function () {
      const arr = 123;
      assert.equal(isSymmetric(arr), false);
    });
  });
});