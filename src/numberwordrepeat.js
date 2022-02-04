'use strict';

/**
 * Delete commas and extra spaces in the string, make letters small.
 * @param {string} sentence - any string with any symbols.
 * @return {string} sentence - that contains only small letters.
 */
function castString(sentence) {
  sentence = sentence.trim()
      .replace(/,/g, '')
      .replace(/\s+/g, ' ')
      .toLowerCase();
  return sentence;
}

/**
 * Make an array of separated words in the string.
 * @param {string} sentence to separate.
 * @return {array} of words.
 */
function separateWords(sentence) {
  return sentence.split(' ');
}

/**
 * Calculate times of words repeat and arrange data in Object.
 * @param {array} wordSet to count times of repeat.
 * @return {object} keyWord: count.
 */
function arrangeWords(wordSet) {
  const distinctWordSet = {};
  for (const word of wordSet) {
    if (word in distinctWordSet) {
      distinctWordSet[word] = distinctWordSet[word] + 1;
      continue;
    }
    distinctWordSet[word] = 1;
  }
  return distinctWordSet;
}

/**
 * Count times of words repeat in the given sentence
 * @param {string} sentence to count words
 * @return {Object}
 */
function countWordRepeat(sentence) {
  const simpleSentence = castString(sentence);
  const distinctWordSet = arrangeWords(separateWords(simpleSentence));
  return distinctWordSet;
}

/**
 * Tests.
 */
const assert = require('assert').strict;

assert.deepEqual(countWordRepeat(
    ' I like JavaScript'), {'i': 1, 'like': 1, 'javascript': 1});
assert.deepEqual(countWordRepeat(
    'Every day and every night'), {'every': 2, 'day': 1, 'and': 1, 'night': 1});
assert.deepEqual(countWordRepeat(
    'In the sea  , sealife, Sea'), {'in': 1, 'the': 1, 'sea': 2, 'sealife': 1});
