function checkIfEmptyResult(result) {
  if (result[0].length === 0) return true;
  return false;
}

function createGetQuery(fullRow, filters, columns = [""]) {
  const { filter, value } = filters;

  if (fullRow) return `SELECT * FROM tasks WHERE ${filter}="${value}"`;

  return `SELECT ${columns.join(",")} FROM tasks WHERE ${filter}="${value}"`;
}

function createPostQuery(task) {
  const [...fields] = Object.keys(task);
  const [...values] = Object.values(task);

  return `INSERT INTO tasks (${fields.join(",")}) VALUES (${values.map(
    (value) => `"${value}"`
  )})`;
}

function createPutQuery(task, { filter, value }) {
  const query = [];

  for (const [key, value] of Object.entries(task)) {
    query.push(`${key}='${value}'`);
  }

  return `UPDATE tasks SET ${query.join(",")} WHERE ${filter}=${value}`;
}

function createDeleteQuery({ filter, value }) {
  return `DELETE FROM tasks WHERE ${filter}=${value}`;
}

module.exports = {
  checkIfEmptyResult,
  createGetQuery,
  createPostQuery,
  createPutQuery,
  createDeleteQuery,
};
