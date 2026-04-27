'use client'

import React from 'react';
import { useRef, useEffect} from 'react';
interface ButtonProps {
    Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    Item: string;
    onMouseEnter: () => void;
    onClick: () => void;
    isHovered: boolean;
}

export default function EditorMenuBarTextButton({Icon, Item, onClick, onMouseEnter, isHovered}:ButtonProps){
    return(
        <button 
            className={`rounded-md border ${isHovered ? 'bg-zinc-600' : ''} border-transparent w-75 h-12 gap-2 flex items-center`}
            onClick={onClick}
            onMouseEnter={onMouseEnter}
        >
            <Icon width={25} height={25} fill="#e2dadad6"/>
            <span className="text-xl text-[#e2dadad6] select-none">{Item}</span>
        </button>
    )
}
