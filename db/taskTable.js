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

con.connect(function (err) {
  if (err) throw err;

  con.query("CREATE DATABASE tasksdb", function (err, result) {
    if (err) throw err;
    console.log("Database Created");
  });

  const taskTable =
    "CREATE TABLE tasks (tareaID INT DEFAULT=1 NOTNULL AUTOINCREMENT, descripcion VARCHAR(200) NOTNULL,  terminado BINARY DEFAULT=FALSE NOTNULL, fechaDeEntrega DATE NOTNULL, comentarios TEXT(400), responsable VARCHAR(50))";

  con.query(taskTable, function (err, result) {
    if (err) throw err;

    console.log("Table Created", result);
  });
});
