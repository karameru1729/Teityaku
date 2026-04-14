"use client"
import { useSidebar } from "../providers/SidebarProvider";
import HomeIcon from "../public/icons/home.svg";

export default function Toptoolbar(){
    const { toggleSidebar, openSidebar, closeSidebar} = useSidebar();

    return (
        <div className="flex flex-row">
            <button className="flex m-2 items-center justify-center border border-transparent rounded-md hover:bg-zinc-600" onClick={toggleSidebar}>
              <HomeIcon width={32} height={32} fill="#e2dadad6"/>
            </button>
            {/* サイドバーボタン */}
            <button className="flex m-2 items-center justify-center border border-transparent rounded-md hover:bg-zinc-600" onClick={toggleSidebar}>
              <HomeIcon width={32} height={32} fill="#e2dadad6"/>
            </button>
        </div>
    );
}

