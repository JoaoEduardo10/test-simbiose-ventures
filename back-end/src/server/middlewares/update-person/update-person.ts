/* eslint-disable @typescript-eslint/ban-types */
import { NextFunction, Request, Response } from "express";
import { PersonDTO } from "../../interfaceDTO/person";
import { Person } from "../../models/Person";
import { Bad_Request, Not_Fould } from "../../errors/api-errors";
import { isValidDateFormat } from "../../helpers/validatorDateFormat";
import validator from "validator";

class UpdatePersonMiddleware {
  async middleware(
    req: Request<{ id: string }, {}, Omit<PersonDTO, "id">>,
    res: Response,
    next: NextFunction
  ) {
    const { id } = req.params;
    const { birth_date, email, name } = req.body;

    const person = await Person.findById(id);

    if (!person) {
      throw new Not_Fould("id invalido");
    }
    if (birth_date && !isValidDateFormat(birth_date)) {
      throw new Bad_Request("fomato de data errado. ex: 07/10/2003");
    }

    if (name?.length === 0 || name?.length < 4) {
      throw new Bad_Request("adicione no minino 4 letras ao nome");
    }

    if (email || email.length == 0) {
      const isEmail = validator.isEmail(email);

      if (!isEmail) {
        throw new Bad_Request("formato de email invalido");
      }

      const email_person = await Person.findOne({ email });

      if (email_person) {
        throw new Bad_Request("email ja utilizado");
      }
    }

    next();
  }
}

export { UpdatePersonMiddleware };
