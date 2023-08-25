import { ApiRequest } from "../../src/server/controllers/protocols";
import { Updatepersoncontroller } from "../../src/server/controllers/update-person/update-person";
import { MongoUpdatePersonRepository } from "../../src/server/repositories/update-person/update-person";
import { serverTest } from "../jest.setup";

describe("update-person", () => {
  it("should return status 204", async () => {
    const { body: user } = await serverTest.post("/v1/pessoa").send({
      email: "test@gmail.com",
      birth_date: "07/10/2003",
      name: "test",
    });

    const mockReq = {
      params: {
        id: user.data.id,
      },
      body: {
        name: "eduardo",
      },
    };

    const repository = new MongoUpdatePersonRepository();
    const controller = new Updatepersoncontroller(repository);

    const { body, statusCode } = await controller.handle(mockReq as ApiRequest);

    expect(body.name).not.toEqual(user.data.name);
    expect(statusCode).toBe(204);
  });
});
