/* eslint-disable @typescript-eslint/no-explicit-any */
import { IDeletePersonRepository } from "../../repositories/delete-person/protocols";
import { ApiRequest, ApiResponse, IControllers } from "../protocols";

class DeletePersonController implements IControllers {
  constructor(
    private readonly deletePersonRepository: IDeletePersonRepository
  ) {}

  async handle(req: ApiRequest): Promise<ApiResponse<any>> {
    const id = req.params.id as string;

    await this.deletePersonRepository.delete({ id });

    return {
      body: {},
      statusCode: 204,
    };
  }
}

export { DeletePersonController };
