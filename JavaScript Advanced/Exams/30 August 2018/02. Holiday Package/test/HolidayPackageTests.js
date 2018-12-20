const HolidayPackage = require('../HolidayPackage').HolidayPackage;
const assert = require('chai').assert;

describe('HolidayPackage Tests', function () {
  let holidayPackage;
  beforeEach(() => {
    holidayPackage = new HolidayPackage('Sofia', 'Spring')
  });
  
  it('insurance must have a false default value', function () {
    assert.equal(holidayPackage.insuranceIncluded, false);
  });
  
  describe('AddVacationer() tests', function () {
    it('should add vacationer correctly', function () {
      holidayPackage.addVacationer('Pesho Goshov');
      holidayPackage.addVacationer('Gosho Peshev');
      
      assert.equal(holidayPackage.vacationers.length, 2);
    });
    
    it('should require first and last name', function () {
      assert.throws(() => holidayPackage.addVacationer('Gosho'), Error);
    });
    
    it('should require that the name is a string', function () {
      assert.throws(() => holidayPackage.addVacationer(123), Error);
    });
    
    it('should require that the name is not a empty string', function () {
      assert.throws(() => holidayPackage.addVacationer(' '), Error);
    });
  });
  
  describe('showVacationers() tests', function () {
    it('should return vacationers correctly', function () {
      holidayPackage.addVacationer('Test1 Test1');
      holidayPackage.addVacationer('Test2 Test2');
      const expected = 'Vacationers:\nTest1 Test1\nTest2 Test2';
      assert.equal(holidayPackage.showVacationers(), expected);
    });
    
    it('should return "No vacationers are added yet" if the list is empty', function () {
      const expected = 'No vacationers are added yet';
      assert.equal(holidayPackage.showVacationers(), expected);
    });
  });
  
  describe('generateHolidayPackage() tests', function () {
    it('should require at least one vacationer', function () {
      assert.throws(() => holidayPackage.generateHolidayPackage(), Error);
    });
    
    it('should return the right price if the season isn\'t Summer or Winter', function () {
      holidayPackage.addVacationer('Pesho Goshov');
      holidayPackage.addVacationer('Gosho Peshev');
      const expected = 'Holiday Package Generated\nDestination: Sofia\nVacationers:\nPesho Goshov\nGosho Peshev\nPrice: 800';
      assert.equal(holidayPackage.generateHolidayPackage(), expected);
    });
    
    it('should return the right price if the season is Summer or Winter', function () {
      holidayPackage.addVacationer('Pesho Goshov');
      holidayPackage.addVacationer('Gosho Peshev');
      holidayPackage.season = 'Summer';
      const expected = 'Holiday Package Generated\nDestination: Sofia\nVacationers:\nPesho Goshov\nGosho Peshev\nPrice: 1000';
      assert.equal(holidayPackage.generateHolidayPackage(), expected);
    });
    
    it('should return the right price if insurance is included', function () {
      holidayPackage.addVacationer('Pesho Goshov');
      holidayPackage.addVacationer('Gosho Peshev');
      holidayPackage.insuranceIncluded = true;
      const expected = 'Holiday Package Generated\nDestination: Sofia\nVacationers:\nPesho Goshov\nGosho Peshev\nPrice: 900';
      assert.equal(holidayPackage.generateHolidayPackage(), expected);
    });
  });
});