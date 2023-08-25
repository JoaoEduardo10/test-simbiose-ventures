import { Request, Response } from "express";
import { MongoUpdatePersonRepository } from "../repositories/update-person/update-person";
import { Updatepersoncontroller } from "../controllers/update-person/update-person";

class UpdatePersonRouter {
  async update(req: Request, res: Response) {
    const mongoUpdatePersonrepository = new MongoUpdatePersonRepository();
    const updatePersonController = new Updatepersoncontroller(
      mongoUpdatePersonrepository
    );

    const { statusCode } = await updatePersonController.handle(req);

    res.sendStatus(statusCode);
  }
}

export { UpdatePersonRouter };
