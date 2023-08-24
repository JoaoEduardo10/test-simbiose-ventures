import mongoose from "mongoose";

class MongoDb {
  private url: string;
  private username: string;
  private password: string;

  constructor() {
    this.url = process.env.MONGODB_URL || process.env.MONGODB_URL_ATLAS || "";
    this.password = process.env.MONGODB_PASSWORD || "";
    this.username = process.env.MONGODB_USER || "";
  }

  async connect(): Promise<void> {
    mongoose.set("strictQuery", false);

    await mongoose.connect(this.url, {
      auth: { username: this.username, password: this.password },
    });
  }
}

export { MongoDb };
