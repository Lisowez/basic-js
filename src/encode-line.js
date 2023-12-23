const { NotImplementedError } = require('../extensions/index.js');

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
  function encodeLine(str) {
    let arrStr = str.split('');
    let count = 1;
    let endArr = [];

    for (let i = 0; i < arrStr.length; i++) {
      if (arrStr[i] === arrStr[i + 1]) {
        count++;
      } else {
        if (count != 1) {
          endArr.push(count);
          endArr.push(arrStr[i]);
        } else {
          endArr.push(arrStr[i]);
        }
        count = 1;
      }
    }
    return endArr.join('')
  }


module.exports = {
  encodeLine
};
