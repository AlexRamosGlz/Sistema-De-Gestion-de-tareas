const mysql = require("mysql");
require("dotenv").config();

console.log(process.env.RDS_HOSTNAME);

const con = mysql.createConnection({
  host: process.env.RDS_HOSTNAME,
  user: process.env.RDS_USERNAME,
  password: process.env.RDS_PASSWORD,
  port: process.env.RDS_PORT,
});

con.connect((err) => {
  if (err) return console.log(err);
  console.log("connected");
});

module.exports = con;
