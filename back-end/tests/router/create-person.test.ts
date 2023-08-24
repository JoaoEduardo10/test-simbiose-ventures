import { serverTest } from "../jest.setup";

describe("create-person", () => {
  it("should created a person", async () => {
    const { body, statusCode } = await serverTest.post("/v1/pessoa").send({
      birth_date: "07/10/2003",
      email: "test@gmail.com",
      name: "test",
    });

    expect(statusCode).toBe(201);
    expect(body).toBeTruthy();
  });
});
