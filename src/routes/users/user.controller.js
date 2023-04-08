const errorParser = require("../../helpers/errorParser");
const { postNewUser } = require("../../models/users.model");

async function httpPostNewUser(req, res) {
  let token = "";

  try {
    token = await postNewUser(req.body);
  } catch (err) {
    console.log(err);
    return res.status(401).json(errorParser(err));
  }

  return res.status(201).json({ token: token });
}

module.exports = { httpPostNewUser };
