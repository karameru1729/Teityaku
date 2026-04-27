import SliderBar from "@/../components/home/SliderBar";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation"
import { db } from "@/db/adapter";
import { documents } from "@/db/schema/documents";
import { eq, desc } from "drizzle-orm";

export default async function Home() {
  const session = await auth();

  if (!session?.user) {
    redirect("/signIn");
  }

  const recentMyDocuments = await db
          .select()
          .from(documents)
          .where(eq(documents.userId, session.user.id))
          .orderBy(desc(documents.createdAt)) // createdAt が新しい順（降順）に並べ替え
          .limit(10); // 上位10個のみ取得

  return(
    <div className="flex flex-col justify-start overflow-auto sideBar-scrollbar items-center sidebar-scrollbar bg-zinc-900">
      <h1 className="my-16 text-5xl text-center select-none">Teityakuへようこそ</h1>
      <div className="w-1/2 bg-zinc-900">
        <p className="text-xl py-2 select-none">最近のアクセス</p>
        <SliderBar/>
      </div>
      
       {session?.user?.name ? (
        <>
          <p>{session.user.id} さんとしてログイン中</p>
        </>
      ) : (
        <>
          <p>ログインしていません</p>
        </>
      )}
      
    </div>
  );
}
