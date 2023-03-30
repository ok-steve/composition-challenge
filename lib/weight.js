module.exports = function (list) {
  return list.flatMap((item) => {
    const [data, weight] = Array.isArray(item) ? item : [item, 1];
    return Array(weight).fill(data);
  });
};
