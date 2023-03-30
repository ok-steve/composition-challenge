const random = require('./random');
const weight = require('./weight');

module.exports = function (list) {
  const weighted = weight(list);
  return weighted[random({ max: weighted.length })];
};
