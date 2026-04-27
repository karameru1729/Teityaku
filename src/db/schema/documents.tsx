import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { JSONContent } from "@tiptap/react"; // tiptap公式のjson型をインポート

export const documents = sqliteTable("documents", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()), // uuid等を入れる想定
  title: text("title").notNull(),
  // ★ポイント: mode: "json" を指定し、Tiptapの型を当てる
  content: text("content", { mode: "json" }).$type<JSONContent>(),
  userId: text("user_id").notNull(),
  createdAt: integer("created_at", { mode: "timestamp_ms" }).$defaultFn(() => new Date()),
});

export type Mydocument = typeof documents.$inferSelect;
