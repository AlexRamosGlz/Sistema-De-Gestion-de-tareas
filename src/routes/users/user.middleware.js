function createPostUserQuery(user) {
  const [...fields] = Object.keys(user);
  const [...values] = Object.values(user);

  return `INSERT INTO users (${fields.join(",")}) VALUES (${values.map(
    (value) => `"${value}"`
  )})`;
}

module.exports = {
  createPostUserQuery,
};
