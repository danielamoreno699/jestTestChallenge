import { test } from '@jest/globals';

const stringLength = (str) => {
    return str.trim().length
    
}

test('stringLength returns the correct length of a string', () => { 
    expect(stringLength('')).toBe(0);
    expect(stringLength('hello')).toBe(5);
})

const stringLengthCondition = (str) => {

    if(str.length >=1 &&  str.length < 10){
        return str.trim().length
    }throw new Error('the str did not meet requirement')
    
    
}

test('stringLength returns the correct length of a string with conditional', () => {
    expect(stringLengthCondition('')).toThrow(); 
    expect(stringLengthCondition('h')).toBe(1);
    expect(stringLengthCondition('hello!!!!!!!!!')).toThrow();
})