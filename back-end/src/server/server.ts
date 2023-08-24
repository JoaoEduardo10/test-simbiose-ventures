import "express-async-errors";
import express from "express";
import { globalsErrors } from "./middlewares/globals-errors";
import { Bad_Request } from "./errors/api-errors";

const server = express();

server.get("/", () => {
  throw new Bad_Request("test");
});

server.use(globalsErrors);

export { server };
