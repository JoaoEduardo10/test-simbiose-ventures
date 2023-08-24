import { PersonDTO } from "../../interfaceDTO/person";
import { Person } from "../../models/Person";
import { ICreatePersonRepository, IPerson } from "./protocols";

class MongoCreatePersonRepository implements ICreatePersonRepository {
  private Person: typeof Person;

  constructor() {
    this.Person = Person;
  }

  async create(params: IPerson): Promise<PersonDTO> {
    const person = await this.Person.create(params);

    if (!person) {
      throw new Error("Erro, pessoa não criada");
    }

    const { _id, name, email, birth_date } = person;

    return { id: _id.toHexString(), name, email, birth_date };
  }
}

export { MongoCreatePersonRepository };
