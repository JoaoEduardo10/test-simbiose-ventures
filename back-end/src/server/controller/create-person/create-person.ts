import { PersonDTO } from "../../interfaceDTO/person";
import { ICreatePersonRepository } from "../../repositories/create-person/protocols";
import { ApiRequest, ApiResponse, IControllers } from "../protocols";

class CreatePersonController implements IControllers {
  constructor(
    private readonly createPersonRepository: ICreatePersonRepository
  ) {}

  async handle(req: ApiRequest): Promise<ApiResponse<PersonDTO>> {
    const { birth_date, email, name } = req.body!;

    const person = await this.createPersonRepository.create({
      birth_date,
      email,
      name,
    });

    return {
      body: person,
      statusCode: 201,
    };
  }
}

export { CreatePersonController };
