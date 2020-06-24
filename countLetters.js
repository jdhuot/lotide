const assertEqual = function(actual,expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};




const countLetters = function(sentence) {
  let result = {};
  let s2 = sentence.replace(/\s+/g, '');
  for (let i of s2) {
      if (result[i]) {
        result[i] += 1;
      } else {
        result[i] = 1;
      }
  }
  console.log(result);
  return result;
};



// countLetters("lighthouse in the house");