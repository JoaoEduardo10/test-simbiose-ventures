import { Person } from "../src/server/models/Person";
import { server } from "../src/server/server";
import {
  mongooseCloseDataBase,
  mongooseConnectMock,
} from "./mongoMockConnection";
import supertest from "supertest";

const serverTest = supertest(server);

beforeAll(async () => {
  await mongooseConnectMock();
}, 10000);

afterEach(() => {
  Person.deleteMany();
});

afterAll(async () => {
  await mongooseCloseDataBase();
  jest.resetAllMocks();
});

export { serverTest };
