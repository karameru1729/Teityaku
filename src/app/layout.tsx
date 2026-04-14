import "./globals.css";
import { SidebarProvider } from "../../providers/SidebarProvider"; 

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="bg-zinc-900 text-zinc-200 antialiased">
        {/*サイドバープロバイダーでは用途が限定的すぎるので、修正する必要がある*/}
        <SidebarProvider>
          {children}
        </SidebarProvider>
      </body>
    </html>
  );
}
