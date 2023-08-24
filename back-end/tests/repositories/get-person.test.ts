/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { Person } from "../../src/server/models/Person";
import { MongoGetPersonRepository } from "../../src/server/repositories/get-person/get-person";
import { serverTest } from "../jest.setup";

describe("get-person", () => {
  let create_person = {
    id: "",
    name: "",
    email: "",
    birth_date: "",
  };

  beforeEach(async () => {
    const { body } = await serverTest.post("/v1/pessoa").send({
      email: "test@gmail.com",
      name: "test",
      birth_date: "07/10/2003",
    });

    const new_id = body.data?.id ?? "111";

    create_person = {
      id: new_id,
      birth_date: body.data?.birth_date,
      name: body.data?.name,
      email: body.data?.email,
    };
  });

  it("should return a person", async () => {
    const repository = new MongoGetPersonRepository();

    const person = await repository.get({
      id: create_person.id,
    });

    expect(person.id).toBeTruthy();
    expect(person).toBeTruthy();
  });

  it("should not fetch the user", async () => {
    try {
      jest.spyOn(Person, "findById").mockReturnValue(null as any);

      const repository = new MongoGetPersonRepository();

      const person = await repository.get({
        id: "111",
      });

      expect(person).not.toBeTruthy();
    } catch (error: any) {
      expect(error).toBeTruthy();
      expect((error as Error).message).toEqual(
        "Error, não foi posivel busca usuário"
      );
    }
  });
});
