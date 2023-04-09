const jwt = require("jsonwebtoken");

function isAuthorize(req, res, next) {
  const token = req.headers.authorization.split(" ")[1];

  const match = jwt.verify(token, process.env.TOKEN_SECRET);

  if (!token) return res.status(401).json({ error: `you're not authorize` });

  req.username = match.username;

  next();
}

module.exports = isAuthorize;
