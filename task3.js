class Calculator {
    add(num1, num2) {
      return num1 + num2;
    }
  
    subtract(num1, num2) {
      return num1 - num2;
    }
  
    divide(num1, num2) {
      if (num2 === 0) {
        throw new Error('Cannot divide by zero');
      }
      return num1 / num2;
    }
  
    multiply(num1, num2) {
      return num1 * num2;
    }
  }

  // Group tests 
describe('Calculator  methods', () => {
    beforeEach(() => {
      const calculator = new Calculator();
    });
  
    test('adds  numbers', () => {
      expect(Calculator.add(2, 3)).toBe(5);
    });
  
    test('susbtract numbers', () => {
      expect(Calculator.substract(4, 1)).toBe(3);
    });
  
    test('divide numbers', () => {
      expect(Calculator.divide(6, 2)).toBe(3);
    });

    test('multiply numbers', () => {
        expect(Calculator.multiply(3, 3)).toBe(9);
      });
  });