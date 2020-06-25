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




const takeUntil = function(array, callback) {
  let newArr = [];
  for (let item of array) {
    let test = callback(item);
    if (test) {
      break;
    }
    newArr.push(item);
  }
  return newArr;
};



const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);


assertArraysEqual(takeUntil(data1, x => x < 0),[1,2,5,7,2]);
assertArraysEqual(takeUntil(data2, x => x === ','),["I've", "been", "to", "Hollywood"]);