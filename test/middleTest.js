const middle = require("../middle");
const assertArraysEqual = require("../assertArraysEqual");
const assert = require("chai").assert;


console.log(middle([1,2,3,4]));
console.log(middle([1,2,3,4,5]));
console.log(middle([1,2]));
console.log(middle([1]));

assertArraysEqual(middle([1,2,3,4]),[2,3]);
assertArraysEqual(middle([1,2,3,4,5]),[3]);


describe("Middle Test", () => {
  it("Should return true if even array returned is middle two values", () => {
    assertArraysEqual(middle([1,2,3,4]),[2,3]);
  });

  it("Should return true if odd array returned is middle value", () => {
    assertArraysEqual(middle([1,2,3,4,5]),[3]);
  });
});