const { NotImplementedError } = require( '../extensions/index.js' );

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit( n ) {
  const mas = String( n ).split( '' ).map( v => Number( v ) );
  const maxMas = [];
  for ( let i = 0; i < mas.length; i++ ) {
    maxMas.push( Number( mas.filter( ( v, j ) => j !== i ).join( '' ) ) );
  }
  const max = Math.max( ...maxMas );
  return max;
}

module.exports = {
  deleteDigit
};
