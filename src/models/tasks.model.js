const dbConnection = require("../config/mysql");

const {
  createGetQuery,
  checkIfEmptyResult,
  createPostQuery,
  createPutQuery,
  createDeleteQuery,
} = require("../routes/tasks/tasks.middleware");

async function getFullTask(username, id) {
  const query = createGetQuery(true, username, id);
  console.log(query);
  const result = await (await dbConnection()).execute(query);

  if (checkIfEmptyResult(result)) throw new Error("Query throw 0 results");

  return result[0];
}

async function getTaskSummary(username, id, columns) {
  const query = createGetQuery(false, username, id, columns);

  const result = await (await dbConnection()).execute(query);

  if (checkIfEmptyResult(result)) throw new Error("Query throw 0 results");

  return result[0];
}

async function postNewTask(task) {
  const query = createPostQuery(task);
  console.log(query);
  const result = await (await dbConnection()).execute(query);

  if (checkIfEmptyResult(result)) throw new Error("Query throw 0 results");

  return task;
}

async function updateTask(task, username, id) {
  console.log(task, username, id);
  const query = createPutQuery(task, username, id);

  try {
    await getFullTask(username, id);
  } catch (err) {
    throw new Error("No task found");
  }

  const result = await (await dbConnection()).execute(query);

  if (checkIfEmptyResult(result)) throw new Error("Query throw 0 results");

  return task;
}

async function deleteTask(username, id) {
  const query = createDeleteQuery(username, id);

  try {
    await getFullTask(username, id);
  } catch (err) {
    throw new Error("No task found with given filter");
  }

  const result = await (await dbConnection()).execute(query);

  if (checkIfEmptyResult(result)) throw new Error("Query throw 0 results");

  return result;
}

module.exports = {
  getFullTask,
  getTaskSummary,
  postNewTask,
  updateTask,
  deleteTask,
};
