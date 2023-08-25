import { Internal_Server_Error } from "../../errors/api-errors";
import { PersonDTO } from "../../interfaceDTO/person";
import { Person } from "../../models/Person";
import { IUpdatePersonDTO, IUpdatePersonRepository } from "./protocols";

class MongoUpdatePersonRepository implements IUpdatePersonRepository {
  private Person: typeof Person;

  constructor() {
    this.Person = Person;
  }

  async update(params: IUpdatePersonDTO): Promise<PersonDTO> {
    const { id: personId, ...newPerson } = params;

    const person = await this.Person.findByIdAndUpdate(personId, newPerson);

    if (!person) {
      throw new Internal_Server_Error("Error, pessoa não encontrada");
    }

    const new_person = await this.Person.findById(person.id);

    const { _id, name, email, birth_date } = new_person!;

    return { id: _id.toHexString(), name, email, birth_date };
  }
}

export { MongoUpdatePersonRepository };
