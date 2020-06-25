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




const eqObjects = function(ob1, ob2) {
  let ob1Keys = Object.keys(ob1);
  if (Object.keys(ob1).length !== Object.keys(ob2).length) {
    return false;
  }
  for (let i of ob1Keys) {
    if (Array.isArray(ob1[i]) && Array.isArray(ob2[i])) {
      if (eqArrays(ob1[i], ob2[i]) === false) {
        return false;
      }
    } else if (ob1[i] !== ob2[i]) {
      return false;
    }
  }
  return true;
};


const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; // <= add this line
  let result = eqObjects(actual,expected);
  if (result === true) {
    console.log(`✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};


assertObjectsEqual({ a: "1", b: "2" },{ b: "2", a: "1" });