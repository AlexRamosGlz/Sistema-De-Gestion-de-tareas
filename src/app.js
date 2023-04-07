const express = require("express");
const cors = require("cors");
const router = require("./routes/router");
const morgan = require("morgan");

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);
app.use(morgan("combined"));

app.use(router);

module.exports = app;
