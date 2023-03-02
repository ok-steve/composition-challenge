const random = require('../../lib/filters/random');

module.exports = function () {
  return random({ min: 40, max: 220 });
};
