'use strict';

/**
 * Check whether number is Even.
 * @param {number} number to check.
 * @return {number} number if true, 0 if false.
 */
function isEven(number) {
  if (number % 2 === 0) {
    return number;
  }
  return 0;
}

/**
 * Check whether number is Odd.
 * @param {number} number to check.
 * @return {number} number if true, 0 if false.
 */
function isOdd(number) {
  if (number % 2 === 1) {
    return number;
  }
  return 0;
}

/**
 * Check whether number can be divided by 3 without remainder.
 * @param {number} number to check.
 * @return {number} number if true, 0 if false.
 */
function isFactorThree(number) {
  if (number % 3 === 0) {
    return number;
  }
  return 0;
}

/**
 * Check whether number is Even and Positive.
 * @param {number} number to check.
 * @return {number} number if true, 0 if false.
 */
function isPositiveEven(number) {
  if (number % 2 === 0 && number > 0) {
    return number;
  }
  return 0;
}

/**
 * Calculate the sum of array elements that satisfy condition.
 * @param {array} arrayGiven - the given array.
 * @param {*} conditionFunction - callback function - condition to satisfy.
 * @return {number} sum.
 */
function calculateSumArrayElements(arrayGiven, conditionFunction) {
  if (arrayGiven.length === 0) {
    return 0;
  }
  let sum = 0;
  if (conditionFunction === undefined) {
    conditionFunction = (x) => x;
  }

  for (let i = 0; i < arrayGiven.length; i++) {
    sum += conditionFunction(arrayGiven[i]);
  }
  return sum;
}

/**
 * Calculate the sum of array elements that satisfy condition. Recursion method.
 * @param {array} arrayGiven - the given array.
 * @param {*} conditionFunction - callback function - condition to satisfy.
 * @return {number} sum.
 */
function calculateSumArrayElementsRecursion(arrayGiven, conditionFunction) {
  if (arrayGiven.length === 0) {
    return 0;
  }
  if (conditionFunction === undefined) {
    conditionFunction = (x) => x;
  }
  return conditionFunction(arrayGiven[0]) +
        calculateSumArrayElementsRecursion(
            arrayGiven.splice(1, arrayGiven.length-1), conditionFunction);
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
