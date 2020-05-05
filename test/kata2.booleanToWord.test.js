const { booleanToWord } = require("../src");

describe("booleanToWord", () => {
  test("returns Yes when passed true", () => {
    expect(booleanToWord(false)).toEqual("No");})

  test("returns No when passed false", () => {
    expect(booleanToWord(true)).toEqual("Yes")})
})