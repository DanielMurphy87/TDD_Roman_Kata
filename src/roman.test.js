import { numToRoman } from './roman';  //using the ES6 modules 

test ('should return the correct Roman numeral for the given integer', () => {
  expect(numToRoman(1)).toBe("I");
  expect(numToRoman(2)).toBe("II");
  expect(numToRoman(5)).toBe("V");
  expect(numToRoman(4)).toBe("IV");
  expect(numToRoman(5)).toBe("V");
});

test ('should return an error if not a string is passed in', () =>{
  expect(() => numToRoman('string')).toThrowError("Input must be a number");
  expect(() => numToRoman(-1)).toThrowError("Input must be a positive number");
})