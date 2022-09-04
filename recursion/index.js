const assert = require("assert").strict;

const bunyan = require("bunyan");
const log = bunyan.createLogger("recursion-logger");

const tests = {
  power: [
    {
      q: {
        base: 9,
        exp: 2
      },
      a: 81,
    },
    {
      q: {
        base: 2,
        exp: 7
      },
      a: 128,
    }
  ],
  factorial: [],
};

/**
 * Power
 * Raising a base number to the exponent
 *
 * Example:
 * 2^3 = 2 × 2 × 2, as 2 is multiplied by itself 3 times.
 */
function power(base, exp) {


}

/**
 * Factorial
 * The factorial function multiplies all whole numbers from our chosen number down to 1.
 *
 * Example:
 * 4! = 4 × 3 × 2 × 1 = 24
 */
function factorial(num) {}

tests.power.forEach((test) => {
  const actual = power(test.q.base, test.q.exp);

  assert.equal(actual, test.a, "no bueno");
});
