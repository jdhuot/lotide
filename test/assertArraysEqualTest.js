const assertArraysEqual = require("../assertArraysEqual");
const assertEqual = require("../assertEqual");
const assert = require("chai").assert;



// TEST CODE
assertArraysEqual([1, 2, 3], [1, 2, 3]); // => should PASS
assertArraysEqual([1, "2", 3], [1, 2, 3]); // => should FAIL


describe("assertArraysEqual Test", () => {
  it("Should return true since the input arrays are equal", () => {
    assert.strictEqual(assertArraysEqual([1, 2, 3], [1, 2, 3]), true);
  });

  it("Should return false since the input arrays are not equal", () => {
    assert.strictEqual(assertArraysEqual([1, "2", 3], [1, 2, 3]), false);
  });
});