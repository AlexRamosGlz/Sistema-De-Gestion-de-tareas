const dbConnection = require("../config/mysql");

const {
  createGetQuery,
  checkIfEmptyResult,
  createPostQuery,
  createPutQuery,
  createDeleteQuery,
} = require("../routes/tasks/tasks.middleware");

async function getFullTaskByFilter(filters) {
  const query = createGetQuery(true, filters);

  const result = await (await dbConnection()).execute(query);

  if (checkIfEmptyResult(result)) throw new Error("Query throw 0 results");

  return result[0];
}

async function getTaskSummaryByFilter(filters, columns) {
  const query = createGetQuery(false, filters, columns);

  const result = await (await dbConnection()).execute(query);

  if (checkIfEmptyResult(result)) throw new Error("Query throw 0 results");

  return result[0];
}

async function postNewTask(task) {
  const query = createPostQuery(task);

  const result = await (await dbConnection()).execute(query);

  if (checkIfEmptyResult(result)) throw new Error("Query throw 0 results");

  return task;
}

async function updateTask(task, filter) {
  const query = createPutQuery(task, filter);

  try {
    await getFullTaskByFilter(filter);
  } catch (err) {
    throw new Error("No task found with given filter");
  }

  const result = await (await dbConnection()).execute(query);

  if (checkIfEmptyResult(result)) throw new Error("Query throw 0 results");

  return task;
}

async function deleteTask(filter) {
  const query = createDeleteQuery(filter);

  try {
    await getFullTaskByFilter(filter);
  } catch (err) {
    throw new Error("No task found with given filter");
  }

  const result = await (await dbConnection()).execute(query);

  if (checkIfEmptyResult(result)) throw new Error("Query throw 0 results");

  return result;
}

module.exports = {
  getFullTaskByFilter,
  getTaskSummaryByFilter,
  postNewTask,
  updateTask,
  deleteTask,
};
