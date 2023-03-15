const { EleventyHtmlBasePlugin } = require('@11ty/eleventy');
const EleventyNavigation = require('@11ty/eleventy-navigation');
const EleventyRssPlugin = require('@11ty/eleventy-plugin-rss');

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);
  eleventyConfig.addPlugin(EleventyNavigation);
  eleventyConfig.addPlugin(EleventyRssPlugin);

  eleventyConfig.setServerPassthroughCopyBehavior('passthrough');
  eleventyConfig.addPassthroughCopy('./public');

  ['pick', 'random', 'unique'].forEach((filter) => {
    eleventyConfig.addFilter(filter, require(`./lib/filters/${filter}`));
  });

  return {
    dir: {
      input: 'src',
      output: 'dist',
      layouts: '_layouts',
    },
  };
};
