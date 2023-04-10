const { execute } = require("../config/mysql");
const {
  createGetQuery,
  checkIfEmptyResult,
  createPostQuery,
  createPutQuery,
  createDeleteQuery,
} = require("../routes/tasks/tasks.middleware");

async function getFullTask(username, id) {
  const query = createGetQuery(true, username, id);

  const result = await execute(query); //(query).then((res) => );
  console.log(result);
  if (checkIfEmptyResult(result)) throw new Error("Query throw 0 results");

  return result[0];
}

async function getTaskSummary(username, id, columns) {
  const query = createGetQuery(false, username, id, columns);

  const result = await execute(query);

  if (checkIfEmptyResult(result)) throw new Error("Query throw 0 results");

  return result[0];
}

async function postNewTask(task) {
  const query = createPostQuery(task);

  const result = await execute(query);

  if (checkIfEmptyResult(result)) throw new Error("Query throw 0 results");

  return task;
}

async function updateTask(task, username, id) {
  const query = createPutQuery(task, username, id);

  try {
    await getFullTask(username, id);
  } catch (err) {
    throw new Error("No task found");
  }

  const result = await execute(query);

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

  const result = await execute(query);

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
