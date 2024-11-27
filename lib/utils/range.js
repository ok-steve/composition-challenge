export default function ({ min = 0, max = 100, step = 1 }) {
  const steps = Math.round((max - min) / step);
  return Array.from(Array(steps).keys()).map((i) => i * step + min);
}
