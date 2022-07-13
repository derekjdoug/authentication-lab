'use strict';

const express = require('express');

const hello = (req, res) => {
  // console.log(Date.now(), req.url);
  res.status(200).send('Hello, World');
};

const data = (req, res) => {
  // console.log(Date.now(), req.url);
  res.status(200).send({
    name: 'David',
    role: 'Instructor',
  });
};

const app = express();

const logger = (req, res, next) => {
  console.log(Date.now(), req.url);
  next();
};

// app.use(something - a middleware!);

// what is a handler?

function handler(req, res, next) {
  // request: query, endpoints, URL - things the browser sends to the server
  // response: status, body - what you give back to the server
  // next: a function passed to the middleware, to pass control to the "next" handler
}

app.use(logger);

app.get('/', hello);
app.get('/data', data);

// ---

function start(port) {
  app.listen(port, () => console.log(`Server listening on port ${port}`));
}

module.exports = {
  app,
  start,
};
