"use client";
import homeIcon from "../public/icons/home.svg";
import EditorMenuBarButton from './EditorMenuBarButton'
import { useState, useEffect, useRef } from 'react';
import {EditorMenuBarText} from './EditorMenuBarText';
import {EditorMenuBarColor} from './EditorMenuBarColor';
import transformIcon from "../public/icons/transform.svg";
import type {Editor} from '@tiptap/core'

export default function EditorMenuBar({isOpen, editor}:{isOpen: boolean; editor: Editor}){
  {/*EditorMenuBarが開かれているかどうか*/}
  const [selectedButtonID, setSelectedButtonID] = useState<number | null>(null);
  const ref = useRef<HTMLDivElement | null>(null);
  {/*EditorMenuBar外でクリックされた際に、selectedButtonIDをnullにする*/}
 
  return (
    <div className="flex flex-row">
      <div className={`float-height bg-zinc-800 rounded-md border border-[#e2dadad6] items-center w-40 h-50 flex flex-col ${isOpen ? 'block' : 'hidden'}`} ref={ref}>
        <div className="mt-2">
          <EditorMenuBarButton
            key={1} 
            Icon={transformIcon} 
            Item="ブロックタイプの変換" 
            onMouseEnter={() => setSelectedButtonID(1)} 
            isHovered={selectedButtonID === 1 ? true : false} 
          />
          <EditorMenuBarButton
            key={2} 
            Icon={homeIcon} 
            Item="カラー" 
            onMouseEnter={() => setSelectedButtonID(2)} 
            isHovered={selectedButtonID === 2 ? true : false} 
            />
          <EditorMenuBarButton
            key={3} 
            Icon={homeIcon} 
            Item="複製" 
            onMouseEnter={() => setSelectedButtonID(3)} 
            isHovered={selectedButtonID === 3 ? true : false} />
          <EditorMenuBarButton
            key={4} 
            Icon={homeIcon} 
            Item="削除" 
            onMouseEnter={() => setSelectedButtonID(4)} 
            isHovered={selectedButtonID === 4 ? true : false} />
        </div>
      </div>
      <EditorMenuBarText editor={editor} isOpen={selectedButtonID === 1 && isOpen ? true : false} resetSelectedButtonID={selectedButtonID !== 1 ? true : false} />
      <EditorMenuBarColor editor={editor} isOpen={selectedButtonID === 2 && isOpen ? true : false} resetSelectedButtonID={selectedButtonID !== 2 ? true : false} />
    </div>
     
  )
}

