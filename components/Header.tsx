"use client";

import { useState } from "react";
import Link from "next/link";
import { Bell } from "lucide-react";


type HeaderProps = {
  menuItems?: string[];
};

export default function Header({
  menuItems = ["home", "about", "services", "contact"],
}: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="z-10 fixed top-0 left-0 w-full py-5">
      <div className="container mx-auto max-w-[1600px] px-5 md:px-10">
        <div className="flex justify-between relative">
          <div className="text-3xl font-outfit font-medium text-white">Mone</div>
          <div>
            <ul className="space-x-2 flex">
              <li className="list-none inline-block">
                <Link
                  href="#contact"
                  className="inline-block relative z-[1] overflow-hidden group px-5 py-2.5 pr-[34px] backdrop-blur bg-white/15 text-white font-outfit rounded-3xl uppercase text-sm font-medium tracking-wider before:content-[''] before:absolute before:left-0 before:top-0 before:w-full before:h-full before:bg-themeGradient before:opacity-0 hover:before:opacity-20 before:transition-all before:ease-linear before:duration-100 after:content-[''] after:absolute after:top-1/2 after:right-[20px] after:-translate-y-1/2 after:bg-white after:w-[5px] after:h-[5px] after:rounded-full after:transition-all after:duration-[60ms] hover:after:opacity-40 hover:after:scale-[2.7]"
                >
                  <span
                    className="  relative text-transparent before:content-[attr(data-text)] before:absolute before:top-0 before:left-0 before:opacity-100 before:text-white before:transition-all before:ease-out before:duration-200 group-hover:before:-top-full group-hover:before:opacity-0 after:content-[attr(data-text)] after:absolute after:top-full after:left-0 after:opacity-0 after:text-white after:transition-all after:ease-out after:duration-200 group-hover:after:top-0 group-hover:after:opacity-100"
                    data-text="Get in touch"
                  >
                    Get in touch
                  </span>
                </Link>
              </li>
              <li className="list-none inline-block">
                <button
                  onClick={() => setMenuOpen(!menuOpen)}
                  className="inline-block relative z-[1] overflow-hidden cursor-pointer group px-5 py-2.5 pr-[34px] bg-white text-black font-outfit rounded-3xl uppercase text-sm font-medium tracking-wider after:content-[''] after:absolute after:top-1/2 after:right-[20px] after:-translate-y-1/2 after:bg-black after:w-[5px] after:h-[5px] after:rounded-full after:transition-all after:duration-[60ms] hover:after:opacity-40 hover:after:scale-[2.7]"
                >
                  <span
                    className="block relative text-transparent before:content-[attr(data-text)] before:absolute before:top-0 before:left-0 before:opacity-100 before:text-black before:transition-all before:ease-out before:duration-200 group-hover:before:-top-full group-hover:before:opacity-0 after:content-[attr(data-text)] after:absolute after:top-full after:left-0 after:opacity-0 after:text-black after:transition-all after:ease-out after:duration-200 group-hover:after:top-0 group-hover:after:opacity-100"
                    data-text="Menu"
                  >
                    Menu
                  </span>
                </button>
              </li>
            </ul>
          </div>
          {/* Toggle Menu */}
          {menuOpen && (
            <nav className="nav-box absolute overflow-hidden top-[60px] right-0 bg-white/10 px-7 py-6 min-w-[250px] rounded-lg font-outfit text-xl backdrop-blur transition-all ease-linear duration-100 before:content-[''] before:absolute before:-z-[1] before:left-0 before:top-0 before:w-full before:h-full before:bg-themeGradient before:opacity-30">
              <ul className="space-y-[10px]">
                {menuItems.map((item) => (
                  <li key={item} className="list-none">
                    <Link
                      href={`#${item}`}
                      className="text-white block relative hover:pl-[26px] transition-all ease-out duration-300 group"
                    >
                      <Bell size={20} className="inline-block mr-2 opacity-0 invisible transition-all ease-linear duration-100 group-hover:opacity-100 group-hover:visible" />
                      {item.charAt(0).toUpperCase() + item.slice(1)}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          )}
        </div>
      </div>
    </div>
  );
}

