const assertEqual = function(actual,expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};


const tail = function(arr) {
  let newArr = arr.slice(1);
  return newArr;
};

// TEST CODE
let test1 = tail([1,"banana","apple",4,5]);

assertEqual(test1.length,4);
assertEqual(test1[0],"banana");
assertEqual(test1[1],"apple");




// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!