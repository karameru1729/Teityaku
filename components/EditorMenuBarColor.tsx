import EditorMenuBarButton from "./EditorMenuBarButton";
import homeIcon from "../public/icons/home.svg";
import { useState, useEffect } from "react";

export function EditorMenuBarColor({isOpen, resetSelectedButtonID}: {isOpen: boolean; resetSelectedButtonID: boolean}){
    const [selectedButtonID, setSelectedButtonID] = useState<number | null>(null);
    const Buttons = [
        {id: 1, item: "テキスト", icon: homeIcon},
        {id: 2, item: "段落", icon: homeIcon},
        {id: 3, item: "段落", icon: homeIcon},
    ];
    useEffect(() => {
        if (resetSelectedButtonID) {
            setSelectedButtonID(null);
        }
    }, [resetSelectedButtonID]);
    return(
        <div className={`float-height bg-zinc-800 rounded-md border border-[#e2dadad6] items-center w-40 h-50 flex flex-col ${isOpen ? 'block' : 'hidden'}`}>
            <div className="mt-2 overflow-auto sideBar-scrollbar">
                {Buttons.map((button,index) => (
                    <EditorMenuBarButton
                        key={index} 
                        Icon={button.icon}
                        Item={button.item}
                        onMouseEnter={() => setSelectedButtonID(button.id)}
                        isHovered={selectedButtonID === button.id ? true : false}
                    />
                ))}   
            </div>
        </div>
    )
}