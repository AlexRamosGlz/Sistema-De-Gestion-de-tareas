const express = require("express");
const routesConstants = require("../config/routesConstants");
const tasksRouter = require("./tasks/tasks.router");

const router = express.Router();

router.use(routesConstants.TASKS, tasksRouter);

module.exports = router;
