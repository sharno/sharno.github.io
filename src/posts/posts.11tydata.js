const { DateTime } = require("luxon");

function looksArabic(value) {
  return /[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF]/.test(value || "");
}

module.exports = {
  layout: "post.njk",
  tags: ["posts"],
  eleventyComputed: {
    lang: (data) => {
      if (data.lang) return data.lang;
      return looksArabic(data.title) ? "ar" : "en-us";
    },
    dir: (data) => {
      if (data.dir) return data.dir;
      return looksArabic(data.title) ? "rtl" : "ltr";
    },
    permalink: (data) => {
      const published = DateTime.fromJSDate(data.page.date, { zone: "utc" });
      return `post/${published.toFormat("yyyy/LL/dd")}/${data.page.fileSlug}/index.html`;
    }
  }
};
