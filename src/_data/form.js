const pick = require('../../lib/pick');
const range = require('../../lib/range');
const unique = require('../../lib/unique');

module.exports = function () {
  const alphabet = 'ABCDE';
  const maxSize = 8;
  const size = pick(range({ min: 2, max: maxSize }).map((num, i, list) => [num, list.length - i]));

  const { form } = range({ max: size }).reduce(
    (data) => {
      // Add a new section
      if ((pick([true, false]) || data.form === '') && data.index < alphabet.length) {
        return {
          form: `${data.form}${alphabet[data.index]}`,
          index: data.index + 1,
        };
      }
      // Repeat a previous section
      else {
        return {
          ...data,
          form: `${data.form}${pick(unique(data.form.split('')))}`,
        };
      }
    },
    { form: '', index: 0 }
  );

  return form;
};
