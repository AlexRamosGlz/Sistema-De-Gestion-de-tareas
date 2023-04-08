const express = require("express");
const {
  httpGetTaskSummary,
  httpGetFullTask,
  httpPostNewTask,
  httpUpdateTask,
  httpDeleteTask,
} = require("./tasks.controller");

const tasksRouter = express.Router();

tasksRouter.get("/summary/:filter", httpGetTaskSummary);
tasksRouter.get("/full/:filter", httpGetFullTask);
tasksRouter.post("/new", httpPostNewTask);
tasksRouter.put("/update/:filter", httpUpdateTask);
tasksRouter.delete("/delete/:filter", httpDeleteTask);

module.exports = tasksRouter;
