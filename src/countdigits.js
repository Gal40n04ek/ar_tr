'use strict';

/**
 * Check the input data is a digit number.
 * @param {number} number - any number.
 * @return {Boolean}
 */
function isInteger(number) {
  return number === Math.trunc(number);
}

/**
 * Count digits quantity in the number usin loops.
 * @param {number} number - any input number.
 * @return {number}
 */
function countDigits(number) {
  let count = 0;
  while (Math.abs(number) >= 1) {
    number = number / 10;
    count++;
  }
  return count;
}

/**
 * Count digits quantity in the input number using recursion.
 * @param {number} number - any input number.
 * @return {number}
 */
function countDigitsRecursive(number) {
  if (Math.abs(number) >= 1) {
    return countDigitsRecursive(number/10) + 1;
  } else {
    return 0;
  }
}

/**
 * Add one more number unit by multiplying the input by 10.
 * @param {number} number - any number to increase.
 * @return {number}
 */
function addDigitsUnit(number) {
  return number * 10;
}

/**
 * Total count of digits in the float or integer number by recursion method.
 * @param {number} number
 * @return {number}
 */
function countDigitsNumbersRecursive(number) {
  if (number === 0) {
    return 1;
  }

  if (isInteger(number)) {
    return countDigitsRecursive(number);
  }

  if (Math.abs(number) < 1) {
    return countDigitsNumbersRecursive(addDigitsUnit(number)) + 1;
  }

  return countDigitsNumbers(addDigitsUnit(number));
}

/**
 * Total count of digits in the float or integer number by loops method.
 * @param {number} number
 * @return {number}
 */
function countDigitsNumbers(number) {
  if (number === 0) {
    return 1;
  }

  if (isInteger(number)) {
    return countDigits(number);
  }

  if (Math.abs(number) < 1) {
    return countDigitsNumbers(addDigitsUnit(number)) + 1;
  }

  return countDigitsNumbers(addDigitsUnit(number));
}

/**
 * Tests.
 */
const assert = require('assert').strict;

assert.equal(countDigitsNumbersRecursive(-1.45), 3);
assert.equal(countDigitsNumbersRecursive(0), 1);
assert.equal(countDigitsNumbersRecursive(0.454), 4);
assert.equal(countDigitsNumbersRecursive(-2), 1);

assert.equal(countDigitsNumbers(-1.45), 3);
assert.equal(countDigitsNumbers(0), 1);
assert.equal(countDigitsNumbers(0.454), 4);
assert.equal(countDigitsNumbers(-2), 1);
