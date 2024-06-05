const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  it('type == "SUM" - equal positive numbers', () => {
    const result = calculateNumber('SUM', 2, 2);
    assert.strictEqual(result, 4);
  });

  it('type == "SUM" - equal positive numbers(alternate)', () => {
    const result = calculateNumber('SUM', 2.4, 2.6);
    assert.strictEqual(result, 5);
  });

  it('type == "SUM" - equal negative numbers', () => {
    const result = calculateNumber('SUM', -2, -2);
    assert.strictEqual(result, -4);
  });

  it('type == "SUM" - equal negative numbers(alternate)', () => {
    const result = calculateNumber('SUM', -2.4, -2.6);
    assert.strictEqual(result, -5);
  });

  it('type == "SUM" - positive and negative numbers', () => {
    const result = calculateNumber('SUM', 2, -2);
    assert.strictEqual(result, 0);
  });

  it('type == "SUM" - negative and negative numbers', () => {
    const result = calculateNumber('SUM', -2.4, 2.6);
    assert.strictEqual(result, 1);
  });

  it('type == "SUBTRACT" - equal positive numbers', () => {
    const result = calculateNumber('SUBTRACT', 2, 2);
    assert.strictEqual(result, 0);
  });

  it('type == "SUBTRACT" - equal positive numbers(alternate)', () => {
    const result = calculateNumber('SUBTRACT', 2.3, 1.6);
    assert.strictEqual(result, 0);
  });

  it('type == "SUBTRACT" - equal negative numbers', () => {
    const result = calculateNumber('SUBTRACT', -2, -2);
    assert.strictEqual(result, 0);
  });

  it('type == "SUBTRACT" - equal negative numbers(alternate)', () => {
    const result = calculateNumber('SUBTRACT', -2.3, -1.6);
    assert.strictEqual(result, 0);
  });

  it('type == "SUBTRACT" - positive and negative numbers', () => {
    const result = calculateNumber('SUBTRACT', 2, -2);
    assert.strictEqual(result, 4);
  });

  it('type == "SUBTRACT" - negative and positive numbers', () => {
    const result = calculateNumber('SUBTRACT', -2.3, 1.6);
    assert.strictEqual(result, -4);
  });

  it('type === "SUBTRACT" - zero and zero', () => {
    const result = calculateNumber('SUBTRACT', 0.0, 0.0);
    assert.strictEqual(result, 0);
  });

  it('type ==="DIVIDE" - positive and positive numbers', () => {
    const result = calculateNumber('DIVIDE', 2, 2);
    assert.strictEqual(result, 1);
  });

  it('type ==="DIVIDE" - positive and positive numbers(alternate)', () => {
    const result = calculateNumber('DIVIDE', 2.3, 1.6);
    assert.strictEqual(result, 1);
  });

  it('type ==="DIVIDE" - positive and negative numbers', () => {
    const result = calculateNumber('DIVIDE', 2, -2);
    assert.strictEqual(result, -1);
  });

  it('type ==="DIVIDE" - positive and negative numbers(alternate)', () => {
    const result = calculateNumber('DIVIDE', 2.3, -1.6);
    assert.strictEqual(result, -1);
  });

  it('type ==="DIVIDE" - negative and positive numbers', () => {
    const result = calculateNumber('DIVIDE', -2, 2);
    assert.strictEqual(result, -1);
  });

  it('type ==="DIVIDE" - negative and positive numbers(alternate)', () => {
    const result = calculateNumber('DIVIDE', -2.3, 1.6);
    assert.strictEqual(result, -1);
  });

  it('type ==="DIVIDE" - negative and negative numbers', () => {
    const result = calculateNumber('DIVIDE', -2, -2);
    assert.strictEqual(result, 1);
  });

  it('type ==="DIVIDE" - negative and negative numbers(alternate)', () => {
    const result = calculateNumber('DIVIDE', -2.3, -1.6);
    assert.strictEqual(result, 1);
  });

  it('type ==="DIVIDE" - positive and zero', () => {
    const result = calculateNumber('DIVIDE', 2, 0);
    assert.strictEqual(result, 'Error');
  });

  it('type ==="DIVIDE" - negative and zero', () => {
    const result = calculateNumber('DIVIDE', -2, 0);
    assert.strictEqual(result, 'Error');
  });

  it('type ==="DIVIDE" - zero and zero', () => {
    const result = calculateNumber('DIVIDE', 0, 0);
    assert.strictEqual(result, 'Error');
  });

  it('type ==="DIVIDE" - zero and positive', () => {
    const result = calculateNumber('DIVIDE', 0, 2);
    assert.strictEqual(result, 0);
  });
});