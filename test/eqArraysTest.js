const eqArrays = require("../eqArrays");
const assertEqual = require("../assertEqual");
const assert = require("chai").assert;


describe("eqArrays Test", () => {
  it("Should return true if both arrays are equal", () => {
    assert.strictEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });

  it("Should return false if both arrays are equal", () => {
    assert.strictEqual(eqArrays([1, "2", 3], [1, 2, 3]), false);
  });
});