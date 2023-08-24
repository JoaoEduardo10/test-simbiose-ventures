import "express-async-errors";
import express from "express";
import { globalsErrors } from "./middlewares/globals-errors";
import { router } from "./router";

const server = express();

server.use(express.json());

server.use("/v1", router);

server.use(globalsErrors);

export { server };
