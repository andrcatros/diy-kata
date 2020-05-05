const { fizzBuzz } = require("../src");

describe("fizzBuzz", () => {
  test("returns Fizz when passed a multiple of 3", () => {
    expect(fizzBuzz(3)).toEqual("Fizz");
    expect(fizzBuzz(666)).toEqual("Fizz")
  });

  test("returns Buzz when passed a multiple of 5", () => {
    expect(fizzBuzz(5)).toEqual("Buzz");
    expect(fizzBuzz(20)).toEqual("Buzz");
    expect(fizzBuzz(100000)).toEqual("Buzz");
  });

  test("returns FizzBuzz when passed a multiple 3 and 5", () => {
    expect(fizzBuzz(15)).toEqual("FizzBuzz");
    expect(fizzBuzz(-150)).toEqual("FizzBuzz");
    expect(fizzBuzz(0)).toEqual("FizzBuzz");
  });

  test("returns the number when it isn't a multiple of 3 or 5", () => {
    expect (fizzBuzz(2)).toEqual(2);
    expect (fizzBuzz(14)).toEqual(14);
    expect (fizzBuzz(-0.23)).toEqual(-0.23);
  });
});
