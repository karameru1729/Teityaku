// app/documents/[id]/page.tsx
import Editor from '@/../components/Editor';
import { auth } from "@/lib/auth";
import { db } from "@/db/adapter";
import { documents } from "@/db/schema/documents";
import { eq } from "drizzle-orm";
import { redirect } from "next/navigation";

// 非同期コンポーネントにするため `async` をつけます
export default async function DocumentPage({params}: {params: Promise<{ id: string }>; }) 
{
  // awaitを使ってURLのパラメータ（id）を取得する
  const { id } = await params;
  const session = await auth();

  if (!session?.user?.id) {
    redirect("/signIn");
  }

  await new Promise((resolve) => setTimeout(resolve, 1000));
  
  const myDocument = await db.select().from(documents).where(eq(documents.id, session.user.id));


  return (
    <div className="p-8">
      <Editor/>
    </div>
  );
}
