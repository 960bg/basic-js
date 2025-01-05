const { NotImplementedError } = require( '../extensions/index.js' );

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight( mas ) {
  const arr = [...mas];

  const ones = arr.reduce( ( acc, val, i ) => {
    if ( val === -1 ) {
      console.log( 'acc', acc );

      acc[i] = -1;
    }
    return acc;
  }, {} );

  const filtArr = arr.filter( el => el !== -1 );
  filtArr.sort( ( a, b ) => a - b );

  for ( const key of Object.keys( ones ) ) {
    filtArr.splice( key, 0, -1 );
  }

  return filtArr;
}

module.exports = {
  sortByHeight
};
