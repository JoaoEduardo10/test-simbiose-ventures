import { PersonDTO } from "../../interfaceDTO/person";

export interface IGetPersonDTO {
  id: string;
}

export interface IGetPersonRepository {
  get(params: IGetPersonDTO): Promise<PersonDTO>;
}
