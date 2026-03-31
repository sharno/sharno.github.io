const { DateTime } = require("luxon");
const pluginRss = require("@11ty/eleventy-plugin-rss");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("favicon.ico");
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addCollection("posts", function (collectionApi) {
    return collectionApi.getFilteredByTag("posts").reverse();
  });
  eleventyConfig.addCollection("tagList", function (collectionApi) {
    const tagSet = collectionApi.getAll()
      .reduce(function (tags, item) {
        if (!item.data.tags) return tags;
        item.data.tags.forEach(function (tag) {
          if (tag === "posts") return;
          tags.add(tag);
        });
        return tags;
      }, new Set());
    return Array.from(tagSet).sort();
  });
  eleventyConfig.addFilter("readableDate", function (dateObj) {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat("yyyy/LL/dd");
  });
  eleventyConfig.addFilter("htmlDateString", function (dateObj) {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat("yyyy-LL-dd");
  });
  eleventyConfig.addFilter("head", function (array, n) {
    return array.slice(0, n);
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes"
    }
  };
};
