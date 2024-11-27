import range from "../../lib/utils/range.js";

export default function () {
  // Weight the values by distance from center BPM
  const center = 120;
  const min = 40;
  const max = 220;
  const step = 4;

  return range({ min, max: max + step, step }).map((bpm) => {
    const distance = Math.abs(center - bpm);
    const percent = distance / (bpm < center ? center - min : max - center);
    const scaled = Math.round(100 * (1 - percent));
    const clamp = Math.max(1, Math.min(100, scaled));
    return [bpm, clamp];
  });
}
