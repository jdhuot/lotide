const middle = require("../middle");
const assertArraysEqual = require("../assertArraysEqual");


console.log(middle([1,2,3,4]));
console.log(middle([1,2,3,4,5]));
console.log(middle([1,2]));
console.log(middle([1]));

assertArraysEqual(middle([1,2,3,4]),[2,3]);
assertArraysEqual(middle([1,2,3,4,5]),[3]);