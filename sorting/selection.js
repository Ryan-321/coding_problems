const assert = require("assert").strict;

const bunyan = require('bunyan');
const log = bunyan.createLogger({name: 'selection-logger'});

/**
 * Steps:
 *   - compare each value against the lowest number and record that index
 *   - swap lowest number with index from above as we loop through the array
 *   - incrementation with each pass-through, building up a sorted array from front
 * 
 * Big-O:
 *  - O(N)^2
 * 
*/

const tests = [
  {
    q: [],
    a: []
  },
  {
    q: true,
    a: []
  },
  {
    q: null,
    a: []
  },
  {
    q: {},
    a: []
  },
  {
    q: [4,2],
    a: [2,4]
  },
  {
    q: [2,6,1,3],
    a: [1,2,3,6]
  },
  {
    q: [4,2,7,1,3],
    a: [1,2,3,4,7]
  }
];

function select(ulist) {
  log.info("Selection Sort running :=) ");
  const isArrayAndHasLength = ulist && Array.isArray(ulist) && ulist.length > 0;
  if(!isArrayAndHasLength) return [];

  if(ulist.length === 2) {
    return ulist[0] < ulist[1] ? ulist : [ulist[1], ulist[0]];
  } else if(ulist.length === 1) {
    return ulist;
  }

  for(let i = 0; i < ulist.length - 1; i++) {
    let lowestNumberIndex = i;
    // cycles through list to find lowest value, comparison step
    for(let j = i + 1; j < ulist.length; j++) {
      if(ulist[j] < ulist[lowestNumberIndex]) {
        lowestNumberIndex = j;
      }
    }
    // if we have a new lowest value after cycling through list, swap step
    if(lowestNumberIndex !== i) {
      let temp = ulist[i]; 
      ulist[i] = ulist[lowestNumberIndex];
      ulist[lowestNumberIndex] = temp;
    }
  }
  return ulist;
}


tests.forEach((test) => {
  const actual = select(test.q);

  assert.deepEqual(actual, test.a, "no bueno");
});