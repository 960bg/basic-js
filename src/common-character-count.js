const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let count = 0;
  // label_i:
  // let s_s3 = '';
  // let s_s4 = '';

  // if (s1.length > s2.length) {
  //   s_s3 = s2;
  //   s_s4 = s1;

  // } else {
  //   s_s3 = s1;
  //   s_s4 = s2;
  // }
  // * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
  // * Strings have 3 common characters - 2 "a"s and 1 "c".
  let obj = {};


  for (let i = 0; i < s1.length; i++) {
    for (let j = 0; j < s2.length; j++) {
      if (s1[i] === s2[j]) {
        if ((obj.length !== 0) && (obj[s2[j]] === j)) {
          continue;
        }
        obj[s2[j]] = j;
        count++;
        break;
        // continue label_i;
      }
    };

  }
  return count;
}

module.exports = {
  getCommonCharacterCount
};
