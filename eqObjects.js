const assertEqual = function(actual,expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
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


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
eqObjects(ab, abc); // => false

assertEqual(eqObjects(ab, ba), true);

assertEqual(eqObjects(ab, abc), false);


const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false