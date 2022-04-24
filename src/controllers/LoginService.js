const UserSchema = require("../models/UserSchema");
const crypto = require("../config/crypto");
const login = async (email, senha) => {
  const user = await UserSchema.findOne({ email: email });
  if (user !== null && user?.password === crypto.hashValue(senha)) {
    return user;
  }
  return false;
};

module.exports = {
  login,
};
