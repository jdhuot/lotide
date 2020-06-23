const assertEqual = function(actual,expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};


const tail = function(arr) {
  let newArr = arr.slice(1);
  // console.log(newArr);
  return newArr;
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1,1);

let test1 = tail([1,2,3,4,5]);

assertEqual(test1.length,4);
assertEqual(test1[0],2);
assertEqual(test1[1],3);



// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!