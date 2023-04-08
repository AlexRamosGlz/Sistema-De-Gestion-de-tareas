const errorParser = require("../../helpers/errorParser");
const {
  getFullTaskByFilter,
  getTaskSummaryByFilter,
  postNewTask,
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
    console.error(e);
    return res.status(400).json(errorParser(e));
  }

  res.status(201).json(task);
}

function httpUpdateTask(req, res) {
  const task = req.boy;

  //TODO
}

function httpDeleteTask(req, res) {
  //TODO
}
module.exports = { httpGetTaskSummary, httpGetFullTask, httpPostNewTask };
