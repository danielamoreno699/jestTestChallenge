
const reverseString = (str) => {
    return string.split('').reverse().join('');
}

test('reverseString reverses a string', () => {
    expect(reverseString('hello')).toBe('olleh');
    expect(reverseString('world')).toBe('dlrow');
    expect(reverseString('')).toBe('');
  });