const assertEqual = function(actual,expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};



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



const letterPositions = function(sentence) {
  let result = {};
  for (let i in sentence) {
    let value = sentence[i];
    if (value !== " ") {
      if (result[value]) {
        result[value].push(Number(i));
      } else {
        result[value] = [Number(i)];
      }
    }
  }
  console.log(result);
  return result;
};


letterPositions("lighthouse in the house");

letterPositions("hello");

assertArraysEqual(letterPositions("hello").h,[0]);
assertArraysEqual(letterPositions("hello").e,[1]);
assertArraysEqual(letterPositions("hello").l,[2,3]);
assertArraysEqual(letterPositions("hello").o,[4]);