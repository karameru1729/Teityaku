'use client'

import React from 'react';
interface ButtonProps {
    Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    isHovered: boolean;
}

export default function RecentAccessButton(){
  return(
    <div className="gap-3 flex flex-col items-start justify-center bg-zinc-800 border-transparent rounded-md w-35 h-35 border"> 
      <div className="bg-red-300 flex w-8 h-8 items-center justify-center">
        aiu
      </div>
      <div className="bg-blue-300 w-10 h-5">
        Itekm
      </div>
      <div className="bg-green-300 w-20 h-5">
        TimeStamp
      </div>
    </div>
  );
}
