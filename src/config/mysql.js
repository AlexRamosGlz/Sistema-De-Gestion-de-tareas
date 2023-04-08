const mysql = require("mysql2/promise");
const firstQuery = require("../../db/taskTable");
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

// function postNewTas() {
//   con.query(
//     `INSERT INTO tasks (titulo, fechaDeEntrega, descripcion, terminado) VALUES ("algo", '2023-07-04', "algo", 1)`,
//     function (err, result) {
//       if (err) throw err;
//       console.log(result);
//     }
//   );

//   con.query("SELECT * FROM tasks", function (err, result) {
//     if (err) throw err;
//     console.log(returnData(result), "resultado");
//   });
// }

// function returnData(data) {
//   return data[0];
// }
dbConnection();

module.exports = dbConnection;
