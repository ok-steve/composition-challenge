module.exports = function () {
  // Weight the values by order in the list
  return {
    numerator: [4, 3, 5, 6, 2, 7, 8, 9, 10, 11, 12].map((num, i, list) => [
      num,
      list.length - i,
    ]),
    denominator: [4, 8, 2, 16].map((num, i, list) => [num, list.length - i]),
  };
};
