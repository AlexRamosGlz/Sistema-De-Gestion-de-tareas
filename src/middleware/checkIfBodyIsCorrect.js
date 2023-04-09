function checkIfBodyIsCorrect(req, res, next) {
  if (Object.keys(req.body).length === 0)
    return res.status(400).json({ error: `body can't be empty` });

  if (req.originalUrl.includes("tasks")) {
    if (req.path.toString().includes("/update")) {
      return next();
    }

    const keys = Object.keys(req.body);
    const columnsNeeded = new RegExp(
      "titulo|descripcion|terminado|fechaDeEntrega",
      "g"
    );
    const match = keys.join("").match(columnsNeeded);

    if (match.length != 4)
      return res.status(400).json({
        error:
          "tasks body hast to include at least: titulo, descripcion, terminado, fechaDeEntrega",
      });

    if (checkIfEmptyParams(match, req.body))
      return res.status(400).json({
        error: `${match.join(",")}: can't have empty values`,
      });
  }

  if (req.originalUrl.includes("users")) {
    const keys = Object.keys(req.body);
    const columnsNeeded = new RegExp("username|password", "g");
    const match = keys.join("").match(columnsNeeded);

    if (match.length != 2)
      return res.status(400).json({
        error: "users body hast to include at least: username, password",
      });

    if (checkIfEmptyParams(match, req.body))
      return res.status(400).json({
        error: `${match.join(",")}: can't have empty values`,
      });
  }

  next();
}

function checkIfEmptyParams(params, body) {
  const findEmpty = params.find((param) => body[param] === "");

  return findEmpty;
}

module.exports = checkIfBodyIsCorrect;
