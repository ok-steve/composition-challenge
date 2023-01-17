const eleventyNavigationPlugin = require('@11ty/eleventy-navigation');
const pkg = require('./package.json');

module.exports = function (eleventyConfig) {
  const pathPrefix =
    process.env.ELEVENTY_ENV === 'production' ? `/${pkg.name}/` : '/';

  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  eleventyConfig.addPassthroughCopy('./public');

  return {
    pathPrefix,
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
    dir: {
      input: 'src',
      output: 'dist',
      layouts: '_layouts',
    },
  };
};
