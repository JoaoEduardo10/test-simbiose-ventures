/* eslint-disable @typescript-eslint/no-explicit-any */
import { Person } from "../../src/server/models/Person";
import { MongoCreatePersonRepository } from "../../src/server/repositories/create-person/create-person";

describe("create-person", () => {
  it("should create a user", async () => {
    const repository = new MongoCreatePersonRepository();

    const person = await repository.create({
      birth_date: "07/10/2003",
      email: "test@gmail.com",
      name: "test",
    });

    expect(person.id).toBeTruthy();
    expect(person.name).toBe("test");
  });

  it("should not create a user", async () => {
    try {
      jest.spyOn(Person, "create").mockReturnValue(null as any);

      const repository = new MongoCreatePersonRepository();

      const person = await repository.create({
        birth_date: "07/10/2003",
        email: "test@gmail.com",
        name: "test",
      });

      expect(person).not.toBeTruthy();
    } catch (error: any) {
      expect(error).toBeTruthy();
      expect((error as Error).message).toEqual("Erro, pessoa não criada");
    }
  });
});
