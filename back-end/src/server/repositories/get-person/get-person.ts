import { Internal_Server_Error } from "../../errors/api-errors";
import { PersonDTO } from "../../interfaceDTO/person";
import { Person } from "../../models/Person";
import { IGetPersonDTO, IGetPersonRepository } from "./protocols";

class MongoGetPersonRepository implements IGetPersonRepository {
  private Person: typeof Person;

  constructor() {
    this.Person = Person;
  }

  async get(params: IGetPersonDTO): Promise<PersonDTO> {
    const person = await this.Person.findById(params.id);

    if (!person) {
      throw new Internal_Server_Error("Error, não foi posivel busca usuário");
    }

    const { _id, name, email, birth_date } = person;

    return { id: _id.toHexString(), name, email, birth_date };
  }
}

export { MongoGetPersonRepository };
