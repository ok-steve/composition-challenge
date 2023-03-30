const random = require('./random');

module.exports = function (list) {
  return list[random({ max: list.length })];
};
