const assertEqual = require("./assertEqual");

const assertArraysEqual = function(arr1, arr2) {
  let status;
  if (arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        status = false;
        break;
      } else {
        status = true;
      }
    }
  } else {
    status = false;
  }
  if (status === true) {
    console.log(`✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

module.exports = assertArraysEqual;
