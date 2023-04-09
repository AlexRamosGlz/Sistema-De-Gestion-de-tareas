const errorParser = require("../../helpers/errorParser");
const {
  getFullTask,
  getTaskSummary,
  postNewTask,
  updateTask,
  deleteTask,
} = require("../../models/tasks.model");

async function httpGetTaskSummary(req, res) {
  //TODO
  const { id } = req.params;
  const columns = req.query.columns.split(",");
  const username = req.username;

  let task;

  try {
    task = await getTaskSummary(username, id, columns);
  } catch (e) {
    console.error(e);
    return res.status(400).json(errorParser(e));
  }

  res.status(200).json({ task });
}

async function httpGetFullTask(req, res) {
  //TODO

  const username = req.username;
  const { id } = req.params;
  let task;

  try {
    task = await getFullTask(username, id);
  } catch (e) {
    console.error(e);
    return res.status(400).json(errorParser(e));
  }

  res.status(200).json({ task });
}

async function httpPostNewTask(req, res) {
  const data = { ...req.body, username: req.username };

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
  const { id } = req.params;
  const username = req.username;

  try {
    await updateTask(data, username, id);
  } catch (err) {
    console.error(err);
    return res.status(400).json(errorParser(err));
  }

  res.status(200).json({ succes: true });
}

async function httpDeleteTask(req, res) {
  const { id } = req.params;
  const username = req.username;

  try {
    await deleteTask(username, id);
  } catch (err) {
    console.error(err);
    return res.status(400).json(errorParser(err));
  }

  res.status(200).json({ succes: true });
}

module.exports = {
  httpGetTaskSummary,
  httpGetFullTask,
  httpPostNewTask,
  httpUpdateTask,
  httpDeleteTask,
};
