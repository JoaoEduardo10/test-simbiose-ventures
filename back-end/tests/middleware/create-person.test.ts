import { serverTest } from "../jest.setup";

describe("create-person", () => {
  beforeEach(async () => {
    await serverTest.post("/v1/pessoa").send({
      email: "test1@gmail.com",
      name: "test",
      birth_date: "11/02/2002",
    });
  });

  it("should return an error for not adding the date of birth", async () => {
    const { body, statusCode } = await serverTest.post("/v1/pessoa").send({
      email: "test@gmail.com",
      name: "test",
    });

    expect(statusCode).toBe(400);
    expect(body).toEqual({
      error: "adicione um birth_data 'data de nacimento'",
    });
  });

  it("should return an error because it has formatted the date incorrectly case one", async () => {
    const { body, statusCode } = await serverTest.post("/v1/pessoa").send({
      birth_date: "111/02/2002",
      email: "test@gmail.com",
      name: "test",
    });

    expect(statusCode).toBe(400);
    expect(body).toEqual({
      error: "formato de data incorretor. ex: 07/10/2003",
    });
  });

  it("should return an error because it has formatted the date incorrectly case two", async () => {
    const { body, statusCode } = await serverTest.post("/v1/pessoa").send({
      birth_date: "11/02/20021",
      email: "test@gmail.com",
      name: "test",
    });

    expect(statusCode).toBe(400);
    expect(body).toEqual({
      error: "formato de data incorretor. ex: 07/10/2003",
    });
  });

  it("should return an error for not submitting a name", async () => {
    const { body, statusCode } = await serverTest.post("/v1/pessoa").send({
      birth_date: "11/02/2002",
      email: "test@gmail.com",
    });

    expect(statusCode).toBe(400);
    expect(body).toEqual({
      error: "adicione um name 'nome'",
    });
  });

  it("should return an error if the length of the name is less than 4", async () => {
    const { body, statusCode } = await serverTest.post("/v1/pessoa").send({
      birth_date: "11/02/2002",
      email: "test@gmail.com",
      name: "tt",
    });

    expect(statusCode).toBe(400);
    expect(body).toEqual({
      error: "adicione ao nome pelo menos 4 letras",
    });
  });

  it("should return an error for not submitting an email", async () => {
    const { body, statusCode } = await serverTest.post("/v1/pessoa").send({
      birth_date: "11/02/2002",
      name: "test",
    });

    expect(statusCode).toBe(400);
    expect(body).toEqual({
      error: "adicione um email",
    });
  });

  it("should return an error for sending an invalid email format", async () => {
    const { body, statusCode } = await serverTest.post("/v1/pessoa").send({
      birth_date: "11/02/2002",
      email: "test",
      name: "test",
    });

    expect(statusCode).toBe(400);
    expect(body).toEqual({
      error: "formato de email invalido",
    });
  });

  it("should return an error because the email has already been registered", async () => {
    const { body, statusCode } = await serverTest.post("/v1/pessoa").send({
      birth_date: "11/02/2002",
      email: "test1@gmail.com",
      name: "test",
    });

    expect(statusCode).toBe(400);
    expect(body).toEqual({
      error: "email já cadastrado",
    });
  });
});
