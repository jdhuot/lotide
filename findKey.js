const assertEqual = function(actual,expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};



const findKey = function(obj, callback) {
  for (let key in obj) {
    if (callback(obj[key])) {
      return key;
    } 
  }
 return undefined;
};


console.log(findKey({a:1,b:2,c:3}, a => a === 1));

console.log(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2)); // => "noma"


assertEqual((findKey({a:1,b:2,c:3}, a => a === 1)), "a");
assertEqual((findKey({a:1,b:2,c:true}, a => a === true)), "c");