 'use client';

import { useEffect, useState } from 'react';

type Position = {
  x: number;
  y: number;
};


const Cursor = () => {
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', moveCursor);
    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  return (
    <div
      id="cursor"
      className="hidden lg:inline-block z-[11] absolute bg-white w-[10px] h-[10px] rounded-full mix-blend-difference pointer-events-none transition-all ease-linear duration-[80ms]"
      style={{
        transform: `translate(${position.x - 5}px, ${position.y - 5}px)`,
      }}
    />
  );
};

export default Cursor;


