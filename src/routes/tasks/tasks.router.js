const express = require("express");
const {
  httpGetTaskSummary,
  httpGetFullTask,
  httpPostNewTask,
} = require("./tasks.controller");

const tasksRouter = express.Router();

tasksRouter.get("/summary/:filter", httpGetTaskSummary);
tasksRouter.get("/full/:filter", httpGetFullTask);
tasksRouter.post("/new", httpPostNewTask);

module.exports = tasksRouter;
