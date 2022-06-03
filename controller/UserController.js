const User = require("../model/User");

async function saveData(data) {
  data.password = crypto
    .createHmac("sha256", process.env.SHA_SALT)
    .update(data.password)
    .digest("hex");
  const user = new User(data);
  return await user.save();
}

module.exports = { saveData };
