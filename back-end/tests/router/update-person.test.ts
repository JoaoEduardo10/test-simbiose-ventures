import { PersonDTO } from "../../src/server/interfaceDTO/person";
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

    user.birth_date = body.data.birth_date;
    user.email = body.data.email;
    user.name = body.data.name;
    user.id = body.data.id;
  });

  it("should update the person", async () => {
    const { body, statusCode } = await serverTest
      .put(`/v1/pessoa/${user.id}`)
      .send({
        email: "test2@gmail.com",
      });

    expect(statusCode).toBe(204);
    expect(body).toBeTruthy();
  });
});
