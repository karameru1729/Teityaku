// app/documents/[id]/page.tsx
import Editor from '../../../../../components/editor/Editor';
import { auth } from "@/lib/auth";
import { db } from "@/db/adapter";
import { eq, and } from "drizzle-orm";
import { redirect } from "next/navigation";
import { documents } from "@/db/schema/documents";

// 非同期コンポーネントにするため `async` をつけます
export default async function DocumentPage({params}: {params: Promise<{ documentId: string }>; }) 
{
  // awaitを使ってURLのパラメータ（id）を取得する
  
  const session = await auth();
  const { documentId } = await params;

  if (!session?.user?.id) {
    redirect("/signIn");
  }

  //　受け取ったdocumetnIdとユーザーIDを元に、ドキュメントをデータベースから取得する
  const [myDocument] = await db.select()
                               .from(documents)
                               .where(
                                and(
                                  eq(documents.userId, session.user.id), 
                                  eq(documents.id, documentId)
                                )
                              ).limit(1);

  return (
    <div className="p-8">
      <Editor myDocument={myDocument} />
    </div>
  );
}
