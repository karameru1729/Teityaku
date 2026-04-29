"use client"
import { useRef, useState, useEffect } from "react";
import HomeIcon from "@/../public/icons/document.svg";
import { Mydocument } from "@/db/schema/documents";
import { useRouter } from "next/navigation";

export default function SliderBar({ mydocuments }: { mydocuments?: Mydocument[] }) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const observerTargetleft = useRef<HTMLDivElement>(null);
  const observerTargetright = useRef<HTMLDivElement>(null);
  const [ isHiddenleft, setIshiddenleft ] = useState<boolean>(false);
  const [ isHiddenright, setIshiddenright ] = useState<boolean>(false);
  const router = useRouter();
   
  useEffect(() => {
    const observerCallbackleft = (entries: IntersectionObserverEntry[]) => {
      setIshiddenleft(entries[0].isIntersecting);
    };

    const observerCallbackright = (entries: IntersectionObserverEntry[]) => {
      setIshiddenright(entries[0].isIntersecting);
    };

    const observerLeft = new IntersectionObserver(observerCallbackleft, {
      root: scrollContainerRef.current,
      rootMargin: '0px',
      threshold: 1.0,
    });

    const observerRight = new IntersectionObserver(observerCallbackright, {
      root: scrollContainerRef.current,
      rootMargin: '0px',
      threshold: 1.0,
    });

    if (observerTargetleft.current) {
      observerLeft.observe(observerTargetleft.current);
    }

    if (observerTargetright.current) {
      observerRight.observe(observerTargetright.current);
    }
    
    return () => {
      if (observerTargetleft.current) observerLeft.unobserve(observerTargetleft.current);
      if (observerTargetright.current) observerRight.unobserve(observerTargetright.current);
    }
  }, []);
  
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
      <div id="firstElement" className={`${ isHiddenleft ? 'hidden' : 'block' } absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-zinc-900 to-transparent z-10 pointer-events-none`}></div>
      <button
        onClick={scrollLeft}
        className={`${ isHiddenleft ? 'hidden' : 'block' } absolute left-2 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-zinc-800/80 text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-zinc-700`}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
      </button>

      {/* ▼ ここからまとめた部分 ▼ */}
      <div style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }} ref={scrollContainerRef} className="flex flex-row gap-3 overflow-x-auto scroll-smooth snap-x snap-mandatory px-4 hide-scrollbar">
        {Array.from({ length: mydocuments?.length || 0 }).map((_, index, arr) => {
          // 最初と最後だけrefを設定、それ以外はnull
          const currentRef = index === 0 ? observerTargetleft : index === arr.length - 1 ? observerTargetright : null;

          return (
            <div 
              key={index}
              onClick={() => {router.push(`/documents/${mydocuments?.[index]?.id}`)}} 
              ref={currentRef} 
              className="flex flex-col shrink-0 my-2 justify-start bg-zinc-800 border-transparent rounded-xl w-48 h-48 border"
            > 
              <HomeIcon width={36} height={36} fill="#e2dadad6" className="m-4"/> 
              <p className="text-xl mx-2 select-none">{mydocuments?.[index]?.title || "無題"}</p>
              <p className="text-md mt-10 ml-2 select-none">{mydocuments?.[index]?.createdAt?.toLocaleDateString() || "日付不明"}</p>
            </div>
          );
        })}
      </div>
      {/* ▲ ここまで ▲ */}

      <button
        onClick={scrollRight}
        className={`${isHiddenright ? 'hidden' : 'block' } absolute right-2 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-zinc-800/80 text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-zinc-700`}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
      </button>
      <div className={`${isHiddenright ? 'hidden' : 'block' } absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-zinc-900 to-transparent z-10 pointer-events-none`}></div>
    </div>
  );
}