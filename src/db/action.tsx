// lib/actions.ts
"use server";

import { db } from "@/db/adapter";
import { documents } from "@/db/schema/documents";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { integer } from "drizzle-orm/sqlite-core";

export async function createDocument() {
  // 1. セッションからユーザーIDを取得（認証チェック）
  const session = await auth();

  let newDocId: string | null = null; // 新規ドキュメントのIDを格納する変数
  if (!session?.user?.id) {
    redirect("/signIn");
  }

  // 2. データベースにレコードを挿入
  // IDはDB側で自動生成（uuid）される設定を想定
  try {
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
    
    newDocId = newDoc.id; // 挿入されたドキュメントのIDを取得
  } 
  catch (error) {
    console.error("ドキュメントの作成に失敗:", error);
    throw new Error("ドキュメントの作成に失敗");
  }
  redirect(`/documents/${newDocId}`);
}