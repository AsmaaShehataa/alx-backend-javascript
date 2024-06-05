const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
  it('type == "SUM" - equal positive numbers', () => {
    expect(calculateNumber('SUM', 2, 2)).to.equal(4);
  });

  it('type == "SUM" - equal positive numbers(alternate)', () => {
    expect(calculateNumber('SUM', 2.4, 2.6)).to.equal(5);
  });

  it('type == "SUM" - equal negative numbers', () => {
    expect(calculateNumber('SUM', -2, -2)).to.equal(-4);
  });

  it('type == "SUM" - equal negative numbers(alternate)', () => {
    expect(calculateNumber('SUM', -2.4, -2.6)).to.equal(-5);
  });

  it('type == "SUM" - positive and negative numbers', () => {
    expect(calculateNumber('SUM', 2, -2)).to.equal(0);
  });

  it('type == "SUM" - negative and negative numbers', () => {
    expect(calculateNumber('SUM', -2.4, 2.6)).to.equal(1);
  });

  it('type == "SUBTRACT" - equal positive numbers', () => {
    expect(calculateNumber('SUBTRACT', 2, 2)).to.equal(0);
  });

  it('type == "SUBTRACT" - equal positive numbers(alternate)', () => {
    expect(calculateNumber('SUBTRACT', 2.3, 1.6)).to.equal(0);
  });

  it('type == "SUBTRACT" - equal negative numbers', () => {
    expect(calculateNumber('SUBTRACT', -2, -2)).to.equal(0);
  });

  it('type == "SUBTRACT" - equal negative numbers(alternate)', () => {
    expect(calculateNumber('SUBTRACT', -2.3, -1.6)).to.equal(0);
  });

  it('type == "SUBTRACT" - positive and negative numbers', () => {
    expect(calculateNumber('SUBTRACT', 2, -2)).to.equal(4);
  });

  it('type == "SUBTRACT" - negative and positive numbers', () => {
    expect(calculateNumber('SUBTRACT', -2.3, 1.6)).to.equal(-4);
  });

  it('type === "SUBTRACT" - zero and zero', () => {
    expect(calculateNumber('SUBTRACT', 0.0, 0.0)).to.equal(0);
  });

  it('type ==="DIVIDE" - positive and positive numbers', () => {
    expect(calculateNumber('DIVIDE', 2, 2)).to.equal(1);
  });

  it('type ==="DIVIDE" - positive and positive numbers(alternate)', () => {
    expect(calculateNumber('DIVIDE', 2.3, 1.6)).to.equal(1);
  });

  it('type ==="DIVIDE" - positive and negative numbers', () => {
    expect(calculateNumber('DIVIDE', 2, -2)).to.equal(-1);
  });

  it('type ==="DIVIDE" - positive and negative numbers(alternate)', () => {
    expect(calculateNumber('DIVIDE', 2.3, -1.6)).to.equal(-1);
  });

  it('type ==="DIVIDE" - negative and positive numbers', () => {
    expect(calculateNumber('DIVIDE', -2, 2)).to.equal(-1);
  });

  it('type ==="DIVIDE" - negative and positive numbers(alternate)', () => {
    expect(calculateNumber('DIVIDE', -2.3, 1.6)).to.equal(-1);
  });

  it('type ==="DIVIDE" - negative and negative numbers', () => {
    expect(calculateNumber('DIVIDE', -2, -2)).to.equal(1);
  });

  it('type ==="DIVIDE" - negative and negative numbers(alternate)', () => {
    expect(calculateNumber('DIVIDE', -2.3, -1.6)).to.equal(1);
  });

  it('type ==="DIVIDE" - positive and zero', () => {
    expect(calculateNumber('DIVIDE', 2, 0)).to.equal('Error');
  });

  it('type ==="DIVIDE" - negative and zero', () => {
    expect(calculateNumber('DIVIDE', -2, 0)).to.equal('Error');
  });

  it('type ==="DIVIDE" - zero and zero', () => {
    expect(calculateNumber('DIVIDE', 0, 0)).to.equal('Error');
  });

  it('type ==="DIVIDE" - zero and positive', () => {
    expect(calculateNumber('DIVIDE', 0, 2)).to.equal(0);
  });
});
