"use client"
import { useRef } from "react";
import RecentAccessButton from "./RecentAccessButton.tsx"
export default function SliderBar() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };
  
  return (
    <div className="flex flex-row gap-3">
      <RecentAccessButton/>
      <RecentAccessButton/>
    </div>
  );
}


