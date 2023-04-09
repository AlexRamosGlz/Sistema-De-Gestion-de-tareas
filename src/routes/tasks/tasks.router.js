const express = require("express");
const {
  httpGetTaskSummary,
  httpGetFullTask,
  httpPostNewTask,
  httpUpdateTask,
  httpDeleteTask,
} = require("./tasks.controller");
const isAuthorize = require("../../middleware/isAuthorize");
const checkifEmptyBody = require("../../middleware/checkIfBodyEmpty");

const tasksRouter = express.Router();

tasksRouter.get("/summary/:id", isAuthorize, httpGetTaskSummary);
tasksRouter.get("/full/:id", isAuthorize, httpGetFullTask);
tasksRouter.post("/new", isAuthorize, checkifEmptyBody, httpPostNewTask);
tasksRouter.put("/update/:id", isAuthorize, checkifEmptyBody, httpUpdateTask);
tasksRouter.delete("/delete/:id", isAuthorize, httpDeleteTask);

module.exports = tasksRouter;
