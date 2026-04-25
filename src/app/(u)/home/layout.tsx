export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="bg-zinc-900 h-screen flex flex-col">
      {children}        
    </section>
  );
}
