"use client";

import { useEffect, useState } from "react";

const Preloader = () => {
  const [isVisible, setIsVisible] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000); // وقت الإخفاء بعد 3 ثوانٍ
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`fixed inset-0 bg-black flex justify-center items-center transition-opacity duration-500 ${
        isVisible ? "opacity-100" : "opacity-0 hidden"
      }`}
      style={{ zIndex: 9999 }}
    >
      <div className="flex space-x-4 font-outfit font-normal uppercase text-white">
        {["L", "O", "A", "D", "I", "N", "G"].map((letter, index) => (
          <span
            key={index}
            className="opacity-100 inline-block transition ease-linear duration-100 animate-loader"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {letter}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Preloader;

