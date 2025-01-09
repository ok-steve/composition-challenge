import { EleventyHtmlBasePlugin } from "@11ty/eleventy";
import { feedPlugin } from "@11ty/eleventy-plugin-rss";

import filters from "./lib/filters/index.js";

export default async function (eleventyConfig) {
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);
  eleventyConfig.addPlugin(feedPlugin, {
    collection: {
      name: "challenge",
      limit: 1,
    },
    metadata: {
      language: "en",
      title: "Composition Challenge",
      subtitle: "Compose a piece of music based on given elements.",
      base: "https://stevecherry.net/composition-challenge/",
      author: {
        name: "Steve Cherry",
      },
    },
  });

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
