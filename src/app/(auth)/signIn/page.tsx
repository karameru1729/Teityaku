import OAuthButton from "@/../components/OAuthButton";
import GoogleIcon  from "@/../public/icons/google.svg";
import Image from "next/image";

export default function page (){
  return(
    <div> 
        <header className="py-4 px-6 border-b border-gray-200 flex items-center"> 
            <Image src="/img/Teityaku_Logo.png" alt="Teityaku" width={150} height={75} className="ml-4" />
        </header>
        <main className="py-4 px-6 border-b border-gray-200 flex items-center"> 
            <div className="flex-grow flex flex-col items-center justify-center py-12 relative overflow-hidden">
                <h1 className=" font-bold mb-6 text-center text-gray-900">ログイン</h1>
                <div className="w-full max-w-[420px] bg-white border border-gray-20 rounded-lg shadow-sm relative z-10 mx-4">
                    <div className="flex justify-center gap-[34px] pt-8 pb-6 px-8 ">
                        <div className="flex flex-col items-center gap-2">
                        <OAuthButton providerName="Google" icon={ <GoogleIcon width={24} height={24} /> } />
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <button className="w-[52px] h-[52px] border border-gray-200 rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors">
                                <svg className="w-4 h-4 text-black" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>
                                </svg>
                            </button>
                            <span className="text-[11px] text-gray-700">X (Twitter)</span>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <button className="w-[52px] h-[52px] border border-gray-200 rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors">
                                <svg className="w-[20px] h-[20px] text-black mb-[2px]" viewBox="0 0 384 512" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
                                </svg>
                            </button>
                            <span className="text-[11px] text-gray-700">Apple</span>
                        </div>
                    </div>

                    <div className="border-t border-gray-200"></div>

                    <div className="px-8 pt-6 pb-8">
                        <div className="mb-5">
                            <label className="block text-[13px] font-bold text-gray-800 mb-2">メールアドレス または note ID</label>
                            <input type="text" placeholder="mail@example.com or note ID" className="w-full border border-gray-200 rounded-[4px] p-[10px] text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-gray-400 bg-white"/>
                        </div>
                        <div className="mb-6">
                            <label className="block text-[13px] font-bold text-gray-800 mb-2">パスワード</label>
                            <input type="password" className="w-full border border-gray-200 rounded-[4px] p-[10px] text-sm text-gray-800 focus:outline-none focus:border-gray-400 bg-white"/>
                        </div>
                        <div className="flex justify-center items-center text-[12px] text-gray-500 mb-6 space-x-1">
                            <a href="#" className="underline hover:text-gray-700 decoration-gray-400 underline-offset-2">パスワードを忘れた方</a>
                            <span className="text-gray-400 px-1">/</span>
                            <a href="#" className="underline hover:text-gray-700 decoration-gray-400 underline-offset-2">ログインでお困りの方</a>
                        </div>

                        <button className="w-full bg-[#D1D1D1] text-white font-bold py-3 rounded-[4px] text-sm transition-colors hover:bg-gray-400">
                            ログイン
                        </button>
                    </div>

                    <div className="border-t border-gray-200 p-5 text-center">
                        <a href="#" className="text-[13px] text-gray-500 underline hover:text-gray-700 decoration-gray-400 underline-offset-2">会員登録はこちら</a>
                    </div>
                </div>
            </div>
        </main>
    </div>
  );
}
