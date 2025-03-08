import { useEffect, useRef } from "react";

const useScrollToTop = () => {
  const scrollTopBtnRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollTopBtnRef.current) {
        if (window.pageYOffset > 700) {
          scrollTopBtnRef.current.classList.add("show");
        } else {
          scrollTopBtnRef.current.classList.remove("show");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return { scrollTopBtnRef, scrollToTop };
};

export default useScrollToTop;
