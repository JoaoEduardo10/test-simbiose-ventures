import { Person } from "../../models/Person";
import { IDeletePersonRepository } from "./protocols";

class MongoDeletePersonRepository implements IDeletePersonRepository {
  private Person: typeof Person;

  constructor() {
    this.Person = Person;
  }

  async delete(params: { id: string }): Promise<void> {
    const { id } = params;

    await this.Person.findByIdAndDelete(id);
  }
}

export { MongoDeletePersonRepository };
