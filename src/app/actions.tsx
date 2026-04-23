'use server'

import { db } from "@/db/db";
import { documents } from '@/db/schema/documents';
import { eq } from 'drizzle-orm';
import { JSONContent } from '@tiptap/react';

// データベースを更新するサーバーアクション
export async function updateDocument(id: string, content: JSONContent) {
  try {
    await db.update(documents)
      .set({ content })
      .where(eq(documents.id, id));
  } catch (error) {
    console.error("Failed to update document:", error);
  }
}
