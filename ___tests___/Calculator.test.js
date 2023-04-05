const Calculator = require('../calculator');

describe('Calculator methods', () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  test('adds numbers', () => {
    expect(calculator.add(2, 3)).toBe(5);
  });

  test('subtracts numbers', () => {
    expect(calculator.subtract(4, 1)).toBe(3);
  });

  test('divides numbers', () => {
    expect(calculator.divide(6, 2)).toBe(3);
  });

  test('multiplies numbers', () => {
    expect(calculator.multiply(3, 3)).toBe(9);
  });
});
