'use strict';

const express = require('express');

const UsersCollection = require('../models/index.js').Users;

const router = express.Router();

// RESTful Route Declarations
router.get('/users/:id', getOneUsers);
router.post('/users', createUsers);

async function getOneUsers(req, res) {
  let id = req.params.id;
  let theUsers = await UsersCollection.read(id);
  res.status(200).json(theUsers);
}

async function createUsers(req, res) {
  let obj = req.body;
  let newUsers = await UsersCollection.create(obj);
  res.status(200).json(newUsers);
}

module.exports = router;
