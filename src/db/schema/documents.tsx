import { integer, sqliteTable, text, primaryKey } from "drizzle-orm/sqlite-core";
import type { AdapterAccount } from "next-auth/adapters";
import { drizzle } from "drizzle-orm/libsql";
import { createClient } from "@libsql/client";
import { jsoncontent } from "@tiptap/react"; // tiptap公式のjson型をインポート

const client = createClient({
  url: process.env.TURSO_DATABASE_URL as string,
  authToken: process.env.TURSO_DATABASE_TOKEN as string
});

export const db = drizzle(client);

export const documents = sqliteTable("documents", {
  id: text("id").primaryKey(), // uuid等を入れる想定
  title: text("title").notNull(),
  // ★ポイント: mode: "json" を指定し、Tiptapの型を当てる
  content: text("content", { mode: "json" }).$type<JSONContent>(),
  userId: text("user_id").notNull(),
  createdAt: integer("created_at", { mode: "timestamp" }),
});
