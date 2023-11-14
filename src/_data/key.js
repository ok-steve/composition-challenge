module.exports = function () {
  const scales = [
    'Major',
    'Dorian',
    'Phrygian',
    'Lydian',
    'Mixolydian',
    'Minor',
  ];

  const keys = [
    ['C', 'D', 'E', 'F', 'G', 'A'],
    ['Db', 'Eb', 'F', 'Gb', 'Ab', 'Bb'],
    ['D', 'E', 'F#', 'G', 'A', 'B'],
    ['Eb', 'F', 'G', ' Ab', 'Bb', 'C'],
    ['E', 'F#', 'G#', 'A', 'B', 'C#'],
    ['F', 'G', 'A', 'Bb', 'C', 'D'],
    ['Gb', 'Ab', 'Bb', 'Cb', 'Db', 'Eb'],
    ['G', 'A', 'B', 'C', 'D', 'E'],
    ['Ab', 'Bb', 'C', 'Db', 'Eb', 'F'],
    ['A', 'B', 'C#', 'D', 'E', 'F#'],
    ['Bb', 'C', 'D', 'Eb', 'F', 'G'],
    ['B', 'C#', 'D#', 'E', 'F#', 'G#'],
  ];

  return keys.flatMap((key) => key.map((note, i) => `${note} ${scales[i]}`));
};
