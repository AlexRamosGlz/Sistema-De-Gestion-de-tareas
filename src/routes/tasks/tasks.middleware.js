function checkIfEmptyResult(result) {
  if (result[0].length === 0) return true;
  return false;
}

function createGetQuery(fullRow, filters, columns = [""]) {
  console.log(fullRow, filters, columns, "createquery");

  const { filter, value } = filters;

  if (fullRow) return `SELECT * FROM tasks WHERE ${filter}=${value}`;

  return `SELECT ${columns.join(",")} FROM tasks WHERE ${filter}=${value}`;
}

function createPostQuery(task) {
  console.log(task);

  const [...fields] = Object.keys(task);
  const [...values] = Object.values(task);

  return `INSERT INTO tasks (${fields.join(",")}) VALUES (${values.map(
    (value) => `"${value}"`
  )})`;
}

module.exports = { checkIfEmptyResult, createGetQuery, createPostQuery };
