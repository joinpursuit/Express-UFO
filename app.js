//DEPENDENCIES
const app = require('express')();
require('dotenv').config();

//CONFIGURATION
const PORT = process.env.PORT;

// access the data in this file
const sightingsData = require(`${__dirname}/nuforc_reports.json`);

app.get('/', (req, res) => {
  res.send('Welcome to the Sightings');
});

app.get('/sightings*', (req, res) => {
  let data = sightingsData.slice();
  const queriesArr = Object.entries(req.query);

  //return array of objects with map
  const queryObjs = queriesArr
    .map(([query, value]) => {
      return { [query]: value };
    })
    .filter((query) => Object.values(query)[0].length);

  //recursion
  (function getFilteredSightings(queries) {
    if (queries.length === 0) return;
    const [key, searchVal] = Object.entries(queries[0])[0];
    if (!searchVal.length) return;
    data = data.filter((sight) => sight[key] === searchVal);

    getFilteredSightings(queries.slice(1));
  })(queryObjs);
  console.log(data.length);
  res.send(data);
});

app.listen(PORT, () => {
  console.log(`Listening in on port ${PORT}...`);
});
