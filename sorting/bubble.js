const assert = require("assert").strict;

const bunyan = require('bunyan');
const log = bunyan.createLogger({name: 'bubble'});

/**
 * Steps:
 *   - iterate through the array and compare each value the next index in the array
 *   - swap lowest number with index as we loop through the array
 *   - decrement the length of the array w/ each pass-through, b/c we bubbled up the highest value to end
 * 
 * Big-O:
 *   - O(N)^2
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

function bubble(ulist) {
  log.info("Bubble Sort running :=) ");
  const isArrayAndHasLength = ulist && Array.isArray(ulist) && ulist.length > 0;
  if(!isArrayAndHasLength) return [];

  if(ulist.length === 2) {
    return ulist[0] < ulist[1] ? ulist : [ulist[1], ulist[0]];
  } else if(ulist.length === 1) {
    return ulist;
  }
  
  let sorted = false;
  let unsorted_until_index = ulist.length - 1;

  while(!sorted) {
    sorted = true;
    for(let i = 0; i < unsorted_until_index; i++) {
    // cycles through list to find lowest value, comparison step
      sorted = true;
      if(ulist[i] > ulist[i + 1]) {
        // if we have a new lowest value after cycling through list, swap step
        const higherNum = ulist[i];
        const lowerNum = ulist[i + 1];
        ulist[i] = lowerNum;
        ulist[i + 1] = higherNum;
        sorted = false;
      }

    // log.info('after', { ulist });
    }
    unsorted_until_index -= 1;
  }
  return ulist;
}

tests.forEach((test) => {
  const actual = bubble(test.q);

  assert.deepEqual(actual, test.a, "no bueno");
});