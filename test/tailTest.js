const tail = require("../tail");
const assertEqual = require("../assertEqual");
const assert = require("chai").assert;
const assertArraysEqual = require("../assertArraysEqual");


// TEST CODE
let test1 = tail([1,"banana","apple",4,5]);

assertEqual(test1.length,4);
assertEqual(test1[0],"banana");
assertEqual(test1[1],"apple");




// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!


describe("Tail Test", () => {
  it("Should return all values of original array except the first", () => {
    // assertArraysEqual(tail([1,"banana","apple",4,5]), ["banana","apple",4,5]);
    assert.deepEqual(tail([1,"banana","apple",4,5]), ["banana","apple",4,5]);
  });

  it("Should return all values of original array except the first", () => {
    assert.deepEqual(tail([5,3,12,5666]), [3,12,5666]);
  });
});