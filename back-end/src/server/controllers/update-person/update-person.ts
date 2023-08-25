import { PersonDTO } from "../../interfaceDTO/person";
import { IUpdatePersonRepository } from "../../repositories/update-person/protocols";
import { ApiRequest, ApiResponse, IControllers } from "../protocols";

class Updatepersoncontroller implements IControllers {
  constructor(
    private readonly updatePersonRepository: IUpdatePersonRepository
  ) {}

  async handle(req: ApiRequest): Promise<ApiResponse<PersonDTO>> {
    const personId = req.params.id as string;

    const person = await this.updatePersonRepository.update({
      id: personId,
      ...req.body,
    });

    return {
      body: person,
      statusCode: 204,
    };
  }
}

export { Updatepersoncontroller };
