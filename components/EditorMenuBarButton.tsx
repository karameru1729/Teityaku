'use client'

import React from 'react';
import { useRef, useEffect} from 'react';
interface ButtonProps {
    Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    Item: string;
    onMouseEnter: () => void;
    isHovered: boolean;
}

export default function EditorMenuBarButton({Icon, Item, onMouseEnter, isHovered}:ButtonProps){
    return(
        <button 
            className={`rounded-md border ${isHovered ? 'bg-zinc-600' : ''} border-transparent w-38 h-5 gap-1 flex items-center`}
            onMouseEnter={onMouseEnter}
        >
            <Icon width={15} height={15} fill="#e2dadad6"/>
            <span className="text-[10px] text-[#e2dadad6] select-none">{Item}</span>
        </button>
    )
}
