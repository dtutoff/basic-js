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
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  const coppyArr = arr.slice();
  const result = [];

  coppyArr.forEach((el, index) => {
    if (el === '--discard-next' && index !== coppyArr.length - 1) {
      coppyArr.splice(index + 1, 1);
    }
    if (el === '--discard-prev' && index !== 0 && coppyArr[index - 1] !== '--discard-next') {
      result.pop();
    }
    if (el === '--double-next' && index !== coppyArr.length - 1) {
      result.push(coppyArr[index + 1]);
    }
    if (el === '--double-prev' && index !== 0 && coppyArr[index - 1] !== '--discard-next') {
      result.push(coppyArr[index - 1]);
    }
    if (el !== '--double-prev' && el !== '--double-next' && el !== '--discard-next' && el !== '--discard-prev') {
      result.push(el);
    }
  });

  return result;
}

module.exports = {
  transform
};
