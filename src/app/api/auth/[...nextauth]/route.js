import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectToDB } from "@/app/lib/utils";
import { User } from "@/app/lib/models";
import bcrypt from "bcrypt";

export const authOptions = {
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        try {
          await connectToDB();

          const user = await User.findOne({ username: credentials.username });

          if (!user) {
            console.log("❌ User not found");
            return null;
          }

          const isValid = await bcrypt.compare(credentials.password, user.password);
          if (!isValid) {
            console.log("❌ Invalid password");
            return null;
          }

          return {
            id: user._id.toString(),
            username: user.username,
            email: user.email,
          };

        } catch (err) {
          console.error("❌ Error in authorize:", err);
          return null;
        }
      }
    })
  ],
  secret: process.env.NEXTAUTH_SECRET, // ✅ الآن في المكان الصحيح
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.id = user.id;
      return token;
    },
    async session({ session, token }) {
      session.user.id = token.id;
      return session;
    }
  }
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
