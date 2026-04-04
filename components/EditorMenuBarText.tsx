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
    const [selectedButtonID, setSelectedButtonID] = useState<number | null>(null);
    const Buttons = [
        {id: 1, item: "見出し１", icon: homeIcon, action: () => editor.chain().command(({tr}) => {tr.setMeta('skipTrailingNode', true); return true;}).toggleHeading({level:1}).run()},
        {id: 2, item: "見出し２", icon: homeIcon, action: () => editor.chain().command(({tr}) => {tr.setMeta('skipTrailingNode', true); return true;}).toggleHeading({level:2}).run()},
        {id: 3, item: "見出し３", icon: homeIcon, action: () => editor.chain().command(({tr}) => {tr.setMeta('skipTrailingNode', true); return true;}).toggleHeading({level:3}).run()},
        {id: 4, item: "見出し４", icon: homeIcon, action: () => editor.chain().command(({tr}) => {tr.setMeta('skipTrailingNode', true); return true;}).toggleHeading({level:4}).run()},
        {id: 5, item: "コード", icon: homeIcon, action: () => editor.chain().command(({tr}) => {tr.setMeta('skipTrailingNode', true); return true;}).toggleCodeBlock().run()},
        {id: 6, item: "リスト", icon: homeIcon, action: () => editor.chain().focus().toggleOrderedList().run()},
         ];
    useEffect(() => {
        if (resetSelectedButtonID) {
            setSelectedButtonID(null);
        }
    }, [resetSelectedButtonID]);
    return(
        <div className={`float-height bg-zinc-800 rounded-md border border-[#e2dadad6] items-center w-40 h-50 flex flex-col ${isOpen ? 'block' : 'hidden'}`}>
            <div className="mt-2 overflow-auto sideBar-scrollbar">
                {Buttons.map((button) => (
                    <EditorMenuBarTextButton
                        key={button.id}
                        Icon={button.icon}
                        Item={button.item}
                        onClick={() => button.action()}
                        onMouseEnter={() => setSelectedButtonID(button.id)}
                        isHovered={selectedButtonID === button.id ? true : false}
                    />
                ))}
            </div>
        </div>
    )
}
