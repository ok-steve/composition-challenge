const pkg = require('../../package.json');

module.exports = function () {
  return {
    name: pkg.name
      .split('-')
      .map(
        (str) => `${str.charAt(0).toUpperCase()}${str.slice(1).toLowerCase()}`
      )
      .join(' '),
  };
};
