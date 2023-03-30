const pick = require('../../lib/pick');
const unique = require('../../lib/unique');

module.exports = function () {
  const alphabet = 'ABCD';
  const size = pick(
    Array.from(new Array(alphabet.length), (_, i) => i).filter((i) => i > 0)
  );

  const { form } = Array.from(new Array(size)).reduce(
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
