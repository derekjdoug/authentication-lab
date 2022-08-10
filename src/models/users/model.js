const SECRET = process.env.SECRET;
const HASH_STRENGTH = 10;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

//Password: we could make hashing the handler responsibility
// const signUpHandler = (req, res) => {
//   const { username, password } = req.body;
//   password = await bcrypt.hash(password);
//   //This means password has to be filled in before hashed
//   const user = UserCollection.create({username, password});
// }

//Alt: hashing on the model

const userModel = (sequelize, DataTypes) => {
  const model = sequelize.define('User', {
    username: { type: DataTypes.STRING, allowNull: false, unique: true },
    password: { type: DataTypes.STRING, allowNull: false },
    role: { type: DataTypes.STRING, allowNull: false },
    token: {
      type: DataTypes.VIRTUAL,
      get() {
        const payload = { username: this.username, role: this.role };
        return jwt.sign(payload, SECRET);
      },
    },
  });
  //beforeCreate before putting in db, it will do this thing
  model.beforeCreate(async (user) => {
    let hashedPassword = await bcrypt.hash(user.password, HASH_STRENGTH);
    user.password = hashedPassword;
    user.role = 'admin';
    //Now, handler just needs to do is call a new User(username, password).create
  });

  return model;
};

module.exports = userModel;
