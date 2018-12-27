const PaymentPackage = require('../PaymentPackage').PaymentPackage;
const assert = require('chai').assert;

describe('PaymentPackage tests', function () {
  let paymentPackage;
  beforeEach(() => {
    paymentPackage = new PaymentPackage('Test', 1000);
  });
  
  describe('default values', function () {
    it('VAT should have a default value of 20', function () {
      assert.equal(paymentPackage.VAT, 20);
    });
    
    it('Active should have a default value of true', function () {
      assert.equal(paymentPackage.active, true);
    });
  });
  
  describe('validations', function () {
    it('name should require non empty string', function () {
      assert.throws(() => paymentPackage.name = ['invalid'], Error);
      assert.throws(() => paymentPackage.name = '', Error);
    });
    
    it('value should require a non negative number', function () {
      assert.throws(() => paymentPackage.value = ['invalid'], Error);
      assert.throws(() => paymentPackage.value = -1, Error);
    });
    
    it('VAT setter should only accept non negative numbers', function () {
      assert.throws(() => paymentPackage.VAT = ['invalid'], Error);
      assert.throws(() => paymentPackage.VAT = -1, Error);
    });
    
    it('Active setter should only accept booleans', function () {
      assert.throws(() => paymentPackage.active = ['invalid'], Error);
    });
  });
  
  describe('toString() tests', function () {
    it('should return correctly on an active package', function () {
      const expected = 'Package: Test\n- Value (excl. VAT): 1000\n- Value (VAT 20%): 1200';
      assert.equal(paymentPackage.toString(), expected);
    });
    
    it('should return correctly on an inactive package', function () {
      paymentPackage.active = false;
      paymentPackage.VAT = 20.3;
      const expected = 'Package: Test (inactive)\n- Value (excl. VAT): 1000\n- Value (VAT 20.3%): 1203';
      assert.equal(paymentPackage.toString(), expected);
    });
    
    it('should return correctly for 0 as value', function () {
      paymentPackage.value = 0;
      const expected = 'Package: Test\n- Value (excl. VAT): 0\n- Value (VAT 20%): 0';
      assert.equal(paymentPackage.toString(), expected);
    });
  });
});