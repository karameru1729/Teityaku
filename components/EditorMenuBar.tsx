"use client";
import homeIcon from "../public/icons/home.svg";
import EditorMenuBarFlyoutButton from './EditorMenuBarFlyoutButton'
import EditorMenuBarButton from './EditorMenuBarButton'
import { useState, useEffect, useRef } from 'react';

export default function EditorMenuBar(){
  const isOpen = true;
  const [isBlockTypeFlyoutOpen, setIsBlockTypeFlyoutOpen] = useState(false);
  const [isColorFlyoutOpen, setIsColorFlyoutOpen] = useState(false);

  return (
    <div className={`float-height bg-zinc-800 rounded-md border border-[#e2dadad6] items-center w-40 h-50 flex flex-col ${isOpen ? 'block' : 'hidden'}`}>
      <div className="mt-2">
        <EditorMenuBarFlyoutButton Icon={homeIcon} Item="ブロックタイプの変換" handleValueChange={() => setIsBlockTypeFlyoutOpen(!isBlockTypeFlyoutOpen)} />
        <EditorMenuBarFlyoutButton Icon={homeIcon} Item="カラー" handleValueChange={() => setIsColorFlyoutOpen(!isColorFlyoutOpen)} />
        <EditorMenuBarButton Icon={homeIcon} Item="削除" />
        <EditorMenuBarButton Icon={homeIcon} Item="ブロックタイプの変換" />
        <EditorMenuBarButton Icon={homeIcon} Item="ブロックタイプの変換" />
        <p>isBlock: {isBlockTypeFlyoutOpen.toString()}</p>
      </div>
    </div>
  )
}
