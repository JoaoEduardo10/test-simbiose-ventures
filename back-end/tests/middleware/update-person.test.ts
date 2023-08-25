import { PersonDTO } from "../../src/server/interfaceDTO/person";
import { Person } from "../../src/server/models/Person";
import { serverTest } from "../jest.setup";

describe("update-person", () => {
  const user: PersonDTO = {
    birth_date: "",
    email: "",
    id: "",
    name: "",
  };

  beforeEach(async () => {
    const { body } = await serverTest.post("/v1/pessoa").send({
      email: "test@gmail.com",
      birth_date: "07/10/2003",
      name: "test",
    });

    user.birth_date = body.data?.birth_date;
    user.email = body.data?.email;
    user.name = body.data?.name;
    user.id = body.data?.id;
  });

  afterEach(async () => {
    await Person.deleteMany();
  });

  it("should return an error for sending an invalid id", async () => {
    await Person.findByIdAndDelete(user.id);
    const { body, statusCode } = await serverTest.put(`/v1/pessoa/${user.id}`);

    expect(statusCode).toBe(404);
    expect(body).toEqual({ error: "id invalido" });
  });

  it("should return an error for sending the date of birth in the wrong format", async () => {
    const person = await Person.create({
      birth_date: "10/10/2002",
      name: "test",
      email: "test444@gmail.com",
    });

    const { body, statusCode } = await serverTest
      .put(`/v1/pessoa/${person._id.toHexString()}`)
      .send({
        birth_date: "07",
      });

    expect(statusCode).toBe(400);
    expect(body).toEqual({ error: "fomato de data errado. ex: 07/10/2003" });
  });

  it(" should return an error for submitting the name wrongly", async () => {
    const person = await Person.create({
      birth_date: "10/10/2002",
      name: "test",
      email: "test4444@gmail.com",
    });

    const { body, statusCode } = await serverTest
      .put(`/v1/pessoa/${person._id.toHexString()}`)
      .send({
        name: "",
      });

    expect(statusCode).toBe(400);
    expect(body).toEqual({ error: "adicione no minino 4 letras ao nome" });
  });

  it("should return an error for sending a name with less than 4 letters", async () => {
    const person = await Person.create({
      birth_date: "10/10/2002",
      name: "test",
      email: "test4444@gmail.com",
    });

    const { body, statusCode } = await serverTest
      .put(`/v1/pessoa/${person._id.toHexString()}`)
      .send({
        name: "aaa",
      });

    expect(statusCode).toBe(400);
    expect(body).toEqual({ error: "adicione no minino 4 letras ao nome" });
  });

  it("should return an error for not sending the email", async () => {
    const person = await Person.create({
      birth_date: "10/10/2002",
      name: "test",
      email: "test44@gmail.com",
    });

    const { body, statusCode } = await serverTest
      .put(`/v1/pessoa/${person._id.toHexString()}`)
      .send({
        email: "",
      });

    expect(statusCode).toBe(400);
    expect(body).toEqual({ error: "formato de email invalido" });
  });

  it("should return an error for not sending the email", async () => {
    const person = await Person.create({
      birth_date: "10/10/2002",
      name: "test",
      email: "test44@gmail.com",
    });

    const { body, statusCode } = await serverTest
      .put(`/v1/pessoa/${person._id.toHexString()}`)
      .send({
        email: "test44@gmail.com",
      });

    expect(statusCode).toBe(400);
    expect(body).toEqual({ error: "email ja utilizado" });
  });
});
