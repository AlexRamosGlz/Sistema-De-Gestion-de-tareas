const jwt = require("jsonwebtoken");
const errorParser = require("../helpers/errorParser");

function isAuthorize(req, res, next) {
  let match;
  let token;
  try {
    token = req.headers.authorization.split(" ")[1];
    match = jwt.verify(token, process.env.TOKEN_SECRET);
  } catch (error) {
    return res.status(400).json(errorParser(error));
  }

  if (!token) return res.status(401).json({ error: `you're not authorize` });

  req.username = match.username;

  next();
}

module.exports = isAuthorize;
