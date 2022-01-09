const sightingsData = require(`${__dirname}/../models/nuforc_reports.json`);
const filterSightings = require(`${__dirname}/../utilities/filterSightings`);

//Route Handlers
exports.checkQuery = (req, res, next) => {
  console.log(req.query);
  const { state, city, shape } = req.query;
  if (state.length === 0 && city.length === 0 && shape.length === 0) {
    return res.status(200).json(sightingsData);
  }
  next();
};

exports.getFilteredSighting = (req, res) => {
  const queriesArr = Object.entries(req.query);

  //return array of objects with map
  const queryObjs = queriesArr
    .map(([query, value]) => {
      return { [query]: value };
    })
    .filter((query) => Object.values(query)[0].length);

  //recursion
  const filteredData = filterSightings(queryObjs, sightingsData);

  if (!filteredData.length) {
    return res.status(404).json({
      status: 'fail',
      results: filteredData.length,
      message: 'None found with provided query',
    });
  } else {
    res.json({
      status: 'success',
      results: filteredData.length,
      data: filteredData,
    });
  }
};
