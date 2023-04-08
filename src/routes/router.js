const express = require("express");
const routesConstants = require("../config/routesConstants");
const tasksRouter = require("./tasks/tasks.router");
const userRouter = require("./users/user.router");

const router = express.Router();

router.use(routesConstants.TASKS, tasksRouter);
router.use(routesConstants.USERS, userRouter);

module.exports = router;
