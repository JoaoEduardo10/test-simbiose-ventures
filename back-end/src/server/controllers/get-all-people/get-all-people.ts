/* eslint-disable @typescript-eslint/no-unused-vars */
import { PersonDTO } from "../../interfaceDTO/person";
import { IGetAllPeopleRepository } from "../../repositories/get-all-people/protocols";
import { ApiRequest, ApiResponse, IControllers } from "../protocols";

class GetAllPeopleRepository implements IControllers {
  constructor(
    private readonly getAllPeopleRepository: IGetAllPeopleRepository
  ) {}

  async handle(_req: ApiRequest): Promise<ApiResponse<PersonDTO[]>> {
    const people = await this.getAllPeopleRepository.get();

    return {
      body: people,
      statusCode: 200,
    };
  }
}

export { GetAllPeopleRepository };
