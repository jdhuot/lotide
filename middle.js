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

console.log(middle([1,2,3,4]));
console.log(middle([1,2,3,4,5]));
console.log(middle([1,2]));
console.log(middle([1]));

assertArraysEqual(middle([1,2,3,4]),[2,3]);
assertArraysEqual(middle([1,2,3,4,5]),[3]);