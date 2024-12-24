const { NotImplementedError } = require( '../extensions/index.js' );

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum( matrix ) {
  if ( !Array.isArray( matrix ) ) {
    return 0;
  }

  let sum = 0;
  for ( let i = 0; i < matrix.length; i++ ) {
    const row = matrix[i];
    for ( let j = 0; j < row.length; j++ ) {
      // если 1 ряд то над ним нулей быть не может - сложить все числа в ряду
      if ( i === 0 ) {
        sum += row[j];
      } else {
        const prevRow = matrix[i - 1];
        if ( prevRow[j] !== 0 ) {
          sum += row[j];
        }
      }
    }
  }
  return sum;
}

module.exports = {
  getMatrixElementsSum
};
