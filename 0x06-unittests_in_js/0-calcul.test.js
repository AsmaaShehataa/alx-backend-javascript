const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('rounding down floating fraction numbers', () => {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });

  it('floating point whole numbers', () => {
    assert.strictEqual(calculateNumber(1.0, 2.0), 3);
  });

  it('rounding down floating fraction numbers', () => {
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
  });

  it('rounding down floating fraction numbers', () => {
    assert.strictEqual(calculateNumber(1.4, 3.4), 4);
  });

  it('rounding down floating fraction numbers', () => {
    assert.strictEqual(calculateNumber(1.0, 3.7), 5);
  });

  it('rounding down floating fraction numbers', () => {
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });
});
