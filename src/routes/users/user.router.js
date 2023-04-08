const express = require("express");

const { httpPostNewUser } = require("./user.controller");

const userRouter = express.Router();

userRouter.post("/new", httpPostNewUser);

module.exports = userRouter;
