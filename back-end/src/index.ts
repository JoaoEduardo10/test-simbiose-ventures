import { MongoDb } from "./database/MongoDb";
import { server } from "./server/server";
import "dotenv/config";

const PORT = process.env.PORT || 5000;

const mongoDb = new MongoDb();

mongoDb
  .connect()
  .then(() => {
    console.log("data base ok!");
    server.listen(PORT, () => console.log(`server running on port: ${PORT}`));
  })
  .catch((error) => {
    console.log(error.message);
  });
