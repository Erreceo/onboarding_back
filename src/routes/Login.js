const express = require("express");
const router = express.Router();
const loginService = require("../controllers/LoginService");

router.post("/login", async (req, res, next) => {
  try {
    const { email = null, password = null } = req.body;

    const loginOk = await loginService.login(email, password);
    if (loginOk) {
      res.status(200).send(loginOk);
    } else {
      res.status(401).send();
    }
  } catch (e) {
    next(e);
  }
});

module.exports = router;
