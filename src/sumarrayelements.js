'use strict';

/**
 * Check whether number is Even.
 * @param {number} numberInput to check.
 * @return {Boolean}
 */
function isEven(numberInput) {
  return numberInput % 2 === 0;
}

/**
 * Check whether number is Odd.
 * @param {number} numberInput to check.
 * @return {Boolean}
 */
function isOdd(numberInput) {
  return numberInput % 2 === 1;
}

/**
 * Check whether number can be divided by 3 without remainder.
 * @param {number} numberInput to check.
 * @return {Boolean}
 */
function isFactorThree(numberInput) {
  return numberInput % 3 === 0;
}

/**
 * Check whether number is Even and Positive.
 * @param {number} numberInput to check.
 * @return {Boolean}
 */
function isPositiveEven(numberInput) {
  return numberInput % 2 === 0 && numberInput > 0;
}

/**
 * Calculate the sum of array elements that satisfy condition.
 * @param {array} numberArray - the given array.
 * @param {*} conditionFunction - callback function - condition to satisfy.
 * @return {number} sum.
 */
function calculateSumArrayElements(numberArray, conditionFunction) {
  if (numberArray.length === 0) {
    return 0;
  }
  let sum = 0;

  if (conditionFunction === undefined ||
    typeof conditionFunction !== 'function') {
    for (let i = 0; i < numberArray.length; i++) {
      sum += numberArray[i];
    }
    return sum;
  }

  for (let i = 0; i < numberArray.length; i++) {
    if (conditionFunction(numberArray[i])) {
      sum += numberArray[i];
    }
  }
  return sum;
}

/**
 * Calculate the sum of array elements that satisfy condition. Recursion method.
 * @param {array} numberArray - the given array.
 * @param {*} conditionFunction - callback function - condition to satisfy.
 * @return {number} sum.
 */
function calculateSumArrayElementsRecursion(numberArray, conditionFunction) {
  if (numberArray.length === 0) {
    return 0;
  }

  if (conditionFunction === undefined ||
    typeof conditionFunction !== 'function') {
    return numberArray[0] + calculateSumArrayElementsRecursion(
        numberArray.splice(1, numberArray.length-1));
  }

  if (conditionFunction(numberArray[0])) {
    return numberArray[0] +
        calculateSumArrayElementsRecursion(
            numberArray.splice(1, numberArray.length-1), conditionFunction);
  }
  return calculateSumArrayElementsRecursion(
      numberArray.splice(1, numberArray.length-1), conditionFunction);
}

/**
 * Tests.
 */
const assert = require('assert').strict;

assert.equal(calculateSumArrayElements([]), 0);
assert.equal(calculateSumArrayElements([1, 2, 3, 4, 5, 6]), 21);
assert.equal(calculateSumArrayElements([1, 2, 3, 4, 5, 6], isEven), 12);
assert.equal(calculateSumArrayElements([1, 2, 3, 4, 5, 6], isOdd), 9);
assert.equal(calculateSumArrayElements(
    [1, 2, 3, 4, 5, 6, -9], isFactorThree), 0);
assert.equal(calculateSumArrayElements(
    [1, -2, 3, 4, 5, 6, -9], isPositiveEven), 10);

assert.equal(calculateSumArrayElementsRecursion([]), 0);
assert.equal(calculateSumArrayElementsRecursion([1, 2, 3, 4, 5, 6]), 21);
assert.equal(calculateSumArrayElementsRecursion(
    [1, 2, 3, 4, 5, 6], isEven), 12);
assert.equal(calculateSumArrayElementsRecursion([1, 2, 3, 4, 5, 6], isOdd), 9);
assert.equal(calculateSumArrayElementsRecursion(
    [1, 2, 3, 4, 5, 6, -9], isFactorThree), 0);
assert.equal(calculateSumArrayElementsRecursion(
    [1, -2, 3, 4, 5, 6, -9], isPositiveEven), 10);
