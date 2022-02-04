'use strict';

/**
 * Check that the number is numerical and non-negative
 * @param {*} numberInput
 * @return {Boolean}
 */
function validateNumber(numberInput) {
  if (+numberInput !== numberInput) {
    return false;
  }

  if (numberInput < 0) {
    return false;
  }

  if (numberInput !== Math.trunc(numberInput)) {
    return false;
  }

  return true;
}

/**
 * Calculate the factotial of the number using "for"-loop
 * @param {*} numberInput
 * @return {number} result
 */
function calculateFactorial(numberInput) {
  if (!validateNumber(numberInput)) {
    throw new Error('The argument should be a Non-negative number');
  }

  let result = 1;

  for (let i = 1; i <= numberInput; i++) {
    result *= i;
  }

  return result;
}

/**
 * Calculate the factotial of the number using recursion
 * @param {*} numberInput
 * @return {number} result.
 */
function calculateFactorialRecursive(numberInput) {
  if (!validateNumber(numberInput)) {
    throw new Error('The argument should be a Non-negative number');
  }

  if (numberInput === 0) {
    return 1;
  }

  return numberInput * calculateFactorialRecursive(numberInput - 1);
}

/**
 * Calculate the factotial of the number using the recursion and memoization
 */
const factorial = (function() {
  const cache = {};

  return function calculateFactorialMemo(numberInput) {
    if (!validateNumber(numberInput)) {
      throw new Error('The argument should be a Non-negative number');
    }

    if (numberInput === 0) {
      return 1;
    }

    if (cache[numberInput] === undefined) {
      cache[numberInput] = calculateFactorialMemo(numberInput - 1);
    }

    return numberInput * cache[numberInput];
  };
})();

/**
 * Another way to calc. the factorial of the number using the recursion and memo
 */

const memoize = (functionToMemoize) => {
  const cache = {};
  return (...args) => {
    const firstArgument = args[0];
    if (firstArgument in cache) {
      return cache[firstArgument];
    }
    cache[firstArgument] = functionToMemoize(firstArgument);
    return cache[firstArgument];
  };
};

/**
 * Memoize function.
 */
const factorialMemo = memoize(
    (numberInput) => {
      if (!validateNumber(numberInput)) {
        throw new Error('The argument should be a Non-negative number');
      }

      if (numberInput === 0) {
        return 1;
      }

      return numberInput * factorialMemo(numberInput - 1);
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
