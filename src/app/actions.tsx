'use server'

import { db } from "@/db/adapter";
import { documents } from '@/db/schema/documents';
import { eq } from 'drizzle-orm';
import { JSONContent } from '@tiptap/react';
import {revalidatePath} from "next/cache";
// データベースを更新するサーバーアクション
export async function updateDocument(id: string, content: JSONContent, title: string) {
  try {
    await db.update(documents)
      .set({ content, title })
      .where(eq(documents.id, id));
    revalidatePath(`/documents/${id}`);

  } catch (error) {
    console.error("Failed to update document:", error);
  }
}
