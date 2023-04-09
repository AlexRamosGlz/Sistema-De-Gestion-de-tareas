const express = require("express");
const {
  httpGetTaskSummary,
  httpGetFullTask,
  httpPostNewTask,
  httpUpdateTask,
  httpDeleteTask,
} = require("./tasks.controller");
const isAuthorize = require("../../middleware/isAuthorize");
const checkIfBodyIsCorrect = require("../../middleware/checkIfBodyIsCorrect");

const tasksRouter = express.Router();

tasksRouter.get("/summary/:id", isAuthorize, httpGetTaskSummary);
tasksRouter.get("/full/:id", isAuthorize, httpGetFullTask);
tasksRouter.post("/new", isAuthorize, checkIfBodyIsCorrect, httpPostNewTask);
tasksRouter.put(
  "/update/:id",
  isAuthorize,
  checkIfBodyIsCorrect,
  httpUpdateTask
);
tasksRouter.delete("/delete/:id", isAuthorize, httpDeleteTask);

module.exports = tasksRouter;
