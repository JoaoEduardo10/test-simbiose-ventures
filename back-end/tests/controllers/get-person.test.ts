import { GetPersonController } from "../../src/server/controllers/get-person/get-person";
import { ApiRequest } from "../../src/server/controllers/protocols";
import { PersonDTO } from "../../src/server/interfaceDTO/person";
import {
  IGetPersonDTO,
  IGetPersonRepository,
} from "../../src/server/repositories/get-person/protocols";

const reqMock: ApiRequest = {
  params: {
    id: "1234",
  },
};

class MockGetPersonRepository implements IGetPersonRepository {
  private user: PersonDTO;

  constructor() {
    this.user = {
      birth_date: "07/10/2003",
      email: "test@gmail.com",
      id: "1234",
      name: "test",
    };
  }

  async get(params: IGetPersonDTO): Promise<PersonDTO> {
    if (this.user.id === params.id) {
      return this.user;
    }

    throw new Error("test");
  }
}

describe("get-person", () => {
  it("should return the data of a person with status code 200", async () => {
    const repository = new MockGetPersonRepository();

    const controller = new GetPersonController(repository);

    const { body, statusCode } = await controller.handle(reqMock);

    expect(body).toBeTruthy();
    expect(statusCode).toBe(200);
  });
});
