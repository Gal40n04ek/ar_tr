'use strict';

/**
 * Check whether number is equal to zero.
 * @param {number} number to check
 * @return {number} 1 if true, 0 if false
 */
function isEqualZero(number) {
  if (number === 0) {
    return 1;
  }
  return 0;
}

/**
 * Check whether number is Negative.
 * @param {number} number to check
 * @return {number} 1 if true, 0 if false
 */
function isNegative(number) {
  if (number < 0) {
    return 1;
  }
  return 0;
}

/**
 * Check whether number is Positive.
 * @param {number} number to check
 * @return {number} 1 if true, 0 if false
 */
function isPositive(number) {
  if (number > 0) {
    return 1;
  }
  return 0;
}

/**
 * Check whether number is Prime.
 * @param {number} number to check
 * @return {number} 1 if true, 0 if false
 */
function isPrime(number) {
  if (number === 1) {
    return 0; // Number 1 is neither prime, nor composite
  }
  if (number < 0 || Math.trunc(number) !== number) {
    return 0; // The set of prime numbers - is a subset of natural numbers
  }
  if (number === 2) {
    return 1; // Number 2 is prime
  }
  for (let i = 2; i <= Math.trunc(Math.sqrt(number)); i++) {
    if (number % i === 0) {
      return 0;
    }
  }
  return 1;
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
    sum += conditionFunction(arrayGiven[i]);
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
