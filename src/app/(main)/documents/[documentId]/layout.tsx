import PositionBar from "@/../components/PositionBar"

export default function DocumentLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <PositionBar/>
      <div className="flex flex-col">
        {children}
      </div>
    </>
  );
}
