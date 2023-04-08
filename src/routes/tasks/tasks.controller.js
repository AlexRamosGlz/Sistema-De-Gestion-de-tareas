const errorParser = require("../../helpers/errorParser");
const {
  getFullTaskByFilter,
  getTaskSummaryByFilter,
  postNewTask,
  updateTask,
  deleteTask,
} = require("../../models/tasks.model");

async function httpGetTaskSummary(req, res) {
  //TODO

  const filter = { ...req.params, value: req.query.filterValue };
  const columns = req.query.columns.split(",");

  let task;

  try {
    task = await getTaskSummaryByFilter({ ...filter }, columns);
  } catch (e) {
    console.error(e);
    return res.status(400).json(errorParser(e));
  }

  res.status(200).json({ task });
}

async function httpGetFullTask(req, res) {
  //TODO
  const filter = { ...req.params, value: req.query.filterValue };

  let task;

  try {
    task = await getFullTaskByFilter({ ...filter });
  } catch (e) {
    console.error(e);
    return res.status(400).json(errorParser(e));
  }

  res.status(200).json({ task });
}

async function httpPostNewTask(req, res) {
  const data = req.body;

  let task;
  try {
    task = await postNewTask(data);
  } catch (err) {
    console.error(err);
    return res.status(400).json(errorParser(err));
  }

  res.status(201).json(task);
}

async function httpUpdateTask(req, res) {
  const data = req.body;

  const filter = { ...req.params, value: req.query.filterValue };

  let task;
  try {
    task = await updateTask(data, filter);
  } catch (err) {
    console.error(err);
    return res.status(400).json(errorParser(err));
  }

  res.status(200).json(task);
}

async function httpDeleteTask(req, res) {
  const filter = { ...req.params, value: req.query.filterValue };

  let task;
  try {
    task = await deleteTask(filter);
  } catch (err) {
    console.error(err);
    return res.status(400).json(errorParser(err));
  }

  res.status(200).json(task);
}

module.exports = {
  httpGetTaskSummary,
  httpGetFullTask,
  httpPostNewTask,
  httpUpdateTask,
  httpDeleteTask,
};
