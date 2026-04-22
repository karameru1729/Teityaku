import { drizzle } from "drizzle-orm/libsql";
import { createClient } from "@libsql/client";
import * as schema from "./schema"; // 以前作成したスキーマファイルをインポート

const client = createClient({
  url: process.env.TURSO_DATABASE_URL as string,
  authToken: process.env.TURSO_DATABASE_TOKEN as string
});

export const db = drizzle(client);
