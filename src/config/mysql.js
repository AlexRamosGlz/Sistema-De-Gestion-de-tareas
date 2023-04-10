const mysql = require("mysql2/promise");

require("dotenv").config();

async function dbConnection(database) {
  console.log(database);
  const con = await mysql.createConnection({
    host: process.env.RDS_HOSTNAME,
    user: process.env.RDS_USERNAME,
    password: process.env.RDS_PASSWORD,
    port: process.env.RDS_PORT,
    database: "tasksDB",
  });

  return con;
}

async function connection() {
  return await dbConnection();
}

module.exports = connection;
