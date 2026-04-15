import { integer, sqliteTable, text, primaryKey } from "drizzle-orm/sqlite-core";
import type { AdapterAccount } from "next-auth/adapters";
import { drizzle } from "drizzle-orm/libsql";
import { createClient } from "@libsql/client";

const client = createClient({
  url: process.env.TURSO_DATABASE_URL as string,
  authToken: process.env.TURSO_DATABASE_TOKEN as string
});

export const db = drizzle(client);

export const editor = sqliteTable("editor", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  name: text("name"),
  content: 
});
