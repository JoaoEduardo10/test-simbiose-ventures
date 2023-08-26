import { Request, Response } from "express";
import { MongoGetAllPeopleRepository } from "../repositories/get-all-people/get-all-people";
import { GetAllPeopleController } from "../controllers/get-all-people/get-all-people";

class GetAllPeopleRouter {
  async get(req: Request, res: Response) {
    const mongoGetAllPeopleRepository = new MongoGetAllPeopleRepository();
    const getAllPeopleController = new GetAllPeopleController(
      mongoGetAllPeopleRepository
    );

    const { body, statusCode } = await getAllPeopleController.handle(req);

    res.status(statusCode).json({ data: body });
  }
}

export { GetAllPeopleRouter };
