const assertEqual = function(actual,expected) {
  if (actual === expected) {
    return `✅ Assertion Passed: ${actual} === ${expected}`;
    // return true;
  } else {
    return `🛑 Assertion Failed: ${actual} !== ${expected}`;
    // return false;
  }
};

module.exports = assertEqual;

// TEST CODE


