const { DataTypes } = require('sequelize/types');

function user(db) {
  return db.define('User', {
    username: DataTypes.STRING,
    birthday: DataTypes.DATE,
  });
}

module.exports = { user };
