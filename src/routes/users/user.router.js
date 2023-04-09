const express = require("express");

const { httpPostNewUser } = require("./user.controller");
const checkIfBodyIsCorrect = require("../../middleware/checkIfBodyIsCorrect");

const userRouter = express.Router();

userRouter.post("/new", checkIfBodyIsCorrect, httpPostNewUser);

module.exports = userRouter;
