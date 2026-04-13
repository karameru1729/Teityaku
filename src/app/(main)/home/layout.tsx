export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    // htmlとbodyを取り除き、divなどで囲む
    <section className="bg-zinc-900 min-h-screen flex flex-col">
      {children}        
    </section>
  );
}
