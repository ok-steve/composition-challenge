import { EleventyHtmlBasePlugin } from "@11ty/eleventy";
import EleventyRssPlugin from "@11ty/eleventy-plugin-rss";

import filters from "./lib/filters/index.js";

export default async function (eleventyConfig) {
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);
  eleventyConfig.addPlugin(EleventyRssPlugin);

  eleventyConfig.addPlugin(filters);

  eleventyConfig.setServerPassthroughCopyBehavior("passthrough");
  eleventyConfig.addPassthroughCopy("./public");

  return {
    dir: {
      input: "src",
      output: "dist",
      layouts: "_layouts",
    },
  };
}
