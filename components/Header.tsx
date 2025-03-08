import useNavToggle from "../hooks/useNavToggle";

export default function Header() {
  const { isNavOpen: menuOpen, toggleNav: toggleMenu } = useNavToggle();

  return (
    <div className="z-10 fixed top-0 left-0 w-full py-5">
      <div className="container mx-auto max-w-[1600px] px-5 md:px-10">
        <div className="flex justify-between relative">
          <div className="text-3xl font-outfit font-medium text-white">Mone</div>
          <div>
            <ul className="space-x-2">
              <li className="list-none inline-block">
                <a
                  className="inline-block relative z-[1] overflow-hidden group px-5 py-2.5 pr-[34px] backdrop-blur bg-white/15 text-white font-outfit rounded-3xl uppercase text-sm font-medium tracking-wider"
                  href="#contact"
                >
                  Let's Talk
                </a>
              </li>
              <li className="list-none inline-block">
                <div
                  id="nav-toggle"
                  onClick={toggleMenu}
                  className="inline-block cursor-pointer px-5 py-2.5 pr-[34px] bg-white text-black font-outfit rounded-3xl uppercase text-sm font-medium tracking-wider"
                >
                  Menu
                </div>
              </li>
            </ul>
          </div>
          {/* القائمة الجانبية */}
          <nav
            className={`nav-box absolute top-full right-0 bg-white/10 px-7 py-6 min-w-[250px] rounded-lg font-outfit text-xl backdrop-blur transition-all ease-linear duration-200 ${
              menuOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible translate-y-[5px]"
            }`}
          >
            <ul className="space-y-[10px] text-white">
              {["About", "Services", "Portfolio", "Awards", "Testimonial", "Blog", "Contact"].map(
                (item) => (
                  <li key={item} className="list-none">
                    <a
                      className="block relative hover:pl-[26px] transition-all ease-out duration-300"
                      href={`#${item.toLowerCase()}`}
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

