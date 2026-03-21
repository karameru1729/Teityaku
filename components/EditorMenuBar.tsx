"use client";
import homeIcon from "../public/icons/home.svg";
import EditorMenuBarFlyoutButton from './EditorMenuBarFlyoutButton'
import EditorMenuBarButton from './EditorMenuBarButton'
import { useState, useEffect, useRef } from 'react';
import {EditorMenuBarText} from './EditorMenuBarText';
import {EditorMenuBarColor} from './EditorMenuBarColor';

export default function EditorMenuBar(){
  {/*EditorMenuBarが開かれているかどうか*/}
  const isOpen = true;
  const [selectedButtonID, setSelectedButtonID] = useState<number | null>(null);
  const ref = useRef<HTMLDivElement | null>(null);
  {/*EditorMenuBar外でクリックされた際に、selectedButtonIDをnullにする*/}
  useOutsideClickDetector(ref, () => {setSelectedButtonID(null);});
  return (
    <div className={`float-height bg-zinc-800 rounded-md border border-[#e2dadad6] items-center w-40 h-50 flex flex-col ${isOpen ? 'block' : 'hidden'}`} ref={ref}>
      <div className="mt-2">
        <EditorMenuBarFlyoutButton 
          Icon={homeIcon} 
          Item="ブロックタイプの変換" 
          onMouseEnter={() => setSelectedButtonID(1)} 
          isHoverd={selectedButtonID === 1 ? true : false} 
          FlyoutComponent={<EditorMenuBarText />} />
        <EditorMenuBarFlyoutButton 
          Icon={homeIcon} 
          Item="カラー" 
          onMouseEnter={() => setSelectedButtonID(2)} 
          isHoverd={selectedButtonID === 2 ? true : false} 
          FlyoutComponent={<EditorMenuBarColor />} />
        <EditorMenuBarButton 
          Icon={homeIcon} 
          Item="複製" 
          onMouseEnter={() => setSelectedButtonID(3)} 
          isHoverd={selectedButtonID === 3 ? true : false} />
        <EditorMenuBarButton 
          Icon={homeIcon} 
          Item="削除" 
          onMouseEnter={() => setSelectedButtonID(4)} 
          isHoverd={selectedButtonID === 4 ? true : false} />
      </div>
    </div>
  )
}

export function useOutsideClickDetector(ref: React.RefObject<HTMLDivElement | null>, handler: () => void) {
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                handler();
            }
        }
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    },[ref]);
}
