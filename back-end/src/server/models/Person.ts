import { Schema, model } from "mongoose";
import { PersonDTO } from "../interfaceDTO/person";

const Person = model(
  "users",
  new Schema<Omit<PersonDTO, "id">>({
    birth_date: {
      type: String,
      required: true,
      min: 10,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
      min: 4,
    },
  })
);

export { Person };
