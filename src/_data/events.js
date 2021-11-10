module.exports = () => {
  // return [];

  // Only return events from The Future(tm).
  // This may or may not return 0 or more events.
  return [
    {title: "Event 1", date: "2022/04/19"},
    {title: "Event 2", date: "2021/09/30"}
  ].filter(event => Date.parse(event.date) >= Date.now());
};
