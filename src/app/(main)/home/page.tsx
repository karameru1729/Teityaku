import RecentAccessButton from "@/../components/RecentAccessButton";
import SliderBar from "@/../components/SliderBar";

export default function Home() {
  return(
    <div className="flex flex-col flex-grow justify-start items-center relative overflow-hidden bg-zinc-900">
      <h1 className="my-16 text-5xl text-center">Teityakuへようこそ</h1>

      <div className="w-1/2 bg-zinc-900">
        <p className="text-xl py-2">最近のアクセス</p>
        <SliderBar/>
      </div>

    </div>
  );
}
