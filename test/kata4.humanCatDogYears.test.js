const { humanCatDogYears } = require("../src");

describe("humanCatDogYears", () => {
    test("returns array of human, cat and dog years when passed human years", () => {
      expect(humanCatDogYears(1)).toEqual([1,15,15])
      expect(humanCatDogYears(2)).toEqual([2,24,24])
      expect(humanCatDogYears(4)).toEqual([4,32,34])
    });
  });
