const request = require("supertest");

const app = require("../src/app");
const { execute } = require("../src/config/mysql");

describe("users API", () => {
  beforeAll(async () => {
    await execute(`TRUNCATE TABLE users`);
  });

  describe("Test POST /users/new", () => {
    const user = {
      username: "test User",
      password: "testpassword",
    };

    const userWithoudAkey = {
      password: "testpassword",
    };

    const userWihtoutKeyValue = {
      username: "",
      password: "testpassword",
    };

    test("it should respond with 201 created", async () => {
      const response = await request(app)
        .post("/users/new")
        .send(user)
        .expect("Content-Type", /json/)
        .expect(201);
      console.warn(response.text);
    });

    test("it should respond with 400 bad request", async () => {
      const response = await request(app)
        .post("/users/new")
        .send(userWithoudAkey)
        .expect("Content-Type", /json/)
        .expect(400);
      console.warn(response.text);
    });

    test("it should respond with 400 bad request", async () => {
      const response = await request(app)
        .post("/users/new")
        .send(userWihtoutKeyValue)
        .expect("Content-Type", /json/)
        .expect(400);

      console.warn(response.text);
    });
  });
});
