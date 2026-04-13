"use client"
import { useSidebar } from "../providers/SidebarProvider";

export default function Toptoolbar(){
    const { toggleSidebar, openSidebar, closeSidebar} = useSidebar();

    return (
        <div className="relative bg-zinc-800 h-10 w-full top-0 left-0 flex justify-start">
          <svg className="hidden">
            <symbol id="icon-sidebar" viewBox="0 0 256 256">
              <path fill="#e2dadad6" d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16ZM64 152H48a8 8 0 0 1 0-16h16a8 8 0 0 1 0 16Zm0-32H48a8 8 0 0 1 0-16h16a8 8 0 0 1 0 16Zm0-32H48a8 8 0 0 1 0-16h16a8 8 0 0 1 0 16Zm152 112H88V56h128v144Z"/>
            </symbol>
            <symbol id="icon-home" viewBox="0 0 24 24">
              <g fill="none" stroke="#e2dadad6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m3 9l9-7l9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M9 22V12h6v10"/></g>
            </symbol>
          </svg>
            {/* 検索バー */}
            {/*<input className="w-1/3 rounded-xl bg-white shadow-xl border-sky-500 border-1 placeholder-gray-500" placeholder="　検索"/>*/}
          {/*ホームボタン */}
          <div className="gap-1 flex flex-row justify-center items-center">
            <button className="flex items-center justify-center border border-transparent rounded-md hover:bg-zinc-600 m-[1px] h-8 w-8" onClick={toggleSidebar}>
              <svg className="w-5 h-5">
                <use href="#icon-home"/>
              </svg>
            </button>
            {/* サイドバーボタン */}
            <button className="flex items-center justify-center border border-transparent rounded-md hover:bg-zinc-600 m-[1px] h-8 w-8" onClick={toggleSidebar}>
              <svg className="w-5.5 h-5.5">
                <use href="#icon-sidebar"/>
              </svg>
            </button>
          </div>
        </div>
    );
}

