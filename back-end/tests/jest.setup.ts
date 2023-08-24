import { Person } from "../src/server/models/Person";
import {
  mongooseCloseDataBase,
  mongooseConnectMock,
} from "./mongoMockConnection";

beforeAll(async () => {
  await mongooseConnectMock();
});

afterEach(() => {
  Person.deleteMany();
});

afterAll(async () => {
  await mongooseCloseDataBase();
  jest.resetAllMocks();
});
