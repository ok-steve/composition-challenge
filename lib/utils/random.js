export default function ({ min = 0, max = 100 }) {
  return Math.floor(Math.random() * (max - min)) + min;
}
