'use strict';

/**
 * Check that the number is numerical and non-negative
 * @param {*} number
 * @return {Boolean}
 */
function validateNumber(number) {
  if (+number !== number) {
    return false;
  }

  if (number < 0) {
    return false;
  }

  if (number !== Math.trunc(number)) {
    return false;
  }

  return true;
}

/**
 * Calculate the factotial of the number using "for"-loop
 * @param {*} number
 * @return {number} result
 */
function calculateFactorial(number) {
  if (!validateNumber(number)) {
    throw new Error('The argument should be a Non-negative number');
  }

  let result = 1;

  for (let i = 1; i <= number; i++) {
    result *= i;
  }

  return result;
}

/**
 * Calculate the factotial of the number using recursion
 * @param {*} number
 * @return {number} result.
 */
function calculateFactorialRecursive(number) {
  if (!validateNumber(number)) {
    throw new Error('The argument should be a Non-negative number');
  }

  if (number === 0) {
    return 1;
  }

  return number * calculateFactorialRecursive(number - 1);
}

/**
 * Calculate the factotial of the number using the recursion and memoization
 */
const factorial = (function() {
  const cache = {};

  return function calculateFactorialMemo(number) {
    if (!validateNumber(number)) {
      throw new Error('The argument should be a Non-negative number');
    }

    if (number === 0) {
      return 1;
    }

    if (cache[number] === undefined) {
      cache[number] = calculateFactorialMemo(number - 1);
    }

    return number * cache[number];
  };
})();

/**
 * Another way to calc. the factorial of the number using the recursion and memo
 */

const memoize = (fn) => {
  const cache = {};
  return (...args) => {
    const n = args[0];
    if (n in cache) {
      return cache[n];
    }
    cache[n] = fn(n);
    return cache[n];
  };
};

/**
 * Memoize function.
 */
const factorialMemo = memoize(
    (number) => {
      if (!validateNumber(number)) {
        throw new Error('The argument should be a Non-negative number');
      }

      if (number === 0) {
        return 1;
      }

      return number * factorialMemo(number - 1);
    },
);

/**
 * Tests.
 */
const assert = require('assert').strict;

assert.equal(calculateFactorial(5), 120);
assert.equal(calculateFactorial(1), 1);
assert.equal(calculateFactorial(0), 1);

assert.equal(calculateFactorialRecursive(5), 120);
assert.equal(calculateFactorialRecursive(1), 1);
assert.equal(calculateFactorialRecursive(0), 1);

assert.equal(factorial(5), 120);
assert.equal(factorial(1), 1);
assert.equal(factorial(0), 1);
assert.equal(factorial(6), 720);

assert.equal(factorialMemo(5), 120);
assert.equal(factorialMemo(1), 1);
assert.equal(factorialMemo(0), 1);
assert.equal(factorialMemo(6), 720);
