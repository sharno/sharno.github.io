const { DateTime } = require("luxon");

module.exports = {
  layout: "post.njk",
  tags: ["posts"],
  eleventyComputed: {
    permalink: (data) => {
      const published = DateTime.fromJSDate(data.page.date, { zone: "utc" });
      return `post/${published.toFormat("yyyy/LL/dd")}/${data.page.fileSlug}/index.html`;
    }
  }
};
