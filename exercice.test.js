const { result } = require('lodash');
const {
    capitalize,
    reverse,
    caesarCipher,
    calculator,
    analyseArray } = require('./sum.js');


test("Capitalize a string", () => {
    expect(capitalize("hello")).toBe("Hello");
});

test("Reverse a string", () => {
    expect(reverse("hello")).toBe("olleh");
});

test("Calculate two numbers", () => {
    const result = calculator.add(1, 3);
    expect(result).toBe(4);
});

test("Substract two numbers", () => {
    const result = calculator.substract(10,4);
    expect(result).toBe(6);
});

test("Calculate two numbers", () => {
    const result = calculator.divide(4, 2);
    expect(result).toBe(2);
});

test("Calculate two numbers", () => {
    const result = calculator.multiply(6, 3);
    expect(result).toBe(18);
});

test("caesarCipher test", () => {
  expect(caesarCipher("abc !", 1)).toBe('bcd !');
});

test("Analyse an aray", () => {
    expect(analyseArray([1, 8, 3, 4, 2, 6])).toEqual({ average: 4, min: 1, max: 8, length: 6 });
})
