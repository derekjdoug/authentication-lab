const { Sequelize, DataTypes } = require('sequelize');

// Get the database connection
const db = new Sequelize('sqlite::memory:');

// Define our models
const User = db.define('User', {
  username: DataTypes.STRING,
  birthday: DataTypes.DATE,
});

// IN DEVELOPMENT ONLY!
db.sync();

module.exports = {
  db,
  User,
};
