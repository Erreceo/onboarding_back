const crypto = require("crypto");

const hashValue = (val) =>
  val
    ? crypto
        .createHash("sha512", process.env.DIGEST_SALT)
        .update(val)
        .digest("hex")
    : "";

const hashValueSha1 = (val) =>
  val ? crypto.createHash("sha1").update(val).digest("hex") : "";

module.exports = {
  hashValueSha1,
  hashValue,
};
