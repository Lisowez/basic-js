const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  let arr = [];
  for (let i = 0; i < matrix.length; i++) {
    arr = arr.concat(matrix[i]);
  }
  arr = arr.filter((item) => {
    return item == '^^';
  });
  return arr.length;
}

module.exports = {
  countCats
};
