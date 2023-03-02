const eleventyNavigationPlugin = require('@11ty/eleventy-navigation');
const eleventyRssPlugin = require('@11ty/eleventy-plugin-rss');
const pkg = require('./package.json');

module.exports = function (eleventyConfig) {
  const pathPrefix =
    process.env.ELEVENTY_RUN_MODE === 'build' ? `/${pkg.name}/` : '/';

  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  eleventyConfig.addPlugin(eleventyRssPlugin);

  eleventyConfig.setServerPassthroughCopyBehavior('passthrough');
  eleventyConfig.addPassthroughCopy('./public');

  ['pick', 'unique'].forEach((filter) => {
    eleventyConfig.addFilter(filter, require(`./lib/filters/${filter}`));
  });

  return {
    pathPrefix,
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
    dir: {
      input: 'src',
      output: 'dist',
      layouts: '_layouts',
    },
  };
};
