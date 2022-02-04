'use strict';

/**
 * Delete all the symbols in the string that differ from A-Z, make them small.
 * @param {string} stringToChange - any string with any symbols.
 * @return {string} stringToChange - that contains only small letters.
 */
function castString(stringToChange) {
  return stringToChange.trim().replace(/[^a-z]/gi, '').toLowerCase();
}

/**
 * Compare times of repeat char in both strings.
 * @param {string} firstString as baseString
 * @param {string} secondString as a sting to compare
 * @return {Boolean}
 */
function compareCharsNumber(firstString, secondString) {
  for (const char of firstString) {
    if (countCharRepeat(char, firstString) !==
        countCharRepeat(char, secondString)) {
      return false;
    }

    firstString = firstString.replaceAll(char, '');
    if (!firstString) {
      break;
    }

    secondString = secondString.replaceAll(char, '');
  }
  return true;
}

/**
 * Count how many times the char repeats in the string.
 * @param {char} symbol - the char in the string.
 * @param {string} stringToCheck - the string to check.
 * @return {number} - times of char repeat.
 */
function countCharRepeat(symbol, stringToCheck) {
  let count = 0;
  for (let i = 0; i < stringToCheck.length; i++) {
    if (stringToCheck[i] === symbol) {
      count++;
    }
  }
  return count;
}

/**
 * Check whether strings are anagrammas.
 * @param {string} firstString - any input string.
 * @param {string} secondString - another string to compare.
 * @return {Boolean} if the secondString is an anagramma o the first.
 */
function isAnagramma(firstString, secondString) {
  const baseString = castString(firstString);
  const comparedString = castString(secondString);
  if (baseString.length !== comparedString.length) {
    return false;
  }
  return compareCharsNumber(baseString, comparedString);
}


/**
 * Tests.
 */
const assert = require('assert').strict;
assert.equal(isAnagramma('Abbab |ag\\alamaga ', ' babbG# al* %ama agaa'), true);
assert.equal(isAnagramma('god', 'dodge'), false);
assert.equal(isAnagramma('good', 'wood'), false);
assert.equal(isAnagramma('tired', 'tried'), true);
