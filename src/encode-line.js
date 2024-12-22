const { NotImplementedError } = require( '../extensions/index.js' );

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine( str ) {
  if ( str.length <= 1 ) return str;

  const mas = str.split( '' );

  let count = 1;
  let resStr = '';

  for ( let i = 0; i < mas.length; i++ ) {
    // если последний элемент то проверить с предыдущим
    if ( i === mas.length - 1 ) {
      if ( mas[i - 1] === mas[i] ) {
        // count += 1;
        resStr += count + mas[i];
        return resStr;
      }
      resStr += mas[i];
      return resStr;
    }

    if ( mas[i] === mas[i + 1] ) {
      count += 1;

    } else {

      // были предыдущие совпадения то вставить их кол-во и букву, а потом текущую букву
      if ( count !== 1 ) {
        resStr += count + mas[i - 1];
        count = 1;
      } else {
        // совпадений не было
        resStr += mas[i];
      }

    }

  }
}



module.exports = {
  encodeLine
};
