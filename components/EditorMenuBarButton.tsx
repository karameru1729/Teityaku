'use client'

import React from 'react';
import { useState } from 'react';
interface SvgComponent {
    // SVGコンポーネントを受け取るための厳密な型定義
    Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    Item: string;
}

export default function EditorMenuBarButton({Icon, Item}:SvgComponent){
    const [isHoverd, setIsHoverd] = useState(false);
    return(
        <button 
            className="rounded-md border hover:bg-zinc-600 border-transparent w-38 h-5 gap-1 flex items-center"
            onMouseEnter={() => setIsHoverd(true)}
            onMouseLeave={() => setIsHoverd(false)}
        >
            <Icon width={15} height={15} fill="#e2dadad6"/>
            <span className="text-[10px] text-[#e2dadad6] select-none">{Item}</span>
        </button>
    )
}