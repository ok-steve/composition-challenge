import random from "../utils/random.js";
import weight from "../utils/weight.js";

export default function (list) {
  const weighted = weight(list);
  return weighted[random({ max: weighted.length })];
}
