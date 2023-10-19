import { connectToDatabase } from "../../../lib/db";
import { verifyPassword } from "../../../lib/auth";

import NextAuth from "next-auth/next";
import Credentials from "next-auth/providers/credentials";
import CredentialsProvider from "next-auth/providers/credentials";

// export default NextAuth({
//   session: {
//     jwt: true,
//   },

//   providers: [
//     CredentialsProvider({
//       async authorize(credentials) {
//         const client = await connectToDatabase();

//         const userCollection = client.db().collection("users");

//         const user = await userCollection.findOne({ email: credentials.email });

//         if (!user) {
//           client.close();
//           throw new Error("No user found!");
//         }

//         const isValid = await verifyPassword(
//           credentials.password,
//           user.password
//         );

//         if (!isValid) {
//           client.close();
//           throw new Error("Could not log you in!");
//         }

//         client.close();

//         return {
//           email: user.email,
//         };
//       },
//     }),
//   ],
// });

export const authOptions = {
  secret: "thequickbrownfox",
  session: {
    jwt: true,
  },
  providers: [
    Credentials({
      async authorize(credentials) {
        const client = await connectToDatabase();

        const usersCollection = client.db().collection("users");

        const user = await usersCollection.findOne({
          email: credentials.email,
        });

        if (!user) {
          client.close();
          throw new Error("No user found!");
        }

        const isValid = await verifyPassword(
          credentials.password,
          user.password
        );

        if (!isValid) {
          client.close();
          throw new Error("Could not log you in!");
        }

        client.close();
        return { email: user.email };
      },
    }),
  ],
};

export default NextAuth(authOptions);
