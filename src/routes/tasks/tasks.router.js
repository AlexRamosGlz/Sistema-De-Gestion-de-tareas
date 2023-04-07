const express = require("express");
const { httpGetTaskSummary } = require("./tasks.controller");

const tasksRouter = express.Router();

tasksRouter.get("/summary/:taskId", httpGetTaskSummary);

module.exports = tasksRouter;
