// 0-calcul.test.js

const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function() {
  it('should return 4 when inputs are 1 and 3', function() {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });

  it('should return 5 when inputs are 1 and 3.7', function() {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
  });

  it('should return 5 when inputs are 1.2 and 3.7', function() {
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
  });

  it('should return 6 when inputs are 1.5 and 3.7', function() {
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });

  it('should return 0 when inputs are 0.1 and -0.1', function() {
    assert.strictEqual(calculateNumber(0.1, -0.1), 0);
  });

  it('should return -2 when inputs are -1.4 and -1.5', function() {
    assert.strictEqual(calculateNumber(-1.4, -1.5), -2);
  });

  it('should return -4 when inputs are -1.6 and -2.4', function() {
    assert.strictEqual(calculateNumber(-1.6, -2.4), -4);
  });

  it('should return 3 when inputs are 1.4 and 1.5', function() {
    assert.strictEqual(calculateNumber(1.4, 1.5), 3);
  });

  it('should return 2 when inputs are 0.5 and 1.2', function() {
    assert.strictEqual(calculateNumber(0.5, 1.2), 2);
  });

  it('should return 1 when inputs are 0.2 and 0.8', function() {
    assert.strictEqual(calculateNumber(0.2, 0.8), 1);
  });

  it('should return 1 when inputs are -0.5 and 0.5', function() {
    assert.strictEqual(calculateNumber(-0.5, 0.5), 1);
  });

  it('should return 1 when inputs are 0.9 and 0.1', function() {
    assert.strictEqual(calculateNumber(0.9, 0.1), 1);
  });
});

