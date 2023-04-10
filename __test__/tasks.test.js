const request = require("supertest");

const app = require("../src/app");
const { execute } = require("../src/config/mysql");
let isTesting;

describe("tasks API", () => {
  afterAll(async () => {
    await execute(`TRUNCATE TABLE tasks`);
  });

  beforeAll(() => {
    isTesting = true;
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
    test("it should return 201 succes", async () => {
      const response = await request(app)
        .post("/tasks/new")
        .set("Authorization", `Bearer ${testToken}`)
        .send(task)
        .expect("Content-Type", /json/)
        .expect(201);

      console.warn(response.text);
    });
  });

  describe("Test POST /tasks/new", () => {
    test("it should return 400 bad request", async () => {
      const response = await request(app)
        .post("/tasks/new")
        .set("Authorization", `Bearer ${testToken}`)
        .send(taskWithoutRequiredParam)
        .expect("Content-Type", /json/)
        .expect(400);

      console.warn(response.text);
    });
  });

  describe("Test POST /tasks/new", () => {
    test("it should return 400 bad request", async () => {
      const response = await request(app)
        .post("/tasks/new")
        .set("Authorization", `Bearer ${testToken}`)
        .send(taskWithEmptyRequiredParamValue)
        .expect("Content-Type", /json/)
        .expect(400);

      console.warn(response.text);
    });
  });

  describe("Test GET /tasks/full", () => {
    test("it should return 200 bad request", async () => {
      const response = await request(app)
        .get("/tasks/full/1")
        .set("Authorization", `Bearer ${testToken}`)
        .expect("Content-Type", /json/)
        .expect(200);

      console.warn(response.text);
    });
  });

  describe("Test GET /tasks/full ", () => {
    test("it should return 400 bad request", async () => {
      const response = await request(app)
        .get("/tasks/full/asd")
        .set("Authorization", `Bearer ${testToken}`)
        .expect("Content-Type", /json/)
        .expect(400);

      console.warn(response.text);
    });
  });

  describe("Test GET /tasks/summary (GET succesful)", () => {
    test("it should return 200 succes", async () => {
      const response = await request(app)
        .get("/tasks/summary/1")
        .query({ columns: "titulo,descripcion" })
        .set("Authorization", `Bearer ${testToken}`)
        .expect("Content-Type", /json/)
        .expect(200);

      console.warn(response.text);
    });
  });

  describe("Test GET /tasks/summary", () => {
    test("it should return 400 bad request (bad id)", async () => {
      const response = await request(app)
        .get("/tasks/summary/asd")
        .query({ columns: "titulo,descripcion" })
        .set("Authorization", `Bearer ${testToken}`)
        .expect("Content-Type", /json/)
        .expect(400);

      console.warn(response.text);
    });
  });

  describe("Test UPDATE /task/update", () => {
    const update = {
      titulo: "otro nuevo titulo",
      descripcion: "otra nueva descripcion",
      terminado: 0,
    };

    test("it should return 200 succes (update succesful)", async () => {
      const response = await request(app)
        .put("/tasks/update/1")
        .set("Authorization", `Bearer ${testToken}`)
        .send(update)
        .expect("Content-Type", /json/)
        .expect(200);

      console.warn(response.text);
    });
  });

  describe("Test UPDATE /task/update", () => {
    const update = {
      titulo: "otro nuevo titulo",
      descripcion: "otra nueva descripcion",
      terminado: 0,
    };

    test("it should return 400 bad request (bad id)", async () => {
      const response = await request(app)
        .put("/tasks/update/asd")
        .set("Authorization", `Bearer ${testToken}`)
        .send(update)
        .expect("Content-Type", /json/)
        .expect(400);

      console.warn(response.text);
    });
  });

  describe("Test UPDATE /task/update (empty body)", () => {
    test("it should return 400 bad request", async () => {
      const response = await request(app)
        .put("/tasks/update/asd")
        .set("Authorization", `Bearer ${testToken}`)
        .send({})
        .expect("Content-Type", /json/)
        .expect(400);

      console.warn(response.text);
    });
  });

  describe("Test DELETE /task/delete", () => {
    test("it should return 200 succes", async () => {
      const response = await request(app)
        .delete("/tasks/delete/1")
        .set("Authorization", `Bearer ${testToken}`)
        .expect("Content-Type", /json/)
        .expect(200);

      console.warn(response.text);
    });
  });

  describe("Test DELETE /task/delete", () => {
    test("it should return 400 succes (bad id)", async () => {
      const response = await request(app)
        .delete("/tasks/delete/asd")
        .set("Authorization", `Bearer ${testToken}`)
        .expect("Content-Type", /json/)
        .expect(400);

      console.warn(response.text);
    });
  });
});
