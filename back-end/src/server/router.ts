import { Router } from "express";
import { personRouter } from "./router/person";

const router = Router();

router.use("/", personRouter);

export { router };
