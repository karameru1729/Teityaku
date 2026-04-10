export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    // htmlとbodyを取り除き、divなどで囲む
    <div className="bg-white min-h-screen flex flex-col text-gray-900">
      <header className="py-4 px-6 border-b border-gray-200 flex items-center"> 
        {children}        
      </header>
    </div>
  );
}
