import 'dotenv/config';
import { defineConfig } from "drizzle-kit";
import * as dotenv from "dotenv";

dotenv.config({path: ".env.local"});

export default defineConfig({
  out: "./drizzle",
  dialect: "turso",
  schema: "./src/db/schema",
  dbCredentials: {
    url: process.env.TURSO_DATABASE_URL!,
    authToken: process.env.TURSO_DATABASE_TOKEN!,
  }
});

