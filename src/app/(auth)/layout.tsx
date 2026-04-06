export default function Authlyout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>){
  return(
    <html lang="ja">
      <body className="bg-white min-h-screen flex flex-col text-gray-900">
        <header className="py-4 px-6 border-b border-gray-200 flex items-center"> 
          {children}        
        </header>
      </body>
    </html>
  );
} 
