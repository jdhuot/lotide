const assertArraysEqual = require("./assertArraysEqual");
// const eqArrays = require("./eqArrays");



const middle = function(arr) {
  let output = [];
  if (arr.length > 2 && arr.length % 2 === 0) {
    let mid2 = arr.length / 2;
    let mid1 = (arr.length / 2) - 1;
    output.push(arr[mid1]);
    output.push(arr[mid2]);
    return output;
  } else if (arr.length > 2 && arr.length % 2 !== 0) {
    let mid = arr.length / 2;
    mid = parseInt(mid);
    output.push(arr[mid]);
    return output;
  } else {
    return output;
  }
};

module.exports = middle;

