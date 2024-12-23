const { NotImplementedError } = require( '../extensions/index.js' );

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address( strAddr ) {
  const makAddr = strAddr.split( '-' );
  let res = 0;
  if ( makAddr.length > 6 ) {
    res = false;
    console.debug( 'strAddr', strAddr );
    console.debug( 'res', res );
    return res;
  }
  for ( const el of makAddr ) {
    if ( isMak( el ) === false ) {
      res = false;
      console.debug( 'strAddr', strAddr );
      console.debug( 'el', el );
      console.debug( 'res', res );
      return res;
    }
  }

  res = true;
  console.debug( 'strAddr', strAddr );
  console.debug( 'res', res );
  return res;

  function isMak( addr ) {
    const regexp = /[a-f\d]/i;
    const masMak = addr.split( '' );
    for ( const el of masMak ) {
      if ( el.search( regexp ) === -1 ) {
        return false;
      }
    }
    return true;
  }
}
module.exports = {
  isMAC48Address
};
