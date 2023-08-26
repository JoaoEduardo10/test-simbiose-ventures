import { NextFunction, Request, Response } from "express";
import { Person } from "../../models/Person";
import { Not_Fould } from "../../errors/api-errors";

class DeletePersonMiddleware {
  async middleware(
    req: Request<{ id: string }>,
    res: Response,
    next: NextFunction
  ) {
    const { id } = req.params;
    const person = await Person.findById(id);

    if (!person) {
      throw new Not_Fould("id invalido!");
    }

    next();
  }
}

export { DeletePersonMiddleware };
