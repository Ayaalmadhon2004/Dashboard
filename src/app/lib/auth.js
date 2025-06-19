// src/app/api/auth/[...nextauth]/route.js
import NextAuth from "next-auth";
import { authConfig } from "@/app/authconfig";

const handler = NextAuth(authConfig);
export { handler as GET, handler as POST };
