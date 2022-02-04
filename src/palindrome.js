'use strict';

/**
 * Check that a given string is a Palindrome.
 * @param {string} stringToCheck - any input string.
 * @return {Boolean}
 */
function isPalindrome(stringToCheck) {
  const lengthCheck = Math.trunc(stringToCheck.length / 2);
  for (let i = 0; i < lengthCheck; i++) {
    if (stringToCheck[i] !== stringToCheck[stringToCheck.length - i - 1]) {
      return false;
    }
  }
  return true;
}

/**
 * Tests.
 */
const assert = require('assert').strict;
assert.equal(isPalindrome('redivider'), true);
assert.equal(isPalindrome('civic'), true);
assert.equal(isPalindrome('9 reviver 9'), true);
assert.equal(isPalindrome('go%%og'), true);
assert.equal(isPalindrome('redivi1der'), false);
