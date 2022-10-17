const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {

  function rec(m) {
    m = '' + m;
    if (m.length === 1) {
      return +m;
    }
    let sum = 0;
    for (let i = 0; i < m.length; i++) {
      // if ((i + 1) < m.length) {
      sum = (+sum) + (+m[i]);
      // + (+m[i + 1]);
      // }
    }

    // if (('' + sum).length !== 1) {
    //   rec(sum);
    // }
    return rec(sum);
  }








  let res = rec(n);
  console.log(res);

  return res;
}

module.exports = {
  getSumOfDigits
};



getSumOfDigits(91); 