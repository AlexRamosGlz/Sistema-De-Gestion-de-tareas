function checkifEmptyBody(req, res, next) {
  console.log(req.body);
  if (Object.keys(req.body).length === 0)
    return res.status(400).json({ errr: `body can't be empty` });

  next();
}

module.exports = checkifEmptyBody;
