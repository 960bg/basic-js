const { NotImplementedError } = require( '../extensions/index.js' );

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats( domains ) {
  const obj = {};

  for ( const domain of domains ) {
    getDomain( domain );
  }

  return obj;

  function getDomain( str ) {
    const mas = str.split( '.' ).map( v => `.${ v }` );
    const resMas = [];
    let indexResMas = 0;
    for ( let i = mas.length - 1; i >= 0; i-- ) {
      if ( resMas.length === 0 ) {
        resMas.push( mas[i] );
        addProp( mas[i] );
      } else {
        resMas.push( `${ resMas[indexResMas] + mas[i] }` );
        addProp( `${ resMas[indexResMas] + mas[i] }` );
        indexResMas += 1;
      }
    }
  }

  function addProp( prop ) {
    if ( Object.hasOwn( obj, prop ) ) {
      obj[prop] += 1;
      return;
    }
    obj[prop] = 1;
    return;
  }

}

module.exports = {
  getDNSStats
};
