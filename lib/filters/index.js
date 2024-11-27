import pick from "./pick.js";
import unique from "./unique.js";

const filters = {
  pick,
  unique,
};

export default (config) => {
  Object.entries(filters).forEach((item) => {
    const [name, filter] = item;
    config.addFilter(name, filter);
  });
};
