const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { execute } = require("../config/mysql");
const { checkIfEmptyResult } = require("../routes/tasks/tasks.middleware");
const { createPostUserQuery } = require("../routes/users/user.middleware");

async function postNewUser({ username, password }) {
  const hash = await bcrypt.hash(password, 10);

  const user = {
    username,
    password: hash,
  };

  const query = createPostUserQuery(user);

  const token = jwt.sign({ username }, process.env.TOKEN_SECRET, {
    expiresIn: 604800000,
  });
  const result = await execute(query);

  if (checkIfEmptyResult(result)) throw new Error("Query throw 0 results");

  return token;
}

module.exports = { postNewUser };
