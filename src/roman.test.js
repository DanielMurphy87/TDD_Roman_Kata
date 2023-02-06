import { numToRoman } from './roman';  //using the ES6 modules 

test ('should return the correct Roman numeral for the given integer', () => {
  expect(numToRoman(1)).toBe("I");
});