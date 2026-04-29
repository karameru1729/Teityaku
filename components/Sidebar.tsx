'use client'
import homeIcon from "../public/icons/home.svg";
import sidebarIcon from "../public/icons/sidebar-fill.svg";
import libraryIcon from "../public/icons/book.svg";
import documentIcon from "../public/icons/document.svg";
import searchIcon from "../public/icons/search.svg";
import SidebarButton from "./SidebarButton";
import { useSidebar } from "../providers/SidebarProvider";
import { useRouter } from "next/navigation";

export default function Sidebar(){
    const { isOpen } = useSidebar();
    const router = useRouter();

    return(
        <div className={`bg-zinc-800 ${isOpen ? 'w-96' : 'w-0'} h-screen flex flex-col overflow-hidden transition-all duration-300`}>
            <div className="w-full flex flex-col h-full items-center">
                <div className="flex flex-col gap-1 mb-1 items-center"> 
                    <SidebarButton Icon={homeIcon} Item="ホーム" onClick={() => {router.push("/home")}} />
                    <SidebarButton Icon={libraryIcon} Item="ライブラリ" onClick={() => {}} />
                    <SidebarButton Icon={documentIcon} Item="ドキュメント" onClick={() => {}} />
                    <SidebarButton Icon={searchIcon} Item="検索" onClick={() => {}} />
                    <SidebarButton Icon={homeIcon} Item="Home" onClick={() => {}} />
                    <SidebarButton Icon={homeIcon} Item="Home" onClick={() => {}} />
                    <SidebarButton Icon={homeIcon} Item="Home" onClick={() => {}} />
                    <SidebarButton Icon={homeIcon} Item="Home" onClick={() => {}} />
                </div>
                <div className="flex flex-col overflow-auto sideBar-scrollbar gap-1 items-center">
                    <details className="mx-auto">
                        <summary className="flex items-center hover:bg-zinc-600 w-92 h-12 rounded-md text-xl text-[#e2dadad6] select-none">最近</summary>
                            <div className="flex flex-col overflow-auto sideBar-scrollbar gap-1">
                                <SidebarButton Icon={sidebarIcon} Item="サイドバー" onClick={() => {}} />
                                <SidebarButton Icon={libraryIcon} Item="ライブラリ" onClick={() => {}} />
                                <SidebarButton Icon={documentIcon} Item="ドキュメント" onClick={() => {}} />
                                <SidebarButton Icon={searchIcon} Item="検索" onClick={() => {}} />
                                <SidebarButton Icon={homeIcon} Item="Home" onClick={() => {}} />
                                <SidebarButton Icon={homeIcon} Item="Home" onClick={() => {}} />
                                <SidebarButton Icon={homeIcon} Item="Home" onClick={() => {}} />
                                <SidebarButton Icon={homeIcon} Item="Home" onClick={() => {}} />
                                <SidebarButton Icon={sidebarIcon} Item="サイドバー" onClick={() => {}} />
                                <SidebarButton Icon={libraryIcon} Item="ライブラリ" onClick={() => {}} />
                                <SidebarButton Icon={documentIcon} Item="ドキュメント" onClick={() => {}} />
                                <SidebarButton Icon={searchIcon} Item="検索" onClick={() => {}} />
                                <SidebarButton Icon={homeIcon} Item="Home" onClick={() => {}} />
                                <SidebarButton Icon={homeIcon} Item="Home" onClick={() => {}} />
                                <SidebarButton Icon={homeIcon} Item="Home" onClick={() => {}} />
                                <SidebarButton Icon={homeIcon} Item="Home" onClick={() => {}} />
                                <SidebarButton Icon={sidebarIcon} Item="サイドバー" onClick={() => {}} />
                                <SidebarButton Icon={libraryIcon} Item="ライブラリ" onClick={() => {}} />
                                <SidebarButton Icon={documentIcon} Item="ドキュメント" onClick={() => {}} />
                                <SidebarButton Icon={searchIcon} Item="検索" onClick={() => {}} />
                                <SidebarButton Icon={homeIcon} Item="Home" onClick={() => {}} />
                                <SidebarButton Icon={homeIcon} Item="Home" onClick={() => {}} />
                                <SidebarButton Icon={homeIcon} Item="Home" onClick={() => {}} />
                                <SidebarButton Icon={homeIcon} Item="Home" />
                            </div>
                    </details>
                </div>
            </div>
        </div>
    )
}
