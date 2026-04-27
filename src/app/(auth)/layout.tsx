export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    // htmlとbodyを取り除き、divなどで囲む
    <div className="bg-white min-h-screen flex flex-col text-gray-900">
        {children}        
    </div>
  );
}
