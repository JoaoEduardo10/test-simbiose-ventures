/* eslint-disable @typescript-eslint/no-explicit-any */
import { PersonDTO } from "../interfaceDTO/person";

export interface ApiResponse<B> {
  body: B;
  statusCode: number;
}

export interface ApiRequest {
  body?: Omit<PersonDTO, "id">;
  params?: any;
  headers?: any;
}

export interface IControllers {
  handle(req: ApiRequest): Promise<ApiResponse<unknown>>;
}
