import "./globals.css";
import { SidebarProvider } from "../../providers/SidebarProvider"; 

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {/*サイドバープロバイダーでは用途が限定的すぎるので、修正する必要がある*/}
        <SidebarProvider>
          {children}
        </SidebarProvider>
      </body>
    </html>
  );
}
