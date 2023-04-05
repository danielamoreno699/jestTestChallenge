const {  stringLength, stringLengthCondition } = require('../strings');



describe('stringLength', () => {
    test('returns the correct length of a string', () => {
      expect(stringLength('')).toBe(0);
      expect(stringLength('hello')).toBe(5);
    });
  });
  
  describe('stringLengthCondition', () => {
    test('returns the correct length of a string with conditional', () => {
      expect(() => stringLengthCondition('')).toThrow();
      expect(stringLengthCondition('h')).toBe(1);
      expect(() => stringLengthCondition('hello!!!!!!!!!')).toThrow();
    });
  });