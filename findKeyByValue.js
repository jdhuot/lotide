const assertEqual = function(actual,expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

let ob = {
  a:1,
  b:2,
  c:3
};


const findKeyByValue = function(object, value) {
  if (Object.values(object).includes(value)) {
    for (let element in object) {
      if (object[element] === value) {
        return element;
      }
    }
  } else {
    return undefined;
  }
};

 
  
console.log(findKeyByValue(ob, 1));


const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

