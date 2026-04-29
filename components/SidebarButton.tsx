'use client'

import React from 'react';
interface SidebarButtonProps {
    // SVGコンポーネントを受け取るための厳密な型定義
    Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    Item: string;
    onClick?: () => void; 
}

export default function SidebarButton({ Icon, Item, onClick }:SidebarButtonProps) {
    if (!Icon) return null; 

    return(
        <div className="flex items-center justify-center"> 
            <button onClick={onClick} className="whitespace-nowrap flex gap-2 border border-transparent rounded-md hover:bg-zinc-600 p-[1px] w-92 h-12 items-center"  type="button">
                <Icon width={28} height={28} fill="#e2dadad6" />
                <span className="text-xl text-[#e2dadad6] select-none">{Item}</span>
            </button>
        </div>
    )
}
