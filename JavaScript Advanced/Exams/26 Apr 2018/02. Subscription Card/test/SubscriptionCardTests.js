const SubscriptionCard = require('../Subscription Card').SubscriptionCard;
const assert = require('chai').assert;

describe('Subscription Card tests', function () {
  let sub;
  beforeEach(() => {
    sub = new SubscriptionCard('Mitio', 'Pishtovcheto', '310-84-9056');
  });
  
  describe('default values tests', function () {
    it('unassigned values should be undefined', function () {
      sub = new SubscriptionCard();
      assert.isUndefined(sub.firstName);
      assert.isUndefined(sub.lastName);
      assert.isUndefined(sub.SSN);
    });
    
    it('isBlocked default value should be false', function () {
      assert.equal(sub.isBlocked, false);
    });
    
    it('subscriptions should be an empty array', function () {
      assert.isEmpty(sub._subscriptions);
      assert.isArray(sub._subscriptions);
    });
  });
  
  describe('getters tests', function () {
    it('should return the firstName', function () {
      assert.equal(sub.firstName, 'Mitio');
    });
    
    it('should return the lastName', function () {
      assert.equal(sub.lastName, 'Pishtovcheto');
    });
    
    it('should return the SSN', function () {
      assert.equal(sub.SSN, '310-84-9056');
    });
    
    it('should not be able to reassign values', function () {
      sub.firstName = 'test';
      sub.lastName = 'test';
      sub.SSN = 'test';
      assert.equal(sub.firstName, 'Mitio');
      assert.equal(sub.lastName, 'Pishtovcheto');
      assert.equal(sub.SSN, '310-84-9056');
    });
  });
  
  describe('addSubscription() tests', function () {
    it('should add correctly', function () {
      sub.addSubscription('test', new Date(), new Date());
      assert.equal(sub._subscriptions.length, 1);
    });
  });
  
  describe('block()/unblock() tests', function () {
    it('should block correctly', function () {
      sub.block();
      assert.equal(sub._blocked, true);
    });
    
    it('should unblock correctly', function () {
      sub.block();
      sub.unblock();
      assert.equal(sub._blocked, false);
    });
  });
  
  describe('isValid() tests', function () {
    it('should return true if data is correct', function () {
      sub.addSubscription('test', new Date('01-01-2000'), new Date('01.01-2001'));
      assert.equal(sub.isValid('test', new Date('01.01-2000')), true);
    });
    
    it('should return true if data is correct', function () {
      sub.addSubscription('test', new Date('01-01-2000'), new Date('01.01-2001'));
      assert.equal(sub.isValid('test', new Date('01.01-2001')), true);
    });
    
    it('should return true if line is "*"', function () {
      sub.addSubscription('*', new Date('01-01-2000'), new Date('01.01-2001'));
      assert.equal(sub.isValid('test', new Date('02.02-2000')), true);
    });
    
    it('should return false if line doesnt exist', function () {
      sub.addSubscription('test', new Date('01-01-2000'), new Date('01.01-2001'));
      assert.equal(sub.isValid('asd', new Date('02.02-2000')), false);
    });
    
    it('should return false if the account is blocked', function () {
      sub.addSubscription('test', new Date('01-01-2000'), new Date('01.01-2001'));
      sub.block();
      assert.equal(sub.isValid('test', new Date('02.02-2000')), false);
    });
    
    it('should return false if startDate is after the current date', function () {
      sub.addSubscription('test', new Date('01-01-2000'), new Date('01.01-2001'));
      assert.equal(sub.isValid('test', new Date('01.01-1999')), false);
    });
    
    it('should return false if endDate is before the current date', function () {
      sub.addSubscription('test', new Date('01-01-2000'), new Date('01.01-2001'));
      assert.equal(sub.isValid('test', new Date('01.01-2002')), false);
    });
  });
});