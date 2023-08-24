import { Router } from "express";
import { CreatePersonMiddleware } from "../middlewares/create-person/create-person";
import { CreatePersonRouter } from "../usecase/create-person";

const personRouter = Router();

const createPersonMiddleware = new CreatePersonMiddleware();
const createPersonRouter = new CreatePersonRouter();

personRouter.post(
  "/pessoa",
  createPersonMiddleware.middleware,
  createPersonRouter.create
);

export { personRouter };
