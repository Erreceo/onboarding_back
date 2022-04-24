const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const login = require("./routes/Login");
const app = express();
const jsonParser = bodyParser.json();
const urlencodedParser = bodyParser.urlencoded({ extended: false });

const db = require("./config/database");
db.connect();

const corsOptions = {
  origin: "http://localhost:3000",
};

app.use(cors(corsOptions));
app.use(urlencodedParser);
app.use(jsonParser);


app.use(login);

module.exports = app;
