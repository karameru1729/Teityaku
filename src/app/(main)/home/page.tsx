import RecentAccessButton from "@/../components/RecentAccessButton";

export default function Home() {
  return(
    <div className="flex flex-col flex-grow justify-start relative overflow-hidden">
      <div className="relative gap-4 flex flex-row items-center h-50 w-screen bg-zinc-900">
        <RecentAccessButton/>
      </div>
    </div>
  );
}
