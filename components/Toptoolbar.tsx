"use client"
import { useSidebar } from "../providers/SidebarProvider";
import SidebarIcon from "../public/icons/sidebar-fill.svg";
import AddDocument from "../public/icons/add_document.svg";
import { useSession } from "next-auth/react";
import { createDocument } from "@/db/action";

export default function Toptoolbar(){
    const { toggleSidebar } = useSidebar();
    const { data: session } = useSession();

    return (
        <div className="flex flex-row m-2 justify-between items-center">
          <div className="flex flex-row gap-2">
            <button className="flex items-center justify-center border border-transparent rounded-md hover:bg-zinc-600" onClick={toggleSidebar}>
              <SidebarIcon width={32} height={32} fill="#e2dadad6"/>
            </button>
             <button className="flex items-center justify-center border border-transparent rounded-md hover:bg-zinc-600" onClick={createDocument}>
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

