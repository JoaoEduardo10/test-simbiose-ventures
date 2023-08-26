import { Request, Response } from "express";
import { MongoDeletePersonRepository } from "../repositories/delete-person/delete-person";
import { DeletePersonController } from "../controllers/delete-person/delete-person";

class DeletePersonRouter {
  async delete(req: Request, res: Response) {
    const mongoDeletePersonRepository = new MongoDeletePersonRepository();
    const deletePersonController = new DeletePersonController(
      mongoDeletePersonRepository
    );

    const { statusCode } = await deletePersonController.handle(req);

    res.sendStatus(statusCode);
  }
}

export { DeletePersonRouter };
