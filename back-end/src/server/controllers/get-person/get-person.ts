import { PersonDTO } from "../../interfaceDTO/person";
import { IGetPersonRepository } from "../../repositories/get-person/protocols";
import { ApiRequest, ApiResponse, IControllers } from "../protocols";

class GetPersonController implements IControllers {
  constructor(private readonly getPersonrepository: IGetPersonRepository) {}

  async handle(req: ApiRequest): Promise<ApiResponse<PersonDTO>> {
    const personId = req.params.id as string;

    const person = await this.getPersonrepository.get({
      id: personId,
    });

    return {
      body: person,
      statusCode: 200,
    };
  }
}

export { GetPersonController };
