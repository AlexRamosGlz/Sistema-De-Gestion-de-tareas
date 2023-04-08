const dbConnection = require("../config/mysql");

const {
  createGetQuery,
  checkIfEmptyResult,
  createPostQuery,
} = require("../routes/tasks/tasks.middleware");

async function getFullTaskByFilter(filters) {
  const query = createGetQuery(true, filters);
  console.log(query);
  const result = await (await dbConnection()).execute(query);

  if (checkIfEmptyResult(result)) throw new Error("Query throw 0 results");

  return result[0];
}

async function getTaskSummaryByFilter(filters, columns) {
  const query = createGetQuery(false, filters, columns);
  console.log(query, "query");
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

module.exports = { getFullTaskByFilter, getTaskSummaryByFilter, postNewTask };
