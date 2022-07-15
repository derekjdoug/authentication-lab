'use strict';

const express = require('express');
const { logger } = require('./middleware/logger');

const { hello } = require('./handler/hello');
const { data } = require('./handler/data');
const { validate } = require('./middleware/validator');
const { do404 } = require('./handler/404');
const { do500 } = require('./handler/500');
const { getPerson } = require('./handler/person');

const makeError = () => {
  throw new Error('This is the error generator!');
};

const pet = (req, res) => {
  res.status(200).send({ name: req.params.name });
};

const app = express();

app.use(logger);

app.get('/', hello);
app.get('/data', data);
app.get('/throw-error', makeError);
app.get('/pets/:name', validate, pet);
app.get('/person/:name', validate, getPerson);

app.use(do404);
app.use(do500);

// ---

function start(port) {
  app.listen(port, () => console.log(`Server listening on port ${port}`));
}

module.exports = {
  app,
  start,
};
