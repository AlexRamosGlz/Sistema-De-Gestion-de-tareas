const jwt = require("jsonwebtoken");

function createPostUserQuery(user) {
  const [...fields] = Object.keys(user);
  const [...values] = Object.values(user);

  return `INSERT INTO users (${fields.join(",")}) VALUES (${values.map(
    (value) => `"${value}"`
  )})`;
}

function isAuthorize(req, res, next) {
  const token = req.headers.authorization;

  const match = jwt.verify(token, process.env.TOKEN_SECRET);

  if (token != match)
    return res.status(401).json({ error: `you're not authorize` });

  next();
}

module.exports = {
  createPostUserQuery,
  isAuthorize,
};
