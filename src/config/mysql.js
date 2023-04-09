const mysql = require("mysql2/promise");

require("dotenv").config();

async function dbConnection() {
  const con = await mysql.createConnection({
    host: process.env.RDS_HOSTNAME,
    user: process.env.RDS_USERNAME,
    password: process.env.RDS_PASSWORD,
    port: process.env.RDS_PORT,
    database: "taskdb-test",
  });

  return con;
}

dbConnection();

module.exports = dbConnection;
