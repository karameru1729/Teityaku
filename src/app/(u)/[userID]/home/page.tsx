import RecentAccessButton from "@/../components/RecentAccessButton";
import auth from "@/auth";
import SliderBar from "@/../components/SliderBar";

export default async function Home() {
  const session = await auth(); 

  return(
    <div className="flex flex-col justify-start overflow-auto sideBar-scrollbar items-center sidebar-scrollbar bg-zinc-900">
      <h1 className="my-16 text-5xl text-center select-none">Teityakuへようこそ</h1>
      <div className="w-1/2 bg-zinc-900">
        <p className="text-xl py-2 select-none">最近のアクセス</p>
        <SliderBar/>
      </div>
       {session?.user ? (
        <>
          <p>{session.user.name} さんとしてログイン中</p>
        </>
      ) : (
        <>
          <p>ログインしていません</p>
        </>
      )}
    </div>
  );
}
