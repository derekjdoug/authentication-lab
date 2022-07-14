'use strict';

const express = require('express');
const { logger } = require('./middleware/logger');

const { hello } = require('./handler/hello');
const { data } = require('./handler/data');

const makeError = (req, res) => {
  throw new Error('This is the error handler!');
};

const pet = (req, res) => {
  res.status(200).send({ name: req.params.name });
};

const app = express();

app.use(logger);

app.get('/', hello);
app.get('/data', data);
app.get('/throw-error', makeError);
app.get('/pets/:name', pet);

// ---

function start(port) {
  app.listen(port, () => console.log(`Server listening on port ${port}`));
}

module.exports = {
  app,
  start,
};
