module.exports = (eleventyConfig) => {
  eleventyConfig.addFilter(
    "json_stringify",
    function jsonStringify(value = {}, indent = 2) {
      return JSON.stringify(value, null, indent);
    }
  );
  eleventyConfig.addFilter(
    "locale_date",
    function localeDate(date = new Date(), locale = "en") {
      return new Intl.DateTimeFormat(locale, { dateStyle: "full" }).format(
        new Date(date)
      );
    }
  );

  return {
    dir: {
      input: "src",
      output: "www",
    },
  };
};
