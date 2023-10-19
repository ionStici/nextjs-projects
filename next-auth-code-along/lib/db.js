import { MongoClient } from "mongodb";

export async function connectToDatabase() {
  const client = await MongoClient.connect(
    "mongodb+srv://ionsticidev:9uY93Ummp0W06tc1@cluster0.ybiwzkl.mongodb.net/auth-demo?retryWrites=true&w=majority"
  );

  return client;
}
