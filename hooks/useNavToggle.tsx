import { useState } from "react";

const useNavToggle = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => setIsNavOpen(!isNavOpen);
  const closeNav = () => setIsNavOpen(false);

  return { isNavOpen, toggleNav, closeNav };
};

export default useNavToggle;
