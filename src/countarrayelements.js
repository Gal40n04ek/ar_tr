'use strict';

/**
 * Check whether number is equal to zero.
 * @param {number} number to check
 * @return {Boolean}
 */
function isEqualZero(number) {
  if (number === 0) {
    return true;
  }
  return false;
}

/**
 * Check whether number is Negative.
 * @param {number} number to check
 * @return {Boolean}
 */
function isNegative(number) {
  if (number < 0) {
    return true;
  }
  return false;
}

/**
 * Check whether number is Positive.
 * @param {number} number to check
 * @return {Boolean}
 */
function isPositive(number) {
  if (number > 0) {
    return true;
  }
  return false;
}

/**
 * Check whether number is Prime.
 * @param {number} number to check
 * @return {Boolean}
 */
function isPrime(number) {
  if (number === 1) {
    return false; // Number 1 is neither prime, nor composite
  }
  if (number < 0 || Math.trunc(number) !== number) {
    return false; // The set of prime numbers - is a subset of natural numbers
  }
  if (number === 2) {
    return true; // Number 2 is prime
  }
  for (let i = 2; i <= Math.trunc(Math.sqrt(number)); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

/**
 * Count quantity of elements in the given array that satisfy condition.
 * @param {array} arrayGiven - any array of numbers.
 * @param {*} conditionFunction - callback function - condition.
 * @return {number} - quantity of elements.
 */
function countArrayElements(arrayGiven, conditionFunction) {
  if (arrayGiven.length === 0) {
    return 0;
  }
  let sum = 0;
  if (conditionFunction === undefined) {
    conditionFunction = (x) => 1;
  }
  for (let i = 0; i < arrayGiven.length; i++) {
    if (conditionFunction(arrayGiven[i])) {
      sum += 1;
    }
  }
  return sum;
}

/**
 * Tests.
 */
const assert = require('assert').strict;

assert.equal(countArrayElements([]), 0);
assert.equal(countArrayElements([1, 2, 3, 4, 5, 6]), 6);
assert.equal(countArrayElements([1, 2, 0, 4, 0, 6], isEqualZero), 2);
assert.equal(countArrayElements([1, -2, 3, -4, -5, 6], isNegative), 3);
assert.equal(countArrayElements([1, -2, 3, 4, 5, 6, 7, -9, 17], isPrime), 4);
assert.equal(countArrayElements([1, -2, 3, 4, 5, 6, -9], isPositive), 5);
