import { Router } from "express";
import { CreatePersonMiddleware } from "../middlewares/create-person/create-person";
import { CreatePersonRouter } from "../usecase/create-person";
import { GetPersonRouter } from "../usecase/get-person";
import { GetPersonMiddleware } from "../middlewares/get-person/get-person";

const personRouter = Router();

const createPersonMiddleware = new CreatePersonMiddleware();
const createPersonRouter = new CreatePersonRouter();

personRouter.post(
  "/pessoa",
  createPersonMiddleware.middleware,
  createPersonRouter.create
);

const getPersonRouter = new GetPersonRouter();
const getPersonMiddleware = new GetPersonMiddleware();

personRouter.get(
  "/pessoa/:id",
  getPersonMiddleware.middleware,
  getPersonRouter.get
);

export { personRouter };
