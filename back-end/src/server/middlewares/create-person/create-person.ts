/* eslint-disable @typescript-eslint/ban-types */
import { NextFunction, Request, Response } from "express";
import { PersonDTO } from "../../interfaceDTO/person";
import { Bad_Request } from "../../errors/api-errors";
import validator from "validator";
import { Person } from "../../models/Person";
import { isValidDateFormat } from "../../helpers/validatorDateFormat";

class CreatePersonMiddleware {
  async middleware(
    req: Request<{}, {}, Omit<PersonDTO, "id">>,
    _res: Response,
    next: NextFunction
  ) {
    const { birth_date, email, name } = req.body;

    if (!birth_date) {
      throw new Bad_Request("adicione um birth_date 'data de nacimento'");
    }

    const isDate = isValidDateFormat(birth_date);

    if (!isDate) {
      throw new Bad_Request("formato de data incorretor. ex: 07/10/2003");
    }

    if (!name) {
      throw new Bad_Request("adicione um name 'nome'");
    }

    if (name.length < 4) {
      throw new Bad_Request("adicione ao nome pelo menos 4 letras");
    }

    if (!email) {
      throw new Bad_Request("adicione um email");
    }

    const isEmail = validator.isEmail(email);

    if (!isEmail) {
      throw new Bad_Request("formato de email invalido");
    }

    const person = await Person.findOne({ email: email });

    if (person) {
      throw new Bad_Request("email já cadastrado");
    }

    next();
  }
}

export { CreatePersonMiddleware };
