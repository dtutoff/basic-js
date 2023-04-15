const { NotImplementedError } = require('../extensions/index.js');

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
/*

0.693 - is an approximation of the natural logarithm

t = ln(N/N0)/k

a = ln(N/N0);
k = 0.692/t1/2;

t1/2 - HALF_LIFE_PERIOD;
N - MODERN_ACTIVITY;
N0 - sampleActivity;

*/

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;


function dateSample(sampleActivity) {
  if (
    typeof sampleActivity !== 'string' ||
    !parseFloat(sampleActivity) ||
    parseFloat(sampleActivity) > 15 ||
    parseFloat(sampleActivity) < 0) {
    return false;
  }

  const a = MODERN_ACTIVITY / parseFloat(sampleActivity);
  const k = 0.693 / HALF_LIFE_PERIOD;
  const t = Math.log(a) / k;

  return Math.ceil(t);
}

module.exports = {
  dateSample
};
