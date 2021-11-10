module.exports = () => {
  // return [];

  // Only return events from The Future(tm).
  // This may or may not return 0 or more events.
  return [
    { title: "Kernel Panic! At The Disco", date: "2022/04/19" },
    { title: "LED Zeppelin", date: "2022/09/30" },
  ]
    .filter((event) => Date.parse(event.date) >= Date.now())
    .sort((a, b) => a.date.localeCompare(b.date));
};
