import { CreatePersonController } from "../../src/server/controller/create-person/create-person";
import { ApiRequest } from "../../src/server/controller/protocols";
import { MongoCreatePersonRepository } from "../../src/server/repositories/create-person/create-person";

const reqMock: ApiRequest = {
  body: {
    birth_date: "07/10/2003",
    email: "test@gmail.com",
    name: "test",
  },
};

describe("create-person", () => {
  it("should return the person with status code 201", async () => {
    const repository = new MongoCreatePersonRepository();
    const controller = new CreatePersonController(repository);

    const { body, statusCode } = await controller.handle(reqMock);

    expect(statusCode).toBe(201);
    expect(body).toBeTruthy();
  });
});
