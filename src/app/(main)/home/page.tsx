import RecentAccessButton from "@/../components/RecentAccessButton";
import SliderBar from "@/../components/SliderBar";

export default function Home() {
  return(
    <div className="flex flex-col justify-start overflow-auto sideBar-scrollbar items-center sidebar-scrollbar bg-zinc-900">
      <h1 className="my-16 text-5xl text-center select-none">Teityakuへようこそ</h1>
      <div className="w-1/2 bg-zinc-900">
        <p className="text-xl py-2 select-none">最近のアクセス</p>
        <SliderBar/>
      </div>
      <div className="w-1/2 bg-zinc-900">
        <p className="text-xl py-2 select-none">最近のアクセス</p>
        <SliderBar/>
      </div>
      <div className="w-1/2 bg-zinc-900">
        <p className="text-xl py-2 select-none">最近のアクセス</p>
        <SliderBar/>
      </div>
    </div>
  );
}
