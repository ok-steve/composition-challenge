const pick = require('../../lib/pick');
const range = require('../../lib/range');
const unique = require('../../lib/unique');

module.exports = function () {
  const alphabet = 'ABCD';
  const size = pick(range({ min: 1, max: alphabet.length }));

  const { form } = range({ max: size }).reduce(
    (data) => {
      if (pick([true, false]) || data.form === '') {
        return {
          form: `${data.form}${alphabet[data.index]}`,
          index: data.index + 1,
        };
      } else {
        return {
          ...data,
          form: `${data.form}${pick(unique(data.form.split('')))}`,
        };
      }
    },
    { form: '', index: 0 }
  );

  return {
    form,
    phrase: ['Period', 'Sentence'],
  };
};
