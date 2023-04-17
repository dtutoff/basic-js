const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  _chainArray: [],
  getLength() {
    return this._chainArray.length;
  },
  cleanChain() {
    return this._chainArray.length = 0;
  },
  addLink(value = '') {
    this._chainArray.push(value);
    return this;
  },
  removeLink(position) {
    if (
      position < 1 ||
      typeof position !== 'number' ||
      position > this.getLength()
    ) {
      this.cleanChain();
      throw new Error("You can't remove incorrect link!");
    }

    this._chainArray.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this._chainArray.reverse();
    return this;
  },
  finishChain() {
    const result = this._chainArray
      .map((el, i) => {
        if (i === 0) {
          return `( ${el} )`;
        } else {
          return `~~( ${el} )`;
        }
      }).join('');

    this.cleanChain();
    return result;
  }
};

module.exports = {
  chainMaker
};
