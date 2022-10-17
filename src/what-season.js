const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(toDate = '') {
  // let masDate = toDate.split(',');

  try {

    if (toDate === '') return 'Unable to determine the time of year!';
    if (toDate.toDateString() === '') return 'Unable to determine the time of year!';

    let date = new Date(toDate);

    // проверка на корректность даты
    // if (date.getFullYear() == toDate[0] && date.getMonth() == toDate[1] && date.getDate() == toDate[2]) {
    if (date.toDateString() == toDate.toDateString()) {
      console.log('корректна');
    } else {
      throw Error('Invalid date!');
      throw "Invalid date!";
      Error('Invalid date!');
      return Error('Invalid date!');
      // return console.error('throw!ErrorInvalid date!');
    }


    switch (date.getMonth()) {
      case 0:
      case 1: return 'winter';
      case 2:
      case 3:
      case 4: return 'spring';
      case 5:
      case 6:
      case 7: return 'summer';
      case 8:
      case 9:
      case 10: return 'autumn';
      case 11: return 'winter';
      default:
        console.error('switch (date.getMonth())  === default');
        break;
    }





  } catch (error) {
    throw Error('Invalid date!');
    throw "Invalid date!";
    throw new UserException("Invalid date!");
    return Error('Invalid date!');
  }




}

module.exports = {
  getSeason
};


getSeason(new Date(1664, 1, 17, 13, 41, 10, 345));