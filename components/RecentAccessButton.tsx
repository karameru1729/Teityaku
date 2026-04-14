'use client'
import HomeIcon from "../public/icons/document.svg";
import React from 'react';

interface ButtonProps {
    Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    isHovered: boolean;
}

export default function RecentAccessButton(){
  return(
    <div className="flex flex-col my-2 justify-start bg-zinc-800 border-transparent rounded-xl w-48 h-48 border"> 
      <HomeIcon width={36} height={36} fill="#e2dadad6" className="m-4"/> 
      <p className="text-xl mx-2">ドキュメント</p>
      <p className="text-md mt-10 ml-2">1日前</p>
    </div>
  );
}
