const mongoose = require("mongoose");

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      authSource: "admin",
      user: process.env.DB_USER,
      pass: process.env.DB_PASS,
    });
    console.log("Conectado ao mongodb");
  } catch (err) {
    console.log(`Erro: ${err.message}`);
  }
};

module.exports = {
  connect,
};
