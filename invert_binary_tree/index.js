const assert = require('assert').strict;

function invert_binary_tree(input) {
  return input;
}

const testOne = invert_binary_tree([2, 1, 3]);
assert.deepStrictEqual(testOne, [2, 3, 1]);
