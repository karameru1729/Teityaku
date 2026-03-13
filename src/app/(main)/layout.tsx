import "../globals.css";
import Toptoolbar from "../../../components/Toptoolbar";
import Sidebar from "../../../components/Sidebar";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col">
      <header>
         {/*ツールバー*/}
        <Toptoolbar/>
      </header>  
      <main className="flex flex-row">
         {/*サイドバー*/}
        <div>
          <Sidebar/>
        </div>
        {/*テキストエディタ画面*/}
        <div className="flex-1 bg-zinc-900">
          {children}
        </div>
      </main>
    </div>
  );
}
