import { PersonDTO } from "../../interfaceDTO/person";
import { IGetAllPeopleRepository } from "./protocols";
import { Person } from "../../models/Person";

class MongoGetAllPeopleRepository implements IGetAllPeopleRepository {
  private Person: typeof Person;

  constructor() {
    this.Person = Person;
  }

  async get(): Promise<PersonDTO[]> {
    const people = await this.Person.find();

    return people.map(({ _id, name, email, birth_date }) => ({
      id: _id.toHexString(),
      name,
      email,
      birth_date,
    }));
  }
}

export { MongoGetAllPeopleRepository };
