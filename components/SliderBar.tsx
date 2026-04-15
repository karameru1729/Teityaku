"use client"
import { useRef, useState, useEffect } from "react";
import HomeIcon from "../public/icons/document.svg";

export default function SliderBar() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const observerTargetleft = useRef<HTMLDivElement>(null);
  const observerTargetright = useRef<HTMLDivElement>(null);
  const [ isHiddenleft, setIshiddenleft ] = useState<boolean>(false);
  const [ isHiddenright, setIshiddenright ] = useState<boolean>(false);
   
  useEffect(() => {
    const observerCallbackleft = (entries: IntersectionObserverEntry[]) => {
      if(entries[0].isIntersecting) {
        setIshiddenleft(true);
      }else{
        setIshiddenleft(false);
      }
    };

    const observerCallbackright = (entries: IntersectionObserverEntry[]) => {
      if(entries[0].isIntersecting) {
        setIshiddenright(true);
      }else{
        setIshiddenright(false);
      }
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
      if (observerTargetleft.current) {
        observerLeft.unobserve(observerTargetleft.current);
      }
      if (observerTargetright.current) {
        observerRight.unobserve(observerTargetright.current);
      }
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
    <div className="relative w-full py-8 group ">
    <div id="firstElement" className={`${ isHiddenleft ? 'hidden' : 'block' } absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-zinc-900 to-transparent z-10 pointer-events-none`}></div>
      <button
        onClick={scrollLeft}
        className={`${ isHiddenleft ? 'hidden' : 'block' } absolute left-2 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-zinc-800/80 text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-zinc-700`}
      >
        {/* アイコンはお使いのもの（Lucideなど）に差し替えてください */}
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
      </button>
      <div style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }} ref={scrollContainerRef} className="flex flex-row gap-3 overflow-x-auto scroll-smooth snap-x snap-mandatory px-4 hide-scrollbar">
        <div ref={observerTargetleft} className="flex flex-col shrink-0 my-2 justify-start bg-zinc-800 border-transparent rounded-xl w-48 h-48 border"> 
          <HomeIcon width={36} height={36} fill="#e2dadad6" className="m-4"/> 
          <p className="text-xl mx-2 select-none">ドキュメント</p>
          <p className="text-md mt-10 ml-2 select-none">1日前</p>
        </div>
        <div className="flex flex-col shrink-0 my-2 justify-start bg-zinc-800 border-transparent rounded-xl w-48 h-48 border"> 
          <HomeIcon width={36} height={36} fill="#e2dadad6" className="m-4"/> 
          <p className="text-xl mx-2 select-none">ドキュメント</p>
          <p className="text-md mt-10 ml-2 select-none">1日前</p>
        </div>
        <div className="flex flex-col shrink-0 my-2 justify-start bg-zinc-800 border-transparent rounded-xl w-48 h-48 border"> 
          <HomeIcon width={36} height={36} fill="#e2dadad6" className="m-4"/> 
          <p className="text-xl mx-2 select-none">ドキュメント</p>
          <p className="text-md mt-10 ml-2 select-none">1日前</p>
        </div>
        <div className="flex flex-col shrink-0 my-2 justify-start bg-zinc-800 border-transparent rounded-xl w-48 h-48 border"> 
          <HomeIcon width={36} height={36} fill="#e2dadad6" className="m-4"/> 
          <p className="text-xl mx-2 select-none">ドキュメント</p>
          <p className="text-md mt-10 ml-2 select-none">1日前</p>
        </div>
        <div className="flex flex-col shrink-0 my-2 justify-start bg-zinc-800 border-transparent rounded-xl w-48 h-48 border"> 
          <HomeIcon width={36} height={36} fill="#e2dadad6" className="m-4"/> 
          <p className="text-xl mx-2 select-none">ドキュメント</p>
          <p className="text-md mt-10 ml-2 select-none">1日前</p>
        </div>
        <div className="flex flex-col shrink-0 my-2 justify-start bg-zinc-800 border-transparent rounded-xl w-48 h-48 border"> 
          <HomeIcon width={36} height={36} fill="#e2dadad6" className="m-4"/> 
          <p className="text-xl mx-2 select-none">ドキュメント</p>
          <p className="text-md mt-10 ml-2 select-none">1日前</p>
        </div>
        <div className="flex flex-col shrink-0 my-2 justify-start bg-zinc-800 border-transparent rounded-xl w-48 h-48 border"> 
          <HomeIcon width={36} height={36} fill="#e2dadad6" className="m-4"/> 
          <p className="text-xl mx-2 select-none">ドキュメント</p>
          <p className="text-md mt-10 ml-2 select-none">1日前</p>
        </div>
        <div className="flex flex-col shrink-0 my-2 justify-start bg-zinc-800 border-transparent rounded-xl w-48 h-48 border"> 
          <HomeIcon width={36} height={36} fill="#e2dadad6" className="m-4"/> 
          <p className="text-xl mx-2 select-none">ドキュメント</p>
          <p className="text-md mt-10 ml-2 select-none">1日前</p>
        </div>
        <div ref={observerTargetright} className="flex flex-col shrink-0 my-2 justify-start bg-zinc-800 border-transparent rounded-xl w-48 h-48 border"> 
          <HomeIcon width={36} height={36} fill="#e2dadad6" className="m-4"/> 
          <p className="text-xl mx-2 select-none">ドキュメント</p>
          <p className="text-md mt-10 ml-2 select-none">1日前</p>
        </div>
      </div>
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


