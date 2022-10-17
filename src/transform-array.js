const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw Error(`'arr' parameter must be an instance of the Array!`);
  }
  // throw new NotImplementedError('Not implemented');
  // // remove line with error and write your code here

  const discard_next = '--discard-next';
  // исключает следующий элемент массива из преобразованного массива.
  const discard_prev = '--discard-prev';
  // исключает предыдущий элемент массива из преобразованного массива.
  const double_next = '--double-next';
  // дублирует следующий элемент массива в преобразованном массиве.
  const double_prev = '--double-prev';
  // дублирует предыдущий элемент массива в преобразованном массиве.
  let mas = [];
  let index = 0;
  let dn = 0;
  let dp = 0;
  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case discard_next:
        if ((i + 1) < arr.length) {
          index = i + 2;
          dn = 1;
          i++;
        }
        break;

      case discard_prev:
        if (mas.length > 0) {
          if ((index === i) && (dn == 1)) {
            dn = 0;
            break;
          }
          index = i + 1;
          dp = 1;
          mas.pop();
        };
        break;

      case double_next:
        if ((i + 1) < arr.length) {
          if ((index === i) && (dn == 1)) {
            dn = 0;
            break;
          }
          mas.push(arr[i + 1]);
          // mas.push(arr[i+1]);
        };
        break;

      case double_prev:
        if (mas.length > 0) {
          if ((index === i) && (dn == 1)) {
            dn = 0;
            break;
          }
          mas.push(mas[mas.length - 1]);

        };
        break;

      default:
        mas.push(arr[i]);
        break;
    }

  }

  console.log(mas);
  return mas;

}

module.exports = {
  transform
};


transform([1, 2, 3, '--discard-next', 1337, '--double-prev', 4, 5]);
// transform(['--discrard-next', '1']);
// //  => [1, 2, 3, 4, 4, 5]
// transform([1, 2, 3, '--discard-prev', 4, 5]);