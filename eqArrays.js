const assertEqual = require("./assertEqual");


const eqArrays = function(arr1, arr2) {
  let status = true;
  if (arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return status = false;
      } else {
        status = true;
      }
    }
  } else {
    return false;
  }
  return status;
};


module.exports = eqArrays;


