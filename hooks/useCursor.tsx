import { useEffect, useRef } from "react";

const useCursor = () => {
  const cursorRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const moveCursor = (e: MouseEvent) => {
      cursor.style.left = `${e.pageX}px`;
      cursor.style.top = `${e.pageY}px`;
    };

    const handleMouseEnter = () => {
      cursor.classList.add("scale-[5]", "opacity-15");
    };

    const handleMouseLeave = () => {
      cursor.classList.remove("scale-[5]", "opacity-15");
    };

    document.addEventListener("mousemove", moveCursor);
    document.querySelectorAll("a, button, input, textarea, .cursor-link").forEach((elm) => {
      elm.addEventListener("mouseenter", handleMouseEnter);
      elm.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      document.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return cursorRef;
};

export default useCursor;
