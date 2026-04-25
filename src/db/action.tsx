// lib/actions.ts
"use server";

import { db } from "@/db/adapter";
import { documents } from "@/db/schema/documents";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

export async function createDocument() {
  // 1. セッションからユーザーIDを取得（認証チェック）
  const session = await auth();

  if (!session?.user?.id) {
    redirect("/signIn");
  }

  // 2. データベースにレコードを挿入
  // IDはDB側で自動生成（uuid）される設定を想定
  const [newDoc] = await db.insert(documents).values({
    title: "無題のドキュメント",
    content: {
        "type": "doc",
        "content": [
            {
                "type": "paragraph"
            }
        ]
    }, // 自分のIDを紐付ける
    userId: session.user.id, // ここもユーザーIDを保存するカラムに変更
  }).returning(); // 挿入したレコードを返す

  // 3. 作成したドキュメントの編集ページへリダイレクト
  redirect(`/documents/${newDoc.id}`);
}