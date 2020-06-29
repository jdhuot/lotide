
const assertEqual = require("../assertEqual.js");
const assert = require("chai").assert;

// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1,1);


describe("assertEqual Test", () => {
  it("Should return false statement if values are not equal", () => {
    assert.strictEqual(assertEqual("lhl", "bootcamp"), "🛑 Assertion Failed: lhl !== bootcamp");
  });

  it("Should return true statement if values equal", () => {
    // assert.strictEqual(assertEqual(1, 1), true);
    assert.strictEqual(assertEqual(1, 1), "✅ Assertion Passed: 1 === 1");
  });
});

