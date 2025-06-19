// src/app/authconfig.js
import CredentialsProvider from "next-auth/providers/credentials";
import { connectToDB } from "./lib/utils";
import { User } from "./lib/models";
import bcrypt from "bcrypt";

export const authConfig = {
  providers: [
    CredentialsProvider({ // we have it from next-auth lib
      async authorize(credentials) {
        await connectToDB();
        const user = await User.findOne({ username: credentials.username }); // to find only one user from the db 
        if (!user) return null;

        const isValid = await bcrypt.compare(credentials.password, user.password);
        if (!isValid) return null;

        return {
          id: user._id.toString(),
          username: user.username,
          email: user.email,
        };
      },
    }),
  ],
  pages: {
    signIn: "/login", // pages that are used for authentication
  }, 
  callbacks: { //call are functions that are called during the auth process 
    async session({ session, token }) { //when a session is created or updated 
      session.user.id = token.sub; // sub is subject in token and token from the info during sign in  ,, add id to data 
      return session;
    },
  },
};

