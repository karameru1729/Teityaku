import Toptoolbar from "../../../components/Toptoolbar";
import Sidebar from "../../../components/Sidebar";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
