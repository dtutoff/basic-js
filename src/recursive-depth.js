const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    // throw new NotImplementedError('Not implemented');
    let count = 1;
    let maxCount = 1;

    for (const el of arr) {
      if (Array.isArray(el)) {
        count += this.calculateDepth(el);
      }
      maxCount = count > maxCount ? count : maxCount;
      count = 1;
    }

    return maxCount;
  }
}

module.exports = {
  DepthCalculator
};
