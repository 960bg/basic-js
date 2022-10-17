const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(mas) {
  let count = 0;
  mas.forEach(element => {
    for (let i = 0; i < element.length; i++) {
      if (element[i] === "^^") {
        count++;
      }
    }
  });

  return count;
  // throw new NotImplementedError('Not implemented');
  // // remove line with error and write your code here
}


countCats([
  [0, 1, '^^'],
  [0, '^^', 2],
  ['^^', 1, 2]
]);



















module.exports = {
  countCats
};
