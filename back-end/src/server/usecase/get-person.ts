import { Request, Response } from "express";
import { MongoGetPersonRepository } from "../repositories/get-person/get-person";
import { GetPersonController } from "../controllers/get-person/get-person";

class GetPersonRouter {
  async get(req: Request, res: Response) {
    const mongoGetPersonRepository = new MongoGetPersonRepository();
    const getPersoncontroller = new GetPersonController(
      mongoGetPersonRepository
    );

    const { body, statusCode } = await getPersoncontroller.handle(req);

    res.status(statusCode).json({ data: body });
  }
}

export { GetPersonRouter };
