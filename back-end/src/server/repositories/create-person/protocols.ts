import { PersonDTO } from "../../interfaceDTO/person";

export interface IPerson {
  name: string;
  email: string;
  birth_date: string;
}

export interface ICreatePersonRepository {
  create(params: IPerson): Promise<PersonDTO>;
}
