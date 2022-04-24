require("dotenv-safe").config({ allowEmptyValues: true });
const app = require("./src/app");

const server = app.listen(process.env.PORT || 6660, async () => {
  console.log("Server start on port", server.address().port);
  console.log(`${process.env.MONGODB_URI}`)
});
