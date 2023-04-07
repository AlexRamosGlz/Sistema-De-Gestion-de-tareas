const http = require("http");
require("dotenv").config();

const con = require("./config/mysql");

const app = require("./app");

const httpServer = http.createServer(app);

async function loadServer() {
  await con.connect((err) => {
    if (err) console.log(err);
    console.log("connected");
  });
  httpServer.listen(process.env.PORT, () =>
    console.log("server running: ", process.env.PORT)
  );
}

loadServer();
