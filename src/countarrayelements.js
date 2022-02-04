'use strict';

/**
 * Check whether number is equal to zero.
 * @param {number} numberInput to check
 * @return {Boolean}
 */
function isEqualZero(numberInput) {
  return numberInput === 0;
}

/**
 * Check whether number is Negative.
 * @param {number} numberInput to check
 * @return {Boolean}
 */
function isNegative(numberInput) {
  return numberInput < 0;
}

/**
 * Check whether number is Positive.
 * @param {number} numberInput to check
 * @return {Boolean}
 */
function isPositive(numberInput) {
  return numberInput > 0;
}

/**
 * Check whether number is Prime.
 * @param {number} numberInput to check
 * @return {Boolean}
 */
function isPrime(numberInput) {
  if (numberInput === 1 || numberInput < 0 ||
    Math.trunc(numberInput) !== numberInput) {
    return false;
  }

  if (numberInput === 2) {
    return true;
  }

  for (let i = 2; i <= Math.trunc(Math.sqrt(numberInput)); i++) {
    if (numberInput % i === 0) {
      return false;
    }
  }
  return true;
}

/**
 * Count quantity of elements in the given array that satisfy condition.
 * @param {array} numberArray - any array of numbers.
 * @param {*} conditionFunction - callback function - condition.
 * @return {number} - quantity of elements.
 */
function countArrayElements(numberArray, conditionFunction) {
  if (numberArray.length === 0) {
    return 0;
  }
  let summaryQuantity = 0;
  if (conditionFunction === undefined ||
    typeof conditionFunction !== 'function') {
    return numberArray.length;
  }
  for (let i = 0; i < numberArray.length; i++) {
    if (conditionFunction(numberArray[i])) {
      summaryQuantity++;
    }
  }
  return summaryQuantity;
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
