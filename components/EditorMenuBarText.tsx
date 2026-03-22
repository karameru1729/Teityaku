import EditorMenuBarTextButton from "./EditorMenuBarTextButton";
import homeIcon from "../public/icons/home.svg";
import { useState, useEffect } from "react";
import type {Editor} from '@tiptap/core'
import { useEditorState } from '@tiptap/react'
import { menuBarStateSelector } from './EditorMenuBarTextState'

export function EditorMenuBarText({editor, isOpen, resetSelectedButtonID}: {editor: Editor | null; isOpen: boolean; resetSelectedButtonID: boolean}){
    if (!editor) {
        return null; 
    }
    const editorState = useEditorState({
        editor,
        selector: menuBarStateSelector,
    })
    const [selectedButtonID, setSelectedButtonID] = useState<number | null>(null);
    const Buttons = [
        {id: 1, item: "テキスト", icon: homeIcon},
        {id: 2, item: "見出し１", icon: homeIcon},
        {id: 3, item: "見出し２", icon: homeIcon},
        {id: 4, item: "見出し３", icon: homeIcon},
        {id: 5, item: "見出し４", icon: homeIcon},
        {id: 6, item: "ページ", icon: homeIcon},
        {id: 7, item: "箇条書きリスト", icon: homeIcon},
        {id: 8, item: "番号付きリスト", icon: homeIcon},
        {id: 9, item: "ToDoリスト", icon: homeIcon},
        {id: 10, item: "トグルリスト", icon: homeIcon},
        {id: 11, item: "コード", icon: homeIcon},
        {id: 12, item: "引用", icon: homeIcon},
        {id: 13, item: "コールアウト", icon: homeIcon},
        {id: 14, item: "式ブロック", icon: homeIcon},
        {id: 15, item: "同期ブロック", icon: homeIcon},
    ];
    useEffect(() => {
        if (resetSelectedButtonID) {
            setSelectedButtonID(null);
        }
    }, [resetSelectedButtonID]);
    return(
        <div className={`float-height bg-zinc-800 rounded-md border border-[#e2dadad6] items-center w-40 h-50 flex flex-col ${isOpen ? 'block' : 'hidden'}`}>
            <div className="mt-2 overflow-auto sideBar-scrollbar">
                {Buttons.map((button, index) => (
                    <EditorMenuBarTextButton
                        key={index} 
                        Icon={button.icon}
                        Item={button.item}
                        onClick={() => editor.chain().focus().toggleBold().run()}
                        onMouseEnter={() => setSelectedButtonID(button.id)}
                        isHovered={selectedButtonID === button.id ? true : false}
                    />
                ))}
            </div>
        </div>
    )
}