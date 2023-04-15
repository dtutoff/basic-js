const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(arr) {
  if (!Array.isArray(arr)) return false;

  let teamName = [];

  for (const el of arr) {
    if (typeof el === 'string') {
      teamName.push(el.trim().toUpperCase().slice(0, 1));
    }
  }

  return teamName.sort().join('');
}

module.exports = {
  createDreamTeam
};
