const { NotImplementedError } = require('../extensions/index.js');

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
function sortByHeight(arr) {
  const clearArr = arr.slice().sort((a, b) => a - b).filter(el => el > 0);

  return arr.map(el => {
    return el > 0 ? +clearArr.splice(0, 1).join('') : +el;
  });
}

module.exports = {
  sortByHeight
};
