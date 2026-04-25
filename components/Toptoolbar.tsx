"use client"
import { useSidebar } from "../providers/SidebarProvider";
import HomeIcon from "../public/icons/home.svg";
import AddDocument from "../public/icons/add_document.svg";
import { useSession } from "next-auth/react";
import { db } from "@/db/adapter";
import { documents } from "@/db/schema/documents";

export default function Toptoolbar(){
    const { toggleSidebar } = useSidebar();
    const { data: session } = useSession();

    return (
        <div className="flex flex-row m-2 justify-between items-center">
          <div className="flex flex-row gap-2">
            <button className="flex items-center justify-center border border-transparent rounded-md hover:bg-zinc-600" onClick={toggleSidebar}>
              <HomeIcon width={32} height={32} fill="#e2dadad6"/>
            </button>
             <button className="flex items-center justify-center border border-transparent rounded-md hover:bg-zinc-600" onClick={toggleSidebar}>
              <AddDocument width={32} height={32} fill="#e2dadad6"/>
            </button>
          </div>
            {/* サイドバーボタン */}
            {session?.user?.image && (
                <img src={session.user.image} alt="Profile" className="flex items-center justify-center w-8 h-8 rounded-full" />
            )}

        </div>
    );
}

