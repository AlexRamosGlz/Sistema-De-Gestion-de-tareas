const mysql = require("mysql2/promise");

require("dotenv").config();
console.log(process.env.TEST_DB);

async function dbConnection() {
  const con = await mysql.createConnection({
    host: process.env.RDS_HOSTNAME,
    user: process.env.RDS_USERNAME,
    password: process.env.RDS_PASSWORD,
    port: process.env.RDS_PORT,
    database: process.env.TEST_DB,
  });

  return con;
}

async function execute(query) {
  return await (await dbConnection()).execute(query);
}

module.exports = { execute, dbConnection };
