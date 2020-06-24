
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



const without = function(srcArr, itemsToRemoveArr) {
  let srcArr2 = srcArr.slice(0);
  for (let i = 0; i < srcArr2.length; i++) {
    if (itemsToRemoveArr.includes(srcArr2[i])) {
      srcArr2.splice(i,1);
    }
  }
  return srcArr2;
};

console.log(without(["max",1,2,3,4],[4,2,5,"max"]));



const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);