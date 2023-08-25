import { PersonDTO } from "../../interfaceDTO/person";

export interface IUpdatePersonDTO {
  name?: string;
  email?: string;
  birth_date?: string;
  id: string;
}

export interface IUpdatePersonRepository {
  update(prams: IUpdatePersonDTO): Promise<PersonDTO>;
}
