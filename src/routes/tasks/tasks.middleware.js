function checkIfEmptyResult(result) {
  if (result[0].length === 0) return true;
  return false;
}

function createGetQuery(fullRow, username, id, columns = [""]) {
  if (fullRow)
    return `SELECT * FROM tasks WHERE username="${username}" AND taskID="${id}"`;

  return `SELECT ${columns.join(
    ","
  )},taskID FROM tasks WHERE username="${username}"`;
}

function createPostQuery(task) {
  const [...fields] = Object.keys(task);
  const [...values] = Object.values(task);

  return `INSERT INTO tasks (${fields.join(",")}) VALUES (${values.map(
    (value) => `"${value}"`
  )})`;
}

function createPutQuery(task, username, id) {
  const query = [];

  for (const [key, value] of Object.entries(task)) {
    query.push(`${key}='${value}'`);
  }

  return `UPDATE tasks SET ${query.join(
    ","
  )} WHERE taskID="${id}" AND username="${username}"`;
}

function createDeleteQuery(username, id) {
  return `DELETE FROM tasks WHERE taskID=${id} AND username="${username}"`;
}

function checkifEmptyBody(params) {}

module.exports = {
  checkIfEmptyResult,
  createGetQuery,
  createPostQuery,
  createPutQuery,
  createDeleteQuery,
};
