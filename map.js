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



const map = function(array, callBack) {
  let newArr = [];
  for (let item of array) {
    newArr.push(callBack(item));
  }

  return newArr;
};



const words = ["ground", "control", "to", "major", "tom"];

const results1 = map(words, word => word[0]);
console.log(results1);


assertArraysEqual(map(["hello","there"],word => word[0]),["h","t"]);
assertArraysEqual(map([1,2,3,4],num => num * 5),[5,10,15,20]);
assertArraysEqual(map(["The","Foxes","Dream"],word => word[0]),["T","F","D"]);