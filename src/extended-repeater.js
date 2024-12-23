const { NotImplementedError } = require( '../extensions/index.js' );

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', 
 * { 
 * repeatTimes: 3, 
 * separator: '**', 
 * addition: 'PLUS', 
 * additionRepeatTimes: 3, 
 * additionSeparator: '00' ,
 * })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater( inStr, options ) {
  // console.debug( '===============' );
  // console.debug( '===============' );
  // console.debug( '===repeater===' );
  // console.debug( '===============' );
  // console.debug( '===============' );

  if ( !options ) return '';

  // console.debug( 'str', inStr );
  // console.debug( 'options', options );

  let str = String( inStr );

  // вторая строка
  let strAddition = false;
  if ( options.hasOwnProperty( 'addition' ) ) {
    strAddition = String( options['addition'] );
  }

  // разделитель повторений str
  let separator = '+';
  if ( options.hasOwnProperty( 'separator' ) ) {
    separator = String( options['separator'] );
  }

  // разделитель повторений strAddition
  let additionSeparator = '|';
  if ( options.hasOwnProperty( 'additionSeparator' ) ) {
    additionSeparator = String( options['additionSeparator'] );
  }

  // задает количество number повторений str;
  let repeatTimes = 0;
  if ( options.hasOwnProperty( 'repeatTimes' ) ) {
    repeatTimes = Number( options['repeatTimes'] );
  }

  // задает количество number повторений strAddition;
  let additionRepeatTimes = 0;
  if ( options.hasOwnProperty( 'additionRepeatTimes' ) ) {
    additionRepeatTimes = Number( options['additionRepeatTimes'] );
  }

  // если вторая строка есть то начать формирование повторов с нее
  if ( strAddition !== false && additionRepeatTimes > 0 ) {
    strAddition = repeatStr( strAddition, additionRepeatTimes, additionSeparator );
    // console.debug( 'strAddition:', strAddition );

  }

  if ( repeatTimes > 0 && strAddition !== false && additionRepeatTimes > 0 ) {
    str = repeatStr( `${ str + strAddition }`, repeatTimes, separator );
    return str;
  }

  if ( repeatTimes > 0 && strAddition !== false ) {
    str = repeatStr( `${ str + strAddition }`, repeatTimes, separator );
    return str;
  }
  if ( repeatTimes <= 0 && strAddition !== false ) {
    str = `${ str + strAddition }`;
    return str;
  }

  if ( repeatTimes > 0 ) {
    str = repeatStr( `${ str }`, repeatTimes, separator );
    return str;
  }


  return str;

  function repeatStr( str, count, separator ) {
    let resStr = '';
    for ( let i = 0; i < count; i++ ) {
      if ( i === count - 1 ) {
        resStr += str;
      } else {
        resStr += str + separator;
      }
    }
    return resStr;
  }

  /* Ваша задача — реализовать функцию repeater(str, options).
   Эта функция возвращает повторение string на основе заданных параметров:

  str- это string повторять;

  options представляет собой набор object параметров, содержащий свойства:
  repeatTimes задает количество number повторений str;
  separator является string разделяющим повторением str;
  addition является дополнительным string, 
  которое будет добавляться к каждому повторению str;
  additionRepeatTimes задает количество number повторений addition;
  additionSeparator представляет собой string разделяющее повторение addition.
  Параметры str и addition являются strings параметрами по умолчанию. 
  В случае, если тип этих параметров отличается, их необходимо преобразовать в string.
  
  separator и additionSeparator параметры strings.
  
  repeatTimes и additionRepeatTimes являются целыми числами numbers
  (при отсутствии любого из них соответствующая строка не повторяется).
  
  Единственный обязательный параметр — str, 
  все остальные могут быть не определены. 
  separator значение по умолчанию — '+'. 
  additionSeparator значение по умолчанию — '|'. */






}

module.exports = {
  repeater
};
