module.exports = function filterSightings(queries, data) {
  if (queries.length === 0) return data;
  const [key, searchVal] = Object.entries(queries[0])[0];
  data = data.filter((sight) => sight[key] === searchVal);
  return filterSightings(queries.slice(1), data);
};
