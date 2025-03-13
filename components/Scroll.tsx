"use client";

import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`scrolltotop fixed right-5 bottom-5 xl:right-10 
        ${isVisible ? "opacity-100 translate-y-0 visible" : "opacity-0 translate-y-5 invisible"} 
        backdrop-blur transition-all ease-out duration-[120ms] cursor-pointer inline-block 
        w-[50px] h-[50px] rounded-full bg-white/15 text-white z-[1] overflow-hidden 
        flex items-center justify-center before:content-[''] before:absolute before:-z-[1] 
        before:left-0 before:top-0 before:w-full before:h-full before:bg-themeGradient 
        before:opacity-0 hover:before:opacity-20 before:transition-all before:ease-linear before:duration-100`}
      onClick={scrollToTop}
    >
      <ChevronUp className="w-6 h-6 text-white transition-all ease-out duration-200" />
    </div>
  );
};

export default ScrollToTop;
