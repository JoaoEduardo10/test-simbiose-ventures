/* eslint-disable @typescript-eslint/no-explicit-any */
import { PersonDTO } from "../../src/server/interfaceDTO/person";
import { Person } from "../../src/server/models/Person";
import { MongoUpdatePersonRepository } from "../../src/server/repositories/update-person/update-person";
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
    const repository = new MongoUpdatePersonRepository();

    const person = await repository.update({
      id: user.id,
      email: "test2@gmail.com",
    });

    expect(user.id).toBe(person.id);
    expect(user.email).not.toBe(person.email);
  });

  it("should not update the person", async () => {
    try {
      jest.spyOn(Person, "findByIdAndUpdate").mockReturnValue(null as any);

      const repository = new MongoUpdatePersonRepository();

      const person = await repository.update({
        id: user.id,
        email: "test2@gmail.com",
      });

      expect(person).not.toBeTruthy();
    } catch (error: any) {
      expect(error).toBeTruthy();
      expect((error as Error).message).toBe("Error, pessoa não encontrada");
    }
  });
});
