import { MongoClient } from "mongodb";

export async function connectToDatabase() {
  const client = await MongoClient.connect(
    "mongodb+srv://ionsticidev:U67xEfTzXPJXbBP8@cluster0.ybiwzkl.mongodb.net/auth-demo?retryWrites=true&w=majority"
  );

  return client;
}

// U67xEfTzXPJXbBP8
