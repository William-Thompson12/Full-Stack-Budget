const express = require('express')
const bodyParser = require("body-parser");
const app = express()
const port = 3001

// Middle
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const userModels = require('./controllers/userModels')

app.use(express.json())
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
  next();
});

require("./routes/userRoutes")(app);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})