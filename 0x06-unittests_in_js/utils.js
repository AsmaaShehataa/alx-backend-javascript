const Utils = {
  calculateNumber (type, a, b) {
    if (type === 'SUM') {
      return Math.round(a) + Math.round(b);
    } else if (type === 'SUBTRACT') {
      return Math.round(a) - Math.round(b);
    } else if (type === 'DIVIDE') {
      if (Math.round(b) === 0) {
        return 'Error';
      }
      return Math.round(a) / Math.round(b);
    } else {
      throw new Error('Unknown type: ' + type);
    }
  }
};
module.exports = Utils;