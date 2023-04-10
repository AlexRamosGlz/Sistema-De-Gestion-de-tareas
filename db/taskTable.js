const con = require("../src/config/mysql");

// -- CREATE TABLE tarea (
// --     tareaID INT DEFAULT=1 NOTNULL AUTOINCREMENT,
// --     descripcion VARCHAR(200) NOTNULL,
// --     terminado BINARY DEFAULT=FALSE NOTNULL,
// --     fechaDeEntrega DATE NOTNULL,
// --     comentarios TEXT(400),
// --     responsable VARCHAR(50),
// --     -- TAGS
// -- )

function firstQuery() {
  con.query("CREATE DATABASE tasksdb", function (err, result) {
    if (err) throw err;
    console.log("Database Created");
  });

  const taskTable =
    "CREATE TABLE tasks (tareaID INT DEFAULT=1 NOTNULL AUTOINCREMENT,titulo VARCHAR(100) NOTNULL, descripcion VARCHAR(200) NOTNULL,  terminado BINARY DEFAULT=FALSE NOTNULL, fechaDeEntrega DATE NOTNULL, comentarios TEXT(400), responsable VARCHAR(50))";

  con.query(taskTable, function (err, result) {
    if (err) throw err;

    console.log("Table Created", result);
  });

  const insertTask =
    "INSERT INTO tasks (titulo, descripcion, terminado, fechaDeEntrega) VALUES ('tarea', 'hacer tarea', false, '4/7/2023')";

  con.query(insertTask, function (err, result) {
    if (err) throw err;

    console.log("1 record inserted", result);
  });

  const query = "SELECT * FROM tasks";

  con.query(query, function (err, result) {
    if (err) throw err;
    console.log(result);
  });
}

module.exports = firstQuery;
