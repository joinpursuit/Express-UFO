const app = require(`${__dirname}/app`);

const PORT = process.env.PORT;

app.listen(PORT, (req, res) => {
  console.log(`Listening in on port ${PORT}...`);
});
