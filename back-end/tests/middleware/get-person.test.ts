import { PersonDTO } from "../../src/server/interfaceDTO/person";
import { Person } from "../../src/server/models/Person";
import { serverTest } from "../jest.setup";

describe("get-person", () => {
  const user: PersonDTO = {
    birth_date: "",
    email: "",
    id: "",
    name: "",
  };

  beforeEach(async () => {
    const { body } = await serverTest.post("/v1/pessoa").send({
      email: "test@gmail.com",
      name: "test",
      birth_date: "07/10/2003",
    });

    user.birth_date = body.data.birth_date;
    (user.email = body.data.email),
      (user.id = body.data.id),
      (user.name = body.data.name);

    await Person.deleteMany();
  });

  it("should return an error for sending an invalid id", async () => {
    const { body, statusCode } = await serverTest.get(`/v1/pessoa/${user.id}`);

    expect(statusCode).toBe(404);
    expect(body).toEqual({ error: "id invalido!" });
  });
});
