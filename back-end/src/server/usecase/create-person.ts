import { Request, Response } from "express";
import { MongoCreatePersonRepository } from "../repositories/create-person/create-person";
import { CreatePersonController } from "../controllers/create-person/create-person";

class CreatePersonRouter {
  async create(req: Request, res: Response) {
    const mongoCreatePersonRepository = new MongoCreatePersonRepository();
    const createPersonController = new CreatePersonController(
      mongoCreatePersonRepository
    );

    const { body, statusCode } = await createPersonController.handle(req);

    res.status(statusCode).json({ data: body });
  }
}

export { CreatePersonRouter };
