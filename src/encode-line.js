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
  const chars = str.split('');
  const arr = [];
  let result = '';

  chars.forEach((char, i) => {
    if (arr.includes(char) || arr.length === 0) {
      arr.push(char);
    } else {
      result += `${arr.length > 1 ? arr.length : ''}${arr[0]}`;
      arr.length = 0;
      arr.push(char);
    }

    if (i === chars.length - 1 && arr.length) {
      result += `${arr.length > 1 ? arr.length : ''}${arr[0]}`;
    }
  });

  return result;
}

module.exports = {
  encodeLine
};
