module.exports = {
  eleventyComputed: {
    // Only write this file if `events` is an empty array.
    permalink(data) {
      if (data.events.length === 0) {
        return "/events/";
      }
      return false;
    },
  },
};
