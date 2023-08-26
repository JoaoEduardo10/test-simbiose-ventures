import { PersonDTO } from "../../interfaceDTO/person";

export interface IGetAllPeopleRepository {
  get(): Promise<PersonDTO[]>;
}
