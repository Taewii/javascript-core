const assert = require('chai').assert;

function rgbToHexColor(red, green, blue) {
  if (!Number.isInteger(red) || (red < 0) || (red > 255))
    return undefined; // Red value is invalid
  if (!Number.isInteger(green) || (green < 0) || (green > 255))
    return undefined; // Green value is invalid
  if (!Number.isInteger(blue) || (blue < 0) || (blue > 255))
    return undefined; // Blue value is invalid
  return "#" +
    ("0" + red.toString(16).toUpperCase()).slice(-2) +
    ("0" + green.toString(16).toUpperCase()).slice(-2) +
    ("0" + blue.toString(16).toUpperCase()).slice(-2);
}

describe('rgbToHexColor tests', function () {
  it('should return correct blue (#0000FF) color', function () {
    assert.equal(rgbToHexColor(0, 0, 255), '#0000FF')
  });
  
  it('should return correct green (#00FF00) color', function () {
    assert.equal(rgbToHexColor(0, 255, 0), '#00FF00')
  });
  
  it('should return correct red (#FF0000) color', function () {
    assert.equal(rgbToHexColor(255, 0, 0), '#FF0000')
  });
  
  it('should return undefined for value over 255', function () {
    assert.equal(rgbToHexColor(256, 0, 0), undefined);
  });
  
  it('should return undefined for value over 255', function () {
    assert.equal(rgbToHexColor(0, 256, 0), undefined);
  });
  
  it('should return undefined for value over 255', function () {
    assert.equal(rgbToHexColor(0, 0, 256), undefined);
  });
  
  it('should return undefined for negative value', function () {
    assert.equal(rgbToHexColor(-1, 0, 0), undefined);
  });
  
  it('should return undefined for negative value', function () {
    assert.equal(rgbToHexColor(0, -1, 0), undefined);
  });
  
  it('should return undefined for negative value', function () {
    assert.equal(rgbToHexColor(0, 0, -1), undefined);
  });
  
  it('should return undefined if input isn\'t a number', function () {
    assert.equal(rgbToHexColor('s', 0, 0), undefined);
  });
});
