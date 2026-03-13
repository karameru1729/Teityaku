'use client'
import homeIcon from "../public/icons/home.svg";
import sidebarIcon from "../public/icons/sidebar-fill.svg";
import libraryIcon from "../public/icons/book.svg";
import documentIcon from "../public/icons/document.svg";
import searchIcon from "../public/icons/search.svg";
import SidebarButton from "./SidebarButton";
import { useSidebar } from "../providers/SidebarProvider";

export default function Sidebar(){
    const { isOpen } = useSidebar();
    return(
        <div className={`bg-zinc-800 ${isOpen ? 'w-48' : 'w-0'} h-screen flex flex-col overflow-hidden transition-all duration-300`}>
            <div className="w-full flex flex-col h-full items-center">
                <div className="flex flex-col gap-1 mt-2 items-center"> 
                    <SidebarButton Icon={sidebarIcon} Item="サイドバー" />
                    <SidebarButton Icon={libraryIcon} Item="ライブラリ"/>
                    <SidebarButton Icon={documentIcon} Item="ドキュメント" />
                    <SidebarButton Icon={searchIcon} Item="検索" />
                    <SidebarButton Icon={homeIcon} Item="Home" />
                    <SidebarButton Icon={homeIcon} Item="Home" />
                    <SidebarButton Icon={homeIcon} Item="Home" />
                    <SidebarButton Icon={homeIcon} Item="Home" />
                </div>
                <div className="flex flex-col overflow-auto sideBar-scrollbar gap-1 items-center">
                    <details className="mx-auto">
                        <summary className="hover:bg-zinc-600 w-46 h-6 rounded-md text-sm text-[#e2dadad6] select-none">最近</summary>
                            <div className="flex flex-col overflow-auto sideBar-scrollbar gap-1">
                                <SidebarButton Icon={sidebarIcon} Item="サイドバー" />
                                <SidebarButton Icon={libraryIcon} Item="ライブラリ" />
                                <SidebarButton Icon={documentIcon} Item="ドキュメント" />
                                <SidebarButton Icon={searchIcon} Item="検索" />
                                <SidebarButton Icon={homeIcon} Item="Home" />
                                <SidebarButton Icon={homeIcon} Item="Home" />
                                <SidebarButton Icon={homeIcon} Item="Home" />
                                <SidebarButton Icon={homeIcon} Item="Home" />
                                <SidebarButton Icon={sidebarIcon} Item="サイドバー" />
                                <SidebarButton Icon={libraryIcon} Item="ライブラリ" />
                                <SidebarButton Icon={documentIcon} Item="ドキュメント" />
                                <SidebarButton Icon={searchIcon} Item="検索" />
                                <SidebarButton Icon={homeIcon} Item="Home" />
                                <SidebarButton Icon={homeIcon} Item="Home" />
                                <SidebarButton Icon={homeIcon} Item="Home" />
                                <SidebarButton Icon={homeIcon} Item="Home" />
                                <SidebarButton Icon={sidebarIcon} Item="サイドバー" />
                                <SidebarButton Icon={libraryIcon} Item="ライブラリ" />
                                <SidebarButton Icon={documentIcon} Item="ドキュメント" />
                                <SidebarButton Icon={searchIcon} Item="検索" />
                                <SidebarButton Icon={homeIcon} Item="Home" />
                                <SidebarButton Icon={homeIcon} Item="Home" />
                                <SidebarButton Icon={homeIcon} Item="Home" />
                                <SidebarButton Icon={homeIcon} Item="Home" />
                            </div>
                    </details>
                </div>
            </div>
        </div>
    )
}