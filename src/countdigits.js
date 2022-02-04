'use strict';

/**
 * Check the input data is a digit number.
 * @param {number} numberToCheck - any number.
 * @return {Boolean}
 */
function isInteger(numberToCheck) {
  return numberToCheck === Math.trunc(numberToCheck);
}

/**
 * Count digits quantity in the number usin loops.
 * @param {number} numberInput - any input number.
 * @return {number}
 */
function countDigits(numberInput) {
  let count = 0;
  while (Math.abs(numberInput) >= 1) {
    numberInput = numberInput / 10;
    count++;
  }
  return count;
}

/**
 * Count digits quantity in the input number using recursion.
 * @param {number} numberInput - any input number.
 * @return {number}
 */
function countDigitsRecursive(numberInput) {
  if (Math.abs(numberInput) >= 1) {
    return countDigitsRecursive(numberInput / 10) + 1;
  } else {
    return 0;
  }
}

/**
 * Add one more number unit by multiplying the input by 10.
 * @param {number} numberFloat - any number to increase.
 * @return {number}
 */
function addDigitsUnit(numberFloat) {
  return numberFloat * 10;
}

/**
 * Total count of digits in the float or integer number by recursion method.
 * @param {number} numberInput
 * @return {number}
 */
function countDigitsNumbersRecursive(numberInput) {
  if (numberInput === 0) {
    return 1;
  }

  if (isInteger(numberInput)) {
    return countDigitsRecursive(numberInput);
  }

  if (Math.abs(numberInput) < 1) {
    return countDigitsNumbersRecursive(addDigitsUnit(numberInput)) + 1;
  }

  return countDigitsNumbers(addDigitsUnit(numberInput));
}

/**
 * Total count of digits in the float or integer number by loops method.
 * @param {number} numberInput
 * @return {number}
 */
function countDigitsNumbers(numberInput) {
  if (numberInput === 0) {
    return 1;
  }

  if (isInteger(numberInput)) {
    return countDigits(numberInput);
  }

  if (Math.abs(numberInput) < 1) {
    return countDigitsNumbers(addDigitsUnit(numberInput)) + 1;
  }

  return countDigitsNumbers(addDigitsUnit(numberInput));
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
