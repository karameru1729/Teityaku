"use client"
import { useRef } from "react";
import RecentAccessButton from "./RecentAccessButton.tsx"

export default function SliderBar() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -600, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 600, behavior: "smooth" });
    }
  };
  
  return (
    <div className="relative w-full py-8 group">
    <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-zinc-900 to-transparent z-10 pointer-events-none"></div>
      <button
        onClick={scrollLeft}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-zinc-800/80 text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-zinc-700"
      >
        {/* アイコンはお使いのもの（Lucideなど）に差し替えてください */}
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
      </button>
      <div style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }} ref={scrollContainerRef} className="flex flex-row gap-3 overflow-x-auto scroll-smooth snap-x snap-mandatory px-4 hide-scrollbar">
        <RecentAccessButton/>
        <RecentAccessButton/>
        <RecentAccessButton/>
        <RecentAccessButton/>
        <RecentAccessButton/>
        <RecentAccessButton/>
        <RecentAccessButton/>
        <RecentAccessButton/>
        <RecentAccessButton/>
        <RecentAccessButton/>
      </div>
      <button
        onClick={scrollRight}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-zinc-800/80 text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-zinc-700"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
      </button>
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-zinc-900 to-transparent z-10 pointer-events-none"></div>
    </div>
  );
}


