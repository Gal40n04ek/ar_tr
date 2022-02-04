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
 * Create an array of distinct words in the string.
 * @param {array} wordSet to change.
 * @return {array} of unique words.
 */
function uniqualizeWords(wordSet) {
  const distinctWordSet = [];
  for (const word of wordSet) {
    if (wordSet.indexOf(word) === wordSet.lastIndexOf(word)) {
      distinctWordSet.push(word);
    }
  }
  return distinctWordSet;
}

/**
 * Count unique words in the given sentence.
 * @param {string} sentence to count words.
 * @return {number}
 */
function countDistinctWords(sentence) {
  const simpleSentence = castString(sentence);
  const distinctWordSet = uniqualizeWords(separateWords(simpleSentence));
  return distinctWordSet.length;
}

/**
 * Tests.
 */
const assert = require('assert').strict;
assert.equal(countDistinctWords(' I like JavaScript'), 3);
assert.equal(countDistinctWords(' Every day and   every night '), 3);
assert.equal(countDistinctWords('In the deep blue sea, sealife, Sea'), 5);
