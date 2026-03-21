'use client'

import React from 'react';
import { useState, useEffect, useRef } from 'react';
interface ButtonProps {
    Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    Item: string;
    onMouseEnter: () => void;
    isHoverd: boolean;
    FlyoutComponent: React.ReactNode;
}

export default function EditorMenuBarFlyoutButton({Icon, Item, onMouseEnter, isHoverd}:ButtonProps){
    return(
        <button 
            className={`rounded-md border ${isHoverd ? 'bg-zinc-600' : ''} border-transparent w-38 h-5 gap-1 flex items-center`}
            onMouseEnter={onMouseEnter}
        >
            <Icon width={15} height={15} fill="#e2dadad6"/>
            <span className="text-[10px] text-[#e2dadad6] select-none">{Item}</span>
        </button>
    )
}
