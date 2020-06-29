const assertArraysEqual = require("../assertArraysEqual");
const assertEqual = require("../assertEqual");



// TEST CODE
assertArraysEqual([1, 2, 3], [1, 2, 3]); // => should PASS
assertArraysEqual([1, "2", 3], [1, 2, 3]); // => should FAIL