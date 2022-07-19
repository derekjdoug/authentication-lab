const sequelize = require('sequelize');

function user(db) {
  return db.define('User', {
    username: sequelize.DataTypes.STRING,
    birthday: sequelize.DataTypes.DATE,
  });
}

module.exports = { user };
