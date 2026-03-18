'use client'

import React from 'react';
import { useState, useEffect, useRef } from 'react';
interface ButtonProps {
    // SVGコンポーネントを受け取るための厳密な型定義
    Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    Item: string;
    handleValueChange: () => void;
}

export default function EditorMenuBarFlyoutButton({Icon, Item, handleValueChange}:ButtonProps){
    const [isHoverd, setIsHoverd] = useState(false);
    const ref = useRef<HTMLButtonElement | null>(null);
    const onChange =() => {
        handleValueChange();
    }

    {/*必要に応じて下の関数を使う*/}
    useOutsideClickDetector(ref, () => {handleValueChange();});

    return(
        <button 
            className="rounded-md border hover:bg-zinc-600 border-transparent w-38 h-5 gap-1 flex items-center"
            onMouseEnter={onChange}
            ref={ref}
        >
            <Icon width={15} height={15} fill="#e2dadad6"/>
            <span className="text-[10px] text-[#e2dadad6] select-none">{Item}</span>
        </button>
    )
}

export function useOutsideClickDetector(ref: React.RefObject<HTMLButtonElement | null>, handler: () => void) {
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