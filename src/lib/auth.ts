import type { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import EmailProvider from "next-auth/providers/email";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { db, accounts, users } from "@/db/schema.tsx";
import Resend from "resend";

export const authOptions: NextAuthOptions = {
  adapter: DrizzleAdapter(db, {
    userTable: users,
    accountsTable: accounts,
  }),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
};
