import Toptoolbar from "@/../components/Toptoolbar";
import Sidebar from "@/../components/Sidebar";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function U_Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

//個人ページ保護の処理、これで[userID]以下のページは全て保護される

  //sessionの取得
  const session = await auth();
  //sessionが無い場合はサインインページへリダイレクト
  if (!session) {
    redirect("/signIn");
  }

  return (
    <div className="flex flex-col h-screen w-full overflow-hidden bg-zinc-900">
      <header className="w-full relative bg-zinc-800">
        <Toptoolbar/>
      </header>  
      <main className="flex flex-1 flex-row">
         {/*サイドバー*/}
        <div>
          <Sidebar/>
        </div>
        {/*テキストエディタ画面*/}
        <div className="flex-1 bg-zinc-900 overflow-y-auto">
          {children}
        </div>
      </main>
    </div>
  );
} 
