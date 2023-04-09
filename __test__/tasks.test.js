const request = require("supertest");

const app = require("../src/app");
const dbConnection = require("../src/config/mysql");

describe("tasks API", () => {
  afterAll(async () => {
    await (
      await dbConnection()
    ).execute(`DELETE FROM tasks WHERE username="test User" AND titulo="test"`);
  });

  const task = {
    titulo: "test",
    descripcion: "test test test test",
    terminado: 1,
    fechaDeEntrega: "2023-04-09",
    comentarios: "esto es un test",
    responsable: "test",
    tags: "test",
  };

  const taskWithoutRequiredParam = {
    descripcion: "test test test test",
    terminado: 1,
    fechaDeEntrega: "2023-04-09",
    comentarios: "esto es un test",
    responsable: "test",
    tags: "test",
  };

  const taskWithEmptyRequiredParamValue = {
    titulo: "test",
    descripcion: "",
    terminado: 1,
    fechaDeEntrega: "2023-04-09",
    comentarios: "esto es un test",
    responsable: "test",
    tags: "test",
  };

  const testToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3QgVXNlciIsImlhdCI6MTY4MTA4MjI1NiwiZXhwIjoyMjg1ODgyMjU2fQ.r3UJYen2aNJLehOppdH7PJJN8UD7fJ1W6WvHd_IjVGg";

  describe("Test POST /tasks/new", () => {
    test("it should return 200 succes", async () => {
      const response = await request(app)
        .post("/tasks/new")
        .set("Authorization", `Bearer ${testToken}`)
        .send(task)
        .expect("Content-Type", /json/)
        .expect(201);

      console.warn(response.text);
    });
  });

  //   describe("Test POST /tasks/new", () => {
  //     test("it should return 400 bad request", async () => {
  //       const response = await request(app)
  //         .post("/tasks/new")
  //         .send(taskWithoutRequiredParam)
  //         .expect("Content-Type", /json/)
  //         .expect(400);

  //       console.warn(response.text);
  //     });
  //   });

  //   describe("Test POST /tasks/new", () => {
  //     test("it should return 400 bad request", async () => {
  //       const response = await request(app)
  //         .post("/tasks/new")
  //         .send(taskWithEmptyRequiredParamValue)
  //         .expect("Content-Type", /json/)
  //         .expect(400);

  //       console.warn(response.text);
  //     });
  //   });
});
