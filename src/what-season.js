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
function getSeason(date) {
  //  throw new NotImplementedError('Not implemented');

  if (!date) {
    return 'Unable to determine the time of year!';
  }

  if (isNaN(Date.parse(date))) {
    throw new Error('Invalid date!');
  }

  if (Object.getOwnPropertySymbols(date).length !== 0) {
    throw new Error('Invalid date!');
  }

  const currentMonth = date.getMonth();

  const seasons = {
    summer: [5, 6, 7],
    autumn: [8, 9, 10],
    winter: [11, 0, 1],
    spring: [2, 3, 4],
  };

  for (const s in seasons) {
    if (seasons[s].includes(currentMonth)) {
      return s;
    }
  }
}

module.exports = {
  getSeason
};
